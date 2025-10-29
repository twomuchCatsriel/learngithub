import Image from "next/image";
import React from "react";

type SetProps = {
    path: string;
    alt: string;
    imageText: string;
}

export default function ExampleImage({path, alt, imageText}:SetProps){
    return(
        <div>
            <Image src={path} width={1000} height={1000} alt={alt} className="sm:w-[90%] mt-20 rounded-xl"></Image>
            <p className="text-lg text-gray-400 mb-10 ">{imageText}</p>
        </div>

    )
}