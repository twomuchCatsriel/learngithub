import Link from "next/link";
import Section1 from "../components/section1";
import Section2 from "../components/section2";

const subClass = "ml-5";

export default function Learn(){
    return(
        <div className="bg-gray-700 sm:flex text-white">
            <div className="sm:w-1/5 p-5 bg-gray-800 sm:sticky sm:top-0 sm:overflow-y-auto sm:h-screen"> {/* Info Box */}
                <h1 className="text-2xl font-bold">Innhold</h1>
                <div className=" flex flex-col mt-5 text-gray-400">
                    <Link href={"#part1"}>Del #1: Forutsetninger</Link>
                    <Link href={"#part2"}>Del #2: Hva er Git?</Link>
                    <Link href={"#part3"}>Del #3: GitHub</Link>
                    <Link href={"#subpart1"} className={subClass}>- Seksjon #1: Ditt første Repository</Link>
                    <Link href={"#subpart2"} className={subClass}>- Seksjon #2: Dypere om Repository</Link>
                    <Link href={"#subpart3"} className={subClass}>- Seksjon #3: GitHub Desktop</Link>
                    <Link href={"#test4"}>Del #4: Nå er du klar!</Link>
                </div>
            </div>
            
            <div className="sm:w-2/3 sm:w-4/5 p-5 bg-gray-700"> {/* Learn */}
                <Section1></Section1>
                <Section2></Section2>
            </div>

        </div>
    )
}