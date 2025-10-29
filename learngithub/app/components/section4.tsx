import Link from "next/link";
import Paragraph from "./paragraph_Box";
import SectionHeader from "./sectionHeader";
import SubCategory from "./subCategory";

const url = "text-red-200 hover:underline";
const list = "list-decimal ml-10 mb-10";
const ulist = "list-disc ml-10 mb-10";

export default function Section4(){
    return(
        <div>
            <SectionHeader id="Freedom">Del #4 – Nå er du klar!</SectionHeader>
            <Paragraph>Nå har du lært det grunnleggende om GitHub og GitHub Desktop.</Paragraph>
            <SubCategory>Dette kan du nå:</SubCategory>

            <ul className={ulist}>
                <li><Paragraph>Lage Repository</Paragraph></li>
                <li><Paragraph>Commite endringer</Paragraph></li>
                <li><Paragraph>Se Commithistorikk</Paragraph></li>
                <li><Paragraph>Lage og Bruke Branches</Paragraph></li>
                <li><Paragraph>Pull-Requests og Merging</Paragraph></li>
                <li><Paragraph>Open Source</Paragraph></li>
                <li><Paragraph>Bruke GitHub Desktop (Cloning, Committing, Pushing)</Paragraph></li>
            </ul>

            <Paragraph>Det finnes helt klart mer du kan lære om GitHub, og denne guiden dekker bare det viktigste som du trenger å vite. </Paragraph>
            <Paragraph>Ikke vær redd for å prøve deg fram med de forskellige knappene på GitHub.</Paragraph>
            <Paragraph>Kildekoden til dette prosjektet ligger også på <Link href={"https://github.com/twomuchCatsriel/learngithub"} className={url}>GitHub</Link>. Hvis du vil ha noen endringer i prosjektet, så kan du lage en Pull Request.</Paragraph>
            <Paragraph>Jeg håper at alt her var forståelig, jeg prøvde å gjøre alt så nybegynnervennlig som mulig.</Paragraph>
        </div>
    )
}