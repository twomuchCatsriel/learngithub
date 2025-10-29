import React, { ReactNode } from "react";

type Objprops = {
    children: ReactNode;
}

export default function SubCategory({children}:Objprops){
    return(
        <p className="text-2xl mt-10 font-bold">{children}</p>
    )
}