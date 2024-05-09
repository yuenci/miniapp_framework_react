import { create } from 'zustand'
import {jwtDecode} from "jwt-decode";

function extractTokenAndLanguage(url) {
    let regex = /token=([^&]+).*?&language=([^&]+)/;
    let match = url.match(regex);
    if (match) {
        let token = match[1];
        let language = match[2];
        return { token: token, language: language };
    } else {
        return { token: null, language: null };
    }
}


export const useUserStore = create((set) => ({
    user : null,
    language: 'en',
    initUser: async () => {
        const currentUrl = window.location.href;
        let { token, language } = extractTokenAndLanguage(currentUrl);
        if (!token) return;
        if (language) set({ language: language });
        const decodedData = jwtDecode(token);
        if (!decodedData) return;
        const domain = decodedData.aud[1];
        const response = await fetch(domain, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        // console.log("data", data)
        set({ user: data });
    }
}))