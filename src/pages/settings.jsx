import {GoChevronLeft, GoChevronRight} from "react-icons/go";
import config from "../../package.json";

export default function Settings(){
    return (
        <div>
            <div className={"absolute top-2 left-2"}
                 onClick={() => navigate('/')}>
                <GoChevronLeft className={"w-7 h-7"} />
            </div>
            <div className={"flex flex-col justify-center items-center bg-white mb-2"}>
                <header className={"py-3"}>Settings</header>
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