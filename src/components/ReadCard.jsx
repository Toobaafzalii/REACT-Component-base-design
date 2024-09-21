import GrayButton from "./GrayButton"

export default function ReadCard({card}){
    return(
        <div className="relative">
            <img className="rounded-App" src={`${card.src}`} alt="card-image" />
            <div className="absolute top-[80%] left-[10%] flex flex-col justify-between items-center text-center text-sm font-semibold text-Hero-ligth-gray bg-Hero-gray rounded-App gap-3 p-3 shadow-md max-w-52">
                <p>{`${card.text}`}</p>
                <GrayButton>Readmore</GrayButton>
            </div>
        </div>
    )
}