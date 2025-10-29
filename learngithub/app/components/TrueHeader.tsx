import React, { ReactNode } from "react";

type Objprops = {
    children?: ReactNode;
}

export default function TrueHeader({children}:Objprops){
    return <h1 className="text-4xl font-bold">{children}</h1>
}