import {GoKebabHorizontal, GoX} from "react-icons/go";

export default  function ActionSheetButtons(){
    return (
        <div className={`flex flex-row justify-around border border-gray-200 
                shadow-sm rounded-full w-[80px] p-1 
                absolute right-2 top-2 bg-white 
                ` }>
            <GoKebabHorizontal className={"w-[20px] h-[20px] cursor-pointer"} />
            <GoX className={"w-[20px] h-[20px] cursor-pointer"} />
        </div>
    )
}