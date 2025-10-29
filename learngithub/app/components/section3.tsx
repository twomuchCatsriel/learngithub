import Link from "next/link";
import Paragraph from "../components/paragraph_Box";
import SubCategory from "../components/subCategory";
import Subheader from "../components/sectionSubheader";
import ExampleImage from "../components/readingImage";
import GrayText from "./grayText";

const url = "text-red-200 hover:underline";
const list = "list-decimal ml-10 mb-10";
const ulist = "list-disc ml-10 mb-10";

export default function Section3(){
    return(
        <div>
            <span id="Desktop"><SubCategory>Seksjon #3 - GitHub Desktop</SubCategory></span>

            <Subheader>GitHub Desktop kan lastes ned fra <Link className={url} href="https://desktop.github.com/download/">https://desktop.github.com/download/</Link>.</Subheader>
            <Subheader>Denne seksjonen antar at du har programmet lastet ned. Denne delen er ikke nødvendig for forståelse av GitHub, men det gjør arbeidet lettere.</Subheader>
            <Subheader>GitHub Desktop anbefaler også at du installerer Visual Studio Code. VSC kan lastes ned fra <Link className={url} href="https://code.visualstudio.com/. ">https://code.visualstudio.com. </Link></Subheader>
            <Subheader>Visual Studio Code er ikke nødvendig for å bruke GitHub Desktop, men er anbefalt.</Subheader>

            <SubCategory>NB: GitHub Desktop fungerer BARE på Windows og MacOS datamaskiner. GitHub desktop har IKKE Linux Støtte.</SubCategory>

            <Paragraph newParagraph={true}>GitHub Desktop er et program som kobler sammen GitHub med en GUI (Brukergrensesnitt).</Paragraph>
            <Paragraph>Git brukes vanligvis gjennom terminalen, men GitHub Desktop lar deg gjøre de fleste GIT-oppgaver som commits, branches og merges gjennom en visuell meny.</Paragraph>
            <Paragraph>Det er derfor enklere for nybegynnere å bruke GitHub Desktop.</Paragraph>

            <Paragraph newParagraph={true}>For å kunne bruke gjøre endringer på repoet lokalt, så må du klone repoet. Å Klone repoet lager en kopi av repoet som ligger lokalt på datamaskinen din.</Paragraph>

            <SubCategory>Kloning av repoet</SubCategory>
            <ol className={list}>
                <li> <Paragraph>Åpne GitHub Desktop </Paragraph> </li>
                <li><Paragraph>Gå til File - Clone Repository</Paragraph></li>
                <li><Paragraph>Velg Repoet du lagde tidligere</Paragraph></li>
                <li><Paragraph>Velg Filstien hvor du vil at repoet skal være</Paragraph></li>
                <li><Paragraph>Trykk "Clone"</Paragraph></li>
            </ol>

            <SubCategory>NB: Filstyringsprogrammer som OneDrive kan skape problemer med Git.  Du burde derfor passe på at repoet blir lagret utenfor OneDrive eller likende programmer, for eksempel direkte på C: driven.</SubCategory>
            <ExampleImage path="/desktop.gif" alt="A gif showcasing how to clone a GitHub repo using GitHub desktop." imageText="Bilde / GIF: Kloning av et GitHub Repo."></ExampleImage>

            <ul className={ulist}>
                <Subheader>Etter at du har klonet et repo, så får du 3 muligheter:</Subheader>
                <li className="ml-10 font-bold"><Paragraph>Open in Visual Studio Code</Paragraph></li>
                <GrayText>Hvis Visual Studio Code er installert, så åpner den repoet i VSC.</GrayText>
                <li className="ml-10 font-bold"><Paragraph>Show in Explorer</Paragraph></li>
                <GrayText>Viser repoet i filutforskeren din. (File Explorer på Windows)</GrayText>
                <li className="ml-10 font-bold"><Paragraph>View on GitHub</Paragraph></li>
                <GrayText>Åpner repoets GitHub side med standardnettleseren du bruker.</GrayText>
            </ul>

            <Paragraph newParagraph={true}>Nå som du har satt opp repoet ditt, vil alle endringene gjort til repoet gjort lokalt bli vist i Desktop appen.</Paragraph>
            <Paragraph>Derfra kan de <span className="font-bold">pushes</span> til repoet på GitHub.</Paragraph>
            
            <Paragraph newParagraph={true}>Et <span className="font-bold">Push</span> er å dytte endringene gjort lokalt over til repoet på GitHub.</Paragraph>
            <ExampleImage path="/desktopChanges.png" alt="A picture showcasing a deleted file showing up in GitHub desktop" imageText="Bilde: Et klonet GitHub repo med en slettet README fil. Endringene blir vist i GitHub Desktop, og kan derfra commites. "></ExampleImage>
            
            <SubCategory>Commit fra GitHub Desktop</SubCategory>
            <ol className={list}>
                <li> <Paragraph>Trykk "Show in Explorer" eller "Open in Visual Studio Code"</Paragraph> </li>
                <li> <Paragraph>Slett en av filene på repoet, og åpne Desktop igjen</Paragraph> </li>
                <li> <Paragraph>Nå burde du se forandringene du gjorde.</Paragraph> </li>
                <li> <Paragraph>Gi commiten et navn, og Commit den</Paragraph> </li>
                <li> <Paragraph>Trykk "Push Origin" for å dytte endringene over til GitHub</Paragraph> </li>
            </ol>

            <ExampleImage path="/desktopPush.gif" alt="A Gif showcasing how to Push from GitHub Desktop to GitHub" imageText="Bilde / GIF: Gjennomgang av hvordan å gjøre commits fra Desktop appen."></ExampleImage>
            <Paragraph>Nå har du brukt GitHub desktop for å commite endringene gjort lokalt, og pushet dem til GitHub.</Paragraph>
            <Paragraph newParagraph={true}>Noen ganger kan det lokale repoet falle bak GitHub repoet. Dette skjer når det er gjort endringer på GitHub repoet.</Paragraph>
            <Paragraph>For å fikse dette, så trykker du "Fetch Origin".</Paragraph>
            <Paragraph>"Fetch Origin" henter inn den nyeste versjonen av repoet, og oppdaterer det lokale repoet med alt som er nytt.</Paragraph>
            
            <SubCategory>NB: GitHub Desktop fetcher ikke automatisk. Du burde derfor trykke "Fetch Origin" hver gang du åpner et prosjekt, i tilfelle at noen endringer har blitt gjort. </SubCategory>

            <SubCategory>Hva har du lært så langt:</SubCategory>
            <ul className={ulist}>
                <li> <Paragraph>Hva GitHub Desktop er, og hvorfor folk bruker det</Paragraph> </li>
                <li> <Paragraph>Hvordan å klone et repo</Paragraph> </li>
                <li> <Paragraph>Hvordan å gjøre endringer i et repo</Paragraph> </li>
                <li> <Paragraph>Hvordan man bruker Commit og Push fra Desktop Appen</Paragraph> </li>
                <li> <Paragraph>Hvordan man bruker "Fetch Origin" effektivt.</Paragraph> </li>
            </ul>
            <Paragraph>Bra jobbet!</Paragraph>
       </div>
    )
}