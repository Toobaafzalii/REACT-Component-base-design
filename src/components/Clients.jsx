export default function Clients(){
    const clientIcon = [
        "Logo (1).svg",
        "Logo (2).svg",
        "Logo (3).svg",
        "Logo (4).svg",
        "Logo (5).svg",
        "Logo (6).svg",
        "Logo (7).svg",
    ]
    return(
        <div className="flex flex-col justify-between items-center py-7 px-52 gap-2">
            <span className="text-3xl font-semibold text-Header-gray">Our Clients</span>
            <p className="text-sm font-normal text-Hero-ligth-gray">We have been working with some Fortune 500+ clients
            </p>
            <div className="w-full flex justify-between items-center py-8">
                {clientIcon.map((icon,i) =>
                   <img src={`./${icon}`} key={i} alt="icon"/>
                )}
            </div>
        </div>
    )

}