import {GoKebabHorizontal, GoX} from "react-icons/go";

export default  function ActionSheetButtons({showMenu,setShowMenu}){
    function switchMenu(){
        setShowMenu(!showMenu);
    }

    function handleClose() {
        window.open('https://www.fgacyc.com/back', "_self")
    }



    return (
        <div className={`flex flex-row justify-around border border-gray-200 
                shadow-sm rounded-full w-[80px] p-1 
                absolute right-2 top-2 bg-white 
                ` }>
            <GoKebabHorizontal className={"w-[20px] h-[20px] cursor-pointer"}
                                onClick={switchMenu}
            />
            <GoX className={"w-[20px] h-[20px] cursor-pointer"}
                onClick={handleClose}
            />
        </div>
    )
}