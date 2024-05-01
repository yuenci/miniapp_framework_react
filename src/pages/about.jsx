import config from "../../package.json";
import {GoChevronRight} from "react-icons/go";

export default function About() {
    return (
        <div>
            <div className={"flex flex-col justify-center items-center bg-white mb-2"}>
                <header className={"p-2"}>About</header>
                <div className={"flex flex-col items-center p-8"}>
                    <img src="/app_icon.png" alt="app logo" className={"w-16"}/>
                    <h1 className={"text-black text-xl text-center mt-4"}>MiniApp Framework</h1>
                </div>

            </div>
            <div className={"bg-white mb-4 p-3"}>
                <div>Version: V{config.version}</div>
            </div>
            <div className={"bg-white mb-4 p-3"}>
                <div>Developer: {config.author}</div>
            </div>

            <div className={"bg-white mb-4 px-3 py-1"}>
                <div className={"py-2 flex flex-row justify-between  items-center"}>
                    <div>Terms of Service</div>
                    <GoChevronRight className={"w-[18px] h-[18px]"}/>
                </div>
                <hr/>
                <div className={"py-2 flex flex-row justify-between items-center"}>
                    <div className={"pt-2"}>Privacy Policy</div>
                    <GoChevronRight className={"w-[18px] h-[18px]"}/>
                </div>
            </div>
        </div>
    )
}