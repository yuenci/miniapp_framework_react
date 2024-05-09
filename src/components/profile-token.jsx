import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";

export  default function ProfileToken() {
    const [token, setToken] = useState('');
    const [decoded, setDecoded] = useState('');
    const [user, setUser] = useState(null);
    const [language, setLanguage] = useState('');

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


    useEffect(() => {
        const currentUrl = window.location.href;
        setUrl(currentUrl);
        const { token, language } = extractTokenAndLanguage(currentUrl);
        if (!token) return;
        setToken(token);

        if (language) {
            setLanguage(language);
        }else {
            setLanguage('en');
        }
        const decodedData = jwtDecode(token) ;
        setDecoded(decodedData)
    }, []);

    useEffect(() => {
        async function getUserInfo() {
            const domain = decoded.aud[1];
            const response = await fetch(domain, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            setUser(data);
        }
        if (decoded) {
            getUserInfo();
        }
    }, [decoded]);

    return (
        user && (
            <div className={"absolute top-2 left-2 flex flex-row items-center"}>
                <img src={user.picture} alt={user.name} className={"rounded-full w-8"} />
                <div className={"text-xs ml-2"}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            </div>
        )
    );
}
