export default function Footer(){
    const socialIcons = [
        "Social Icons.svg",
        "Social Icons(-1).svg",
        "Social Icons(-2).svg",
        "Social Icons(-3).svg",
    ]
   return(
    <div className="flex justify-between items-center bg-Footer-black text-white py-10 px-52">
    <div className="flex flex-col justify-between items-center gap-7">
    <img src="./public/white-logo.svg" alt="icon" />
    <div className="pl-3">
        <p className="text-[10px] font-normal">Copyright © 2020 Landify UI Kit.</p>
        <p className="text-[10px] font-normal">All rights reserved</p>
    </div>
    <div className="flex justify-start items-start gap-3">
        {socialIcons.map((icon,i) =>
        <img key={i} className="bg-slate-600 rounded-full" src={`${icon}`}/>
        )}
    </div>

    </div>
    <div className="flex justify-center items-start gap-10">
        <div className="flex flex-col justify-start items-start gap-4">
<span className="text-md font-semibold py-1">Company</span>
<p className="text-[10px] font-normal">About us</p>
<p className="text-[10px] font-normal">Pricing</p>
<p className="text-[10px] font-normal">Contact us</p>
<p className="text-[10px] font-normal">Pricing</p>
<p className="text-[10px] font-normal">Testimonials</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
<span className="text-md font-semibold py-1">Support</span>
<p className="text-[10px] font-normal">Help center</p>
<p className="text-[10px] font-normal">Terms of service</p>
<p className="text-[10px] font-normal">Legal</p>
<p className="text-[10px] font-normal">Privecy policy</p>
<p className="text-[10px] font-normal">Status</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
<span className="text-md font-semibold py-1">Stay up to date</span>
<div className="relative flex justify-between items-center">
<input className="flex justify-between items-center text-[10px] font-normal bg-slate-600 rounded-App p-2 w-[178px] max-w-48" type="email" placeholder="Your email adress"/>
<img className="absolute right-2" src="/send.svg"/>
</div>
        </div>
    </div>
</div>
   )
}