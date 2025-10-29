"use client"
import { ReactNode, useState } from "react";   

type HintText = {
    children: ReactNode;
}

export default function HintComponent({children}:HintText){
    function flipState(){
        setHintState(!hintState);
    }

    const [hintState, setHintState] = useState(false);

    return(
        <div className="flex items-center">
            <button onClick={flipState} className="p-5 bg-gray-800 mt-5 rounded-xl hover:bg-gray-600">Show Hint</button>
            {hintState && <p className="mt-5 ml-5">{children}</p>}
        </div>
    )
}