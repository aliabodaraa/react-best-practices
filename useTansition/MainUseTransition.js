import { useState,useTransition } from "react";

const MainUseTransition = () => {
    let [isPending,startTransition]=useTransition();
    let [arr,setArr]=useState([]);
    let [input,setInput]=useState([]);
    let HeavyWorkEvent=(e)=>{
        setInput(e.target.value);//a high priority by default
        startTransition(()=>{//move all code inside it as a low priority
            let arrTemp=[];
            for (let index = 0; index < 2000; index++) {
                arrTemp.push(e.target.value)
            }
            setArr(arrTemp);
        });
    }
    return (//we use is Pending to check if transition is end
        <>
            <input type="text" value={input} onChange={e=>HeavyWorkEvent(e)} />
            {isPending ? "Loading ..." : arr.map((ele,ind)=> <h1 key={ind}>{ele}</h1> )
            }</>
    );
}
 
export default MainUseTransition;