import { useState } from "react";
import List from "./List";

const MainUseDeferredValue = () => {
    let [input,setInput]=useState([]);
    return (
        <>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
            <List input={input}/>
            </>
    );
}
 
export default MainUseDeferredValue;