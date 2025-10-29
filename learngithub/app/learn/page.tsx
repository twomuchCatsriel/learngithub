import Link from "next/link";
import React from "react";

const subClass = "ml-5";

export default function Learn(){
    return(
        <div className="bg-gray-700 h-screen sm:flex text-white">
            <div className="sm:w-1/5 p-5 bg-gray-800"> {/* Info Box */}
                <h1 className="text-2xl font-bold">Innhold</h1>
                <div className=" flex flex-col mt-5 text-gray-400">
                    <Link href={"#test"}>Del #1: Forutsetninger</Link>
                    <Link href={"#test"}>Del #2: Hva er Git?</Link>
                    <Link href={"#test"}>Del #3: GitHub</Link>
                    <Link href={"#test"} className={subClass}>- Seksjon #1: Ditt første Repository</Link>
                    <Link href={"#test"} className={subClass}>- Seksjon #2: Dypere om Repository</Link>
                    <Link href={"#test"} className={subClass}>- Seksjon #3: GitHub Desktop</Link>
                    <Link href={"#test"}>Del #4: Nå er du klar!</Link>
                </div>
            </div>
            
            <div className="sm:w-2/3 sm:w-4/5 h-screen p-5 bg-gray-700"> {/* Learn */}
                <h1>test</h1>
            </div>

        </div>
    )
}