import React, { ReactNode } from "react";

type Objprops = {
    children?: ReactNode;
}

export default function SectionHeader({children}:Objprops){
    return <h1>{children}</h1>
}