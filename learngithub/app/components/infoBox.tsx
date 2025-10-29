import React, { ReactNode } from "react";

type PropTypes = {
    children?: ReactNode
}

export default function Infobox({children}:PropTypes){
    return(
        <div className="text-gray-400 border w-1/2 mt-10 p-5">{children}</div>
    )
}