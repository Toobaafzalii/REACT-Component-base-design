import Button from "./Button";

export default function Header() {
    return (
     <div className="flex justify-between items-center py-6 px-52 ">
<img src="./public/logo.svg" alt="icon" />
<div className="flex justify-between items-center gap-6">
    <div className="text-xs font-medium text-Header-gray">Home</div>
    <div className="text-xs font-medium text-Header-gray">Features</div>
    <div className="text-xs font-medium text-Header-gray">Community</div>
    <div className="text-xs font-medium text-Header-gray">Blog</div>
    <div className="text-xs font-medium text-Header-gray">Pricing</div>
  <Button >Register Now <img src="./public/Down.svg"/></Button>
</div>
     </div>
         )
  }
  
  