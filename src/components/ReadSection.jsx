import ReadCard from "./ReadCard"

export default function ReadSection(){
    const cardData = [
        {
            src:"/image 18.png",
            text:"Creating Streamlined Safeguarding Processes with OneRen",
        },
        {
            src:"/image 19.png",
            text:"What are your safeguarding responsibilities and how can you manage them?",
        },
        {
            src:"/image 20.png",
            text:"Revamping the Membership Model with Triathlon Australia",
        }
    ]
    
    return(
        <div className="flex justify-between items-center px-52">
            {cardData.map((item,i) => 
            <ReadCard card={item} key={i} />
            )}
        </div>
    )
}