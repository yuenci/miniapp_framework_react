import config from "../../package.json";
import {
    GoCommentDiscussion,
    GoGear,
    GoHeart,
    GoInfo,
    GoPerson,
    GoShareAndroid,
    GoTrash,
} from "react-icons/go";
import {IoRefreshSharp} from "react-icons/io5";
import {useActionSheetMenuStore} from "@/store/action-sheet-menu-store.js";
import {capitalizeAllFirstLetters} from "./tools.js";
import {useUserStore} from "@/store/user-store.js";
import {useTranslation} from "react-i18next";

function ActionSheetButton({title, icon,onClick}){

    return (
        <div className={"flex flex-col items-center "}>
            <button className={"flex flex-col items-center justify-center bg-gray-100 w-12 h-12 rounded-lg cursor-pointer"}
                    onClick={onClick}
            >
                {icon}
            </button>
            <div className={"text-xs mt-1 text-gray-500"}>{title}</div>
        </div>
    )

}

export default  function ActionSheetMenu(){
    const [showMenu,setShowMenu] = useActionSheetMenuStore(state => [state.showMenu,state.setShowMenu]);
    const [token,lang] = useUserStore(state => [state.token,state.language]);
    const buttonStyle = "w-[28px] h-[28px]";
    const {t} =  useTranslation();

    const buttonsData = [
        // {
        //     title: t("Favorite"),
        //     icon: <GoHeart className={buttonStyle}/>
        // },
        {
            title: t("Feedback"),
            icon: <GoCommentDiscussion className={buttonStyle}/>,
            onClick: () => window.open(`https://miniapp-feedback.vercel.app/?app=${config.app_id}?token=${token}&&language=${lang}`, "_self")
        },
        {
            title: t("Re-enter"),
            icon: <IoRefreshSharp className={buttonStyle}/>,
            onClick: () => window.location.reload()
        },
        {
            title: t("Clean Cache"),
            icon: <GoTrash className={buttonStyle}/>,
            onClick: () => {
                localStorage.clear();
                window.location.reload();
            }
        },
        {
            title: t("Settings"),
            icon: <GoGear className={buttonStyle}/>,
            onClick: () => window.open('/settings', "_self")
        },
        {
            title: t("Profile"),
            icon: <GoPerson className={buttonStyle}/>,
            onClick:()=>window.open('https://fga-accounts-center.pages.dev/',"_self")
        },
        {
            title: t("About"),
            icon: <GoInfo className={buttonStyle}/>,
            onClick: () => window.open('/about', "_self")
        },
        {
            title: t("Share"),
            icon: config.shared ? <GoShareAndroid className={buttonStyle}/>
                :<GoShareAndroid className={`${buttonStyle} text-gray-300`}/>,
            onClick: !config.shared ? null : () => navigator.clipboard.writeText(window.location.href)
        }
    ]


    return (
        <div>
            <div className={`absolute top-0 h-screen w-screen  transition duration-300 ease-in-out
            ${showMenu ? 'z-10 bg-[#00000030]': '-z-10 bg-[#00000000]' }`}
                    onClick={() => setShowMenu(false)}
            ></div>
            <div
                className={`absolute bottom-0 ease-in-out duration-300  w-full   z-20
            ${showMenu ? 'transition-transform translate-y-0' : 'transition-transform translate-y-full'}`}>
                <div className={`flex flex-col border shadow-lg rounded-t-3xl bg-white`}>
                    <div className={"text-center p-3 border-b "}>
                        {capitalizeAllFirstLetters(config.name)}
                    </div>
                    <div className={"grid grid-cols-4 gap-2 p-4 w-full"}>
                        {buttonsData.map((button, index) => (
                            <ActionSheetButton key={index} title={button.title} icon={button.icon}
                                               onClick={button.onClick}/>
                        ))}
                    </div>
                    <div className={"text-center p-5 border-t cursor-pointer"}
                         onClick={() => setShowMenu(false)}>
                        Cancel
                    </div>
                </div>
                {/*<div className={`absolute bottom-0 h-screen w-full bg-red-200`}>*/}
                {/*    /!*    ${!showMenu && 'hidden'}*!/*/}

                {/*</div>*/}
            </div>
        </div>
    )
}