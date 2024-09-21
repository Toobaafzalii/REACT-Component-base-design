export default function CountBox({countingItem}){
return(<div id={`${countingItem.id}`} className="flex justify-start items-center gap-3 max-w-[178px]">
    <img className="w-8 h-8" src={`${countingItem.src}`} alt="icon" />
    <div className="flex flex-col justify-between items-start">
        <span className="text-xl font-bold ">{`${countingItem.count}`}</span>
        <p className="text-xs text-Hero-ligth-gray">{`${countingItem.item}`}</p>
    </div>
</div>)
}