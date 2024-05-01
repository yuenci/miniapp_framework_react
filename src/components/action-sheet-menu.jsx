import {GoCommentDiscussion, GoGear, GoHeart, GoInfo, GoKebabHorizontal, GoTrash, GoX} from "react-icons/go";
import {IoRefreshSharp} from "react-icons/io5";

function ActionSheetButton({title, icon,onClick}){

    return (
        <div className={"flex flex-col items-center "}>
            <div className={"flex flex-col items-center justify-center bg-gray-100 w-12 h-12 rounded-lg "}
                    onClick={onClick}
            >
                {icon}
            </div>
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


    return (
        <div
            className={`absolute bottom-0 ease-in-out duration-300  
            ${showMenu ? 'transition-transform translate-y-0' : 'transition-transform translate-y-full'}`}>

            <div className={`flex flex-col border shadow-lg rounded-t-3xl bg-white`}>
                <div className={"text-center p-3 border-b"}>
                    MiniApp Framework
                </div>
                <div className={"grid grid-cols-4 gap-2 w-screen p-4"}>
                    <ActionSheetButton title={"Favorite"} icon={<GoHeart className={buttonStyle}/>}/>
                    <ActionSheetButton title={"Feedback"} icon={<GoCommentDiscussion className={buttonStyle}/>}/>
                    <ActionSheetButton title={"Re-enter"} icon={<IoRefreshSharp className={buttonStyle}/>}
                                        onClick={handleRefresh}
                    />
                    <ActionSheetButton title={"Clean Cache"} icon={<GoTrash className={buttonStyle}/>}/>
                    <ActionSheetButton title={"About"} icon={<GoInfo className={buttonStyle}/>}
                                        onClick={goToAbout}
                    />
                    <ActionSheetButton title={"Settings"} icon={<GoGear className={buttonStyle}/>}/>
                    <ActionSheetButton title={"Edit"} icon={<GoHeart className={buttonStyle}/>}/>
                </div>
                <div className={"text-center p-5 border-t"}>
                    Cancel
                </div>
            </div>
        </div>
    )
}