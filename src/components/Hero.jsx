import Button from "./Button"
export default function Hero(){
 return(   <div className="w-full flex justify-between items-center bg-Hero-gray py-16 px-52">
    <div className="flex flex-col justify-center items-start max-w-[475px] gap-3">
        <div className="text-[44px] font-semibold text-Header-gray">Lessons and insights <span className="text-Header-green">from 8 years</span></div>
        <p className="text-xs font-normal text-Hero-ligth-gray">Where to grow your business as a photographer: site or social media?</p>
    <Button><span>Register</span></Button>
    </div>
    <img src="./public/hero-face.svg" alt="Hero" />
</div>)
}