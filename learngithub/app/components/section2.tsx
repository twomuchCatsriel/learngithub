import Link from "next/link";
import React from "react";
import SectionHeader from "../components/sectionHeader";
import Paragraph from "../components/paragraph_Box";
import TrueHeader from "../components/TrueHeader";
import SubCategory from "../components/subCategory";
import Subheader from "../components/sectionSubheader";
import ExampleImage from "../components/readingImage";
import Infobox from "./infoBox";
import HintComponent from "./hintComponent";

const url = "text-red-200 hover:underline";
const list = "list-decimal ml-10 mb-10";
const ulist = "list-disc ml-10 mb-10";

export default function Section2(){
    return (
        <div>
            <span id="subpart2"><SubCategory>Seksjon #2 - Dypere om Repository</SubCategory></span>
            <Subheader>I denne seksjonen vil du lære om Branches, Pull Requests og hvordan man kan samarbeide gjennom GitHub.</Subheader>

            <Infobox>
                <Paragraph>Hvis du ikke ser filene i et repository, så betyr det at du er i en annen fane.</Paragraph>
                <Paragraph>Trykk "{`<>`} Code" på navigasjonsbaren på toppen av skjermen under repository-navnet for å gå tilbake til standardskjermen.</Paragraph>
            </Infobox>

            <Paragraph newParagraph={true}>Branches (Grener på Norsk) er en del av Git som det er nyttig å vite om.</Paragraph>
            <Paragraph>En gren lager en identisk kopi av prosjektet, som ikke påvirker hovedversjonen. (Kalt "Main" eller "hovedgrenen").</Paragraph>
            <Paragraph>En gren er helt selvstendig og alle endringer er kun tilstede på grenen, helt til de blir manuelt slått sammen (Kalt "Merging").</Paragraph>
        
            <Paragraph newParagraph={true}>Dette kan være litt vanskelig å forstå, så vi skal lage vår første gren så du kan se hvordan dette fungerer selv.</Paragraph>
            <SubCategory>La oss lage en gren</SubCategory>
            <ol className={list}>
                <li> <Paragraph>Fra hovedsiden av repository, trykk "Branch"-knappen øverst på siden, ved siden av branch-navnet (som vanligvis står på "main"). </Paragraph> </li>
                <li> <Paragraph>Du kommer nå til en oversikt over alle grenene i prosjektet. Du burde bare ha en gren som heter "main", altså hovedgrenen din. Trykk "New branch" som ligger øverst til høyre.</Paragraph> </li>
                <li> <Paragraph>Gi grenen et gjenkjennelig navn, og trykk «Create new branch»</Paragraph> </li>
                <li> 
                    <Paragraph>Du har nå laget en ny gren. Gå tilbake til «{`<>`} Code» fanen, og velg den nye grenen du lagde fra dropdown menyen</Paragraph>
                    <Paragraph>(Ved siden av "Branches" knappen som du trykket på steg 1.)</Paragraph>
                </li>
            </ol>
            <ExampleImage path="/makeabranch.gif" alt="A Gif of someone creating a GitHub branch" imageText="Bilde / GIF: Fremgangsmåten på hvordan man lager en gren."></ExampleImage>
            <Paragraph>Du har nå laget en ny gren, og byttet til denne nye grenen. Godt jobbet!</Paragraph>
            <Paragraph>La oss lage en endring på denne grenen nå.</Paragraph>

            <Infobox>
                <Paragraph>Utfordring: Klarer du å lage en <span className="font-bold">Markdown</span> fil på egen hånd?</Paragraph>
                <Paragraph>Bruk det du lærte i seksjon #1 for å lage en ny Markdown fil på denne nye grenen din.</Paragraph>
                <Paragraph>Kall den hva du vil, og skriv en liten melding i den. (For eksempel "Hello World")</Paragraph>
                <HintComponent>Hint: Trykk "Add File - Create new file", og gi filen et navn som slutter på .md</HintComponent>
            </Infobox>

            <Paragraph newParagraph={true}>Nå burde du ha to forskjellige Markdown filer i repoet. </Paragraph>
            <ExampleImage path="/twomarkdown.png" alt="A picture of a GitHub repository with 2 Markdown files." imageText="Bilde: En gren med to Markdown filer"></ExampleImage>

            <Paragraph>Hvis du bytter den aktive grenen tilbake til <span className="font-bold">main</span> så vil du se at denne nye filen ikke eksisterer.</Paragraph>
            <Paragraph>Dette er fordi du lagde filen på den nye grenen, ikke på <span className="font-bold">main</span>. Så hvordan slår vi disse grenene sammen?</Paragraph>

            <Paragraph newParagraph={true}>Det er her hvor Pull Requests kommer inn.</Paragraph>
            <Paragraph>Enkelt forklart, er en Pull Request (PR) en forespørsel om å slå sammen endringer mellom to forskjellige grener.</Paragraph>
            <SubCategory>Så la oss lage en Pull Request</SubCategory>
            <ol className={list}>
                <li> <Paragraph>Pass på at du er på <span className="font-bold">main</span> grenen.</Paragraph> </li>
                <li> <Paragraph>Det burde være en gul melding som forteller deg om at grenen har blitt pushet til nylig. Trykk «Compare & Pull request», til høyre i denne meldingen.</Paragraph> </li>
                <li> <Paragraph>Gi Pull Requesten et navn. Navnet burde beskrive forandringene som ble gjort i denne grenen.</Paragraph> </li>
                <li> <Paragraph>Skriv en kort beskrivelse av hva du forandret</Paragraph> </li>
                <li> <Paragraph>Trykk «Create pull request»</Paragraph> </li>
                <li> <Paragraph>Trykk «Merge Pull Request»</Paragraph> </li>
                <li> <Paragraph>Her får du se commit-navnet og beskrivelsen. Trykk «Confirm merge».</Paragraph> </li>
            </ol>

            <Paragraph>Nå har du slått sammen begge grenene, og main-grenen er oppdatert.</Paragraph>
            <Paragraph>Hvis du er ferdig med den nye grenen, er det vanlig å slette den.</Paragraph>
            <Paragraph>Det er trygt å slette en branch etter merging, fordi endringene ligger trygt i main.</Paragraph>

            <ol className={list}>
                <li className="mt-10"><Paragraph>Gå tilbake til «{`<>`} Code» skjermen, og trykk «Branch» igjen.</Paragraph> </li>
                <li> <Paragraph>Trykk søppelkassen på høyre side av grenen («Delete Branch»)</Paragraph></li>
            </ol>

            <SubCategory>NB: Bare slett grenen hvis du er helt ferdig med den. </SubCategory>
            <ExampleImage path="/pull.gif" alt="A gif showcasing how to create a Pull Request in GitHub" imageText="Bilde / GIF: Gjennomgang av opprettelse, merging og sletting av en Pull Request"></ExampleImage>

            <Paragraph>Nå burde du bare ha <span className="font-bold">main</span> grenen, og denne grenen burde ha to <span className="font-bold">Markdown</span> filer.</Paragraph>
            <Paragraph>Du har nå laget din første pull request! Bra jobbet!</Paragraph>

            <Paragraph newParagraph={true}>En ting du burde vite er at <span className="font-bold">Pull Requests</span>  brukes ikke bare for å slå grener sammen. </Paragraph>
            <Paragraph>GitHub brukes ofte for å samarbeide med andre om kode. (Kalt «Open Source»).</Paragraph>
            <Paragraph newParagraph={true}>Andre folk kan ta koden din, og lage en <span className="font-bold">Fork</span>, altså en personlig kopi av prosjektet som ligger i deres egen GitHub-konto. </Paragraph>
            <Paragraph>På <span className="font-bold">Forken</span> kan de jobbe fritt uten å påvirke originalen.</Paragraph>
            <Paragraph>Deretter kan de lage en Pull Request for å få endringene som de har laget slått sammen med prosjektet. </Paragraph>
            <Paragraph>Prosjekteieren får sett over de foreslåtte endringene, og kan velge om Pull Requesten skal bli slått sammen (merget) eller ikke.</Paragraph>

            <Paragraph newParagraph={true}>På denne måten, kan flere personer samarbeide uten at alt blir ødelagt.</Paragraph>
            <Paragraph>Forskjellen på en branch og en fork er at en branch ligger i samme prosjekt, mens en fork ligger i din egen GitHub-konto.</Paragraph>
            <Paragraph>Brukere uten tilgang til hovedrepoet må bruke en fork, mens medlemmer av prosjektet kan lage branches.</Paragraph>

            
            <SubCategory>Hva har du lært så langt:</SubCategory>
                <ul className={ulist}>
                    <li> <Paragraph>Hva "Branches" er</Paragraph> </li>
                    <li> <Paragraph>Hvordan du lager en gren</Paragraph> </li>
                    <li> <Paragraph>Hva en main gren er (Hovedgren)</Paragraph> </li>
                    <li> <Paragraph>Hva en Pull Request er</Paragraph> </li>
                    <li> <Paragraph>Hvordan man lager en pull request, og hvordan man merger to grener</Paragraph> </li>
                    <li> <Paragraph>Hvordan man sletter ferdige grener</Paragraph> </li>
                    <li> <Paragraph>Hva Open Source er, og hvordan det fungerer</Paragraph> </li>
                </ul>
            
            <Paragraph>Bra jobbet!</Paragraph>
        </div>
    )
}