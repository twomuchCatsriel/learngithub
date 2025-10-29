import React, { ReactNode } from "react";

type Objprops = {
    children?: ReactNode;
    newParagraph?: boolean;
}

export default function Paragraph({children, newParagraph}:Objprops){
    if (newParagraph !== true){
        return <p className="text-xl mt-3">{children}</p>}
    else{
        return <p className="text-xl mt-10">{children}</p>
    }
}