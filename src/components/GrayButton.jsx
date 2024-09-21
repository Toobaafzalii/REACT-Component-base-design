import { Children } from "react";

export default function GrayButton({children}){
    return (<button className="flex justify-center items-center bg-Hero-gray text-nowrap text-Header-green text-sm font-medium rounded-sm py-2.5 px-5 gap-1.5">
       {children} <img src="./public/right.svg"/>
    </button>)
    }