import GrayButton from "./GrayButton";
export default function Costumer(){
    const iconsArray = [
        "purple-logo.svg",
        "Logo (2).svg",
        "Logo (3).svg",
        "Logo (4).svg",
        "Logo (5).svg",
        "Logo (6).svg",
    ]
    return(
        <div className="flex justify-between items-start px-52 py-10 bg-Hero-gray ">
            <img className="rounded-App" src="./public/costumer.png" alt="costumer"/>
            <div className="flex flex-col justify-between items-start gap-6 max-w-[520px]">
                <p className="text-xs text-Hero-ligth-gray">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <span className="text-sm font-semibold text-Header-green">Tim Smith</span>
           <p className="text-xs text-Hero-ligth-gray">British Dragon Boat Racing Association</p>
            <div className="flex justify-start items-center gap-6">
                {iconsArray.map((icon,i) => 
                  <img key={i} src={`./${icon}`} alt="icon"/>
                )}
                <GrayButton>Meet all costumers</GrayButton>
            </div>
            </div>
        </div>
    )
}