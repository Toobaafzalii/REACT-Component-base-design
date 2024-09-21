import CountBox from "./CountBox";
export default function Helping(){
    const itemsArray = [
        {
            id:"item1",
            src:"./public/item-icon1.svg",
            count:"2,245,341",
            item: "Members",
        },
        {
            id:"item2",
            src:"./public/item-icon3.svg",
            count:"46,328",
            item: "Clubs",
        },
        {
            id:"item3",
            src:"./public/item-icon3.svg",
            count:"828,867",
            item: "Event Bookings",
        },
        {
            id:"item4",
            src:"./public/item-icon4.svg",
            count:"1,926,436",
            item: "Payments",
        },
    ]
return(
    <div className="flex justify-between items-center bg-Hero-gray py-11 px-52">
    <div className="flex flex-col justify-center items-start gap-1.5">
    <div className="text-[25px] font-semibold text-Header-gray">Helping a local <span className="text-Header-green"><br />business reinvent itself</span>
    <p className="text-xs font-normal text-Header-gray">We reached here with our hard work and dedication</p></div>
    </div>
    <div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-5 max-w-[376px]">
        {itemsArray.map((item , i)=>
        <CountBox countingItem = {item} key={i} />
        )}
    </div>
    </div>
)
}
