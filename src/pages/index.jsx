import reactLogo from '@/assets/react.svg'
import fgaTechLogo from '/fga_tech.png'
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import Profile from "@/components/profile.jsx";


export default function Index() {
    const [count, setCount] = useState(0)
    const navigate = useNavigate();
    const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
    const {UID} = useParams();
    console.log(UID);

    useEffect(() => {
        console.log(user);
    }, [isLoading]);

    function goToAbout() {
        navigate('/about');
    }

    function goToLogin(){
        loginWithRedirect();
    }

    return (
        <div className={"h-screen flex flex-col justify-center items-center"}>
            <Profile />
            <div className={"flex flex-row justify-between items-center w-[300px] "}>
                <div onClick={goToAbout}>
                    <img src={fgaTechLogo} className="w-28 cursor-pointer" alt="Vite logo"/>
                </div>
                <div onClick={goToAbout}>
                    <img src={reactLogo} className="w-28  cursor-pointer" alt="React logo"/>
                </div>
            </div>
            <h1 className={"text-black font-bold text-4xl text-center my-8"}>MiniApp Framework</h1>
            <div className="text-center p-8">
                <button className={`text-white rounded-lg bg-[#1a1a1a] py-2 px-4 border-2
                cursor-pointer border-transparent hover:border-[#192F8A] transition duration-300 ease-in-out`}
                        onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p className={"my-4"}>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="text-[#888888] text-center my-4">
                Click on the logos to learn more
            </p>
        </div>
    )
}