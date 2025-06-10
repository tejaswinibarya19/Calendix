'use client';
import { useEffect,useState } from "react";
export default function Hero(){

    const[showLine,setShowLine]=useState(false);
    useEffect(()=>{
        setShowLine(true);
    },[]);
    return(
        <section className="text-center mt-24"> 
        <h1 className="text-4xl font-bold mb-6 leading-tight ">Scheduling<span className={"text-blue-600 cool-underline"+(showLine?'show-underline':'')}> made simple</span>
          <br/> for people like you
        </h1>
        <p className="text-gray-600">Most scheduling apps are simple but ours is even more simple. <br/>
        On top of this ,its open source and you can see the code.
        </p>
        <div>
            <link href="/">Get started for free</link>
        </div>
     </section>
    );
}