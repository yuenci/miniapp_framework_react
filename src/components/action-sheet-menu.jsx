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

export default  function ActionSheetMenu({showMenu,setShowMenu}){
    const buttonStyle = "w-[28px] h-[28px]";

    function  handleRefresh(){
        window.location.reload();
    }

    function goToAbout() {
        window.open('/about', "_self");
    }

    function cancel(){
        setShowMenu(false);
    }

    function  copyToClipboard(){
        navigator.clipboard.writeText(window.location.href);
    }

    const buttonsData = [
        {
            title: "Favorite",
            icon: <GoHeart className={buttonStyle}/>
        },
        {
            title: "Feedback",
            icon: <GoCommentDiscussion className={buttonStyle}/>
        },
        {
            title: "Re-enter",
            icon: <IoRefreshSharp className={buttonStyle}/>,
            onClick: handleRefresh
        },
        {
            title: "Clean Cache",
            icon: <GoTrash className={buttonStyle}/>
        },
        {
            title: "Settings",
            icon: <GoGear className={buttonStyle}/>
        },
        {
            title: "Profile",
            icon: <GoPerson className={buttonStyle}/>
        },
        {
            title: "About",
            icon: <GoInfo className={buttonStyle}/>,
            onClick: goToAbout
        },
        {
            title: "Share",
            icon: config.shared ? <GoShareAndroid className={buttonStyle}/>
                :<GoShareAndroid className={`${buttonStyle} text-gray-300`}/>,
            onClick: config.shared ? copyToClipboard : null
        }
    ]


    return (
        <div className={`absolute bottom-0 w-full h-screen transition duration-300 ${showMenu && 'bg-[#00000040]'}`}
                onClick={cancel}
        >
            <div
                className={`ease-in-out duration-300 absolute bottom-0 w-full
            ${showMenu ? 'transition-transform translate-y-0' : 'transition-transform translate-y-full'}`}>

                <div className={`flex flex-col border shadow-lg rounded-t-3xl bg-white`}>
                    <div className={"text-center p-3 border-b "}>
                        MiniApp Framework
                    </div>
                    <div className={"grid grid-cols-4 gap-2 p-4 w-full"}>
                        {buttonsData.map((button, index) => (
                            <ActionSheetButton key={index} title={button.title} icon={button.icon}
                                               onClick={button.onClick}/>
                        ))}
                    </div>
                    <div className={"text-center p-5 border-t cursor-pointer"} onClick={cancel}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    )
}