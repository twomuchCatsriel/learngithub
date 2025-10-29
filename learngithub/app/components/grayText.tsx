import React, { ReactNode } from "react";

type Objprops = {
    children?: ReactNode;
}

export default function GrayText({children}:Objprops){
    return <h1 className="text-xl text-gray-400">{children}</h1>
}