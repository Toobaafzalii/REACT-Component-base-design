export default function Button({children}){
return (<button className="flex justify-center items-center text-nowrap bg-Header-green text-white text-xs font-medium rounded-sm py-2.5 px-5 gap-1.5">
    {children}
    </button>)
}