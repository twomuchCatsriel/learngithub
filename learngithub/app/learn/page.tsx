import Link from "next/link";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";
import Section4 from "../components/section4";

const subClass = "ml-5";

export default function Learn(){
    return(
        <div className="bg-gray-700 sm:flex text-white">
            <div className="sm:w-1/5 p-5 bg-gray-800 sm:sticky sm:top-0 sm:overflow-y-auto sm:h-screen"> {/* Info Box */}
                <h1 className="text-2xl font-bold">Innhold</h1>
                <div className=" flex flex-col mt-5 text-gray-400">
                    <Link href={"#PreRequisites"}>Del #1: Forutsetninger</Link>
                    <Link href={"#Git"}>Del #2: Hva er Git?</Link>
                    <Link href={"#GitHub"}>Del #3: GitHub</Link>
                    <Link href={"#FirstRepository"} className={subClass}>- Seksjon #1: Ditt første Repository</Link>
                    <Link href={"#DeepDive"} className={subClass}>- Seksjon #2: Dypere om Repository</Link>
                    <Link href={"#Desktop"} className={subClass}>- Seksjon #3: GitHub Desktop</Link>
                    <Link href={"#Freedom"}>Del #4: Nå er du klar!</Link>
                </div>
            </div>
            
            <div className="sm:w-2/3 sm:w-4/5 p-5 bg-gray-700"> {/* Learn */}
                <Section1></Section1>
                <Section2></Section2>
                <Section3></Section3>
                <Section4></Section4>
            </div>

        </div>
    )
}