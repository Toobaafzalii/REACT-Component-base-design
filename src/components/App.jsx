
import Clients from "./Clients";
import Community from "./community";
import Header from "./Header";
import Hero from "./Hero";
import LearnMore from "./Learnmore";
import Helping from "./Helping";
import Costumer from "./Costumer";
import ReadSection from "./ReadSection";
import Demo from "./Demo";
import Footer from "./Footer";

export default function App() {
  const data1 = {
    src: './public/learn1.svg',
    title: 'The unseen of spending three years at Pixelgrade',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',}
    const data2 = {
src:'./public/learn2.svg',
title:'How to design your site footer like we did',
paragraph:'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.',
    }
    
    return (
   <div className="container mx-auto max-w-full">
      <Header/>
      <Hero/>
      <Clients/>
      <div className="flex flex-col justify-between items-center text-center py-7 px-52 gap-3">
      <span className="text-3xl font-semibold text-Header-gray max-w-[450px]">Manage your entire community in a single system</span>
      <p className="text-sm font-normal text-Hero-ligth-gray">Manage your entire community in a single system
            </p>
            </div>
            <Community/>
            <LearnMore data={data1} />
            <Helping/>
            <LearnMore data={data2} />
            <Costumer/>
            <div className="flex flex-col justify-between items-center text-center py-7 px-52 gap-3">
      <span className="text-3xl font-semibold text-Header-gray">Caring is the new marketing</span>
      <p className="text-sm font-normal text-Hero-ligth-gray max-w-[480px]">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
        </p>
   </div>
   <ReadSection/>
   <Demo/>
   <Footer/>
</div>
    )}
