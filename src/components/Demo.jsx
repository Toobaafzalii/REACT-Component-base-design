import Button from "./Button"
export default function Demo(){
    return(
        <div className="flex flex-col justify-center items-center text-center bg-Hero-gray py-6 mt-40 gap-6 px-52">
    <span className="text-[44px] font-semibold text-Header-gray max-w-[672px]">Pellentesque suscipit fringilla libero eu.</span>
    <Button>Get a Demo <img src="./public/Down.svg"/></Button>
    </div>
    )
}