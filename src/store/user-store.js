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
    UID: null,
    language: 'en',
    getUID:() => {
        if (useUserStore.getState().UID) {
            return useUserStore.getState().UID;
        }else{
            const currentUrl = window.location.href;
            const { token,language } = extractTokenAndLanguage(currentUrl);
            if (language) set({ language: language });
            if (token) {
                const decodedData = jwtDecode(token);
                if (decodedData) {
                    set({ UID: decodedData.sub });
                    return useUserStore.getState().UID;
                }
            }
        }

    },
    initUser: async () => {
        const currentUrl = window.location.href;
        let { token,language } = extractTokenAndLanguage(currentUrl);
        if (!token) return;
        if (language) set({ language: language });
        const decodedData = jwtDecode(token);
        if (!decodedData) return;
        set({ UID: decodedData.sub });
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