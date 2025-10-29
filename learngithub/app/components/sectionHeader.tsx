import React, { ReactNode } from "react";

type Objprops = {
    children?: ReactNode;
    id: string;
}

export default function SectionHeader({children, id}:Objprops){
    return <h1 className="text-4xl font-bold mt-30" id={id}>{children}</h1>
}