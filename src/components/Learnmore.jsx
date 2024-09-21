import Button from "./Button";
export default function LearnMore({data}){
    return(
        <div className="flex justify-between items-center px-52 py-10">
       <img src={`${data.src}`} alt="image"/>
       <div className="flex flex-col justify-center items-start gap-6 max-w-[461px]">
        <span className="text-3xl font-bold ">{`${data.title}`}</span>
        <p className="text-xs text-Hero-ligth-gray">{`${data.paragraph}`}</p>
        <Button>Learn More</Button>
       </div>
        </div>
    )
}