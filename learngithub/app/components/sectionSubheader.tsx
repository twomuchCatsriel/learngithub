import React, { ReactNode } from "react";

type Objprops = {
    children: ReactNode;
}

export default function Subheader({children}:Objprops){
    return(
        <p className="text-xl mt-2 italic">{children}</p>
    )
}