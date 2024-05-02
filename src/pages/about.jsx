import config from "../../package.json";
import {GoChevronLeft, GoChevronRight} from "react-icons/go";
import {useNavigate} from "react-router-dom";
import {NavBar} from "antd-mobile";
import Block from "@/components/block.jsx";

export default function About() {
    const navigate = useNavigate();

    return (
        <div>
            <NavBar onBack={() => navigate("/")}
                    className={"bg-white"}
            >About</NavBar>
            <div className={"flex flex-col items-center p-8 bg-white mb-2"}>
                <img src="/app_icon.png" alt="app logo" className={"w-16"}/>
                <h1 className={"text-black text-xl text-center mt-4"}>MiniApp Framework</h1>
            </div>

            <Block>
                <div>Version: V{config.version}</div>
            </Block>

            <Block>
                <div>Developer: {config.author}</div>
            </Block>

            <Block>
                <div className={"py-2 flex flex-row justify-between  items-center"}>
                    <div>Terms of Service</div>
                    <GoChevronRight className={"w-[18px] h-[18px]"}/>
                </div>
                <hr/>
                <div className={"py-2 flex flex-row justify-between items-center"}>
                    <div className={"pt-2"}>Privacy Policy</div>
                    <GoChevronRight className={"w-[18px] h-[18px]"}/>
                </div>
            </Block>
        </div>
)
}