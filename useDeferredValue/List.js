import { useDeferredValue, useEffect, useMemo } from "react";

const List = ({input}) => {
    const LIST_SIZE=20000;
    const deferredInput=useDeferredValue(input);//will not take its value until the program is finish all its work
    const list=useMemo(()=>{
        const l=[];
        for (let index = 0; index < LIST_SIZE; index++) {
            l.push(<div key={index}>{deferredInput}</div>);            
        }
        return l;
    },[deferredInput]);

    useEffect(()=>{
        console.log(`deferredInput : ${deferredInput} / input : ${input}`);
    },[deferredInput,input]);
    return list;
}
 
export default List;