import Link from "next/link";
import React from "react";
import SectionHeader from "../components/sectionHeader";
import Paragraph from "../components/paragraph_Box";
import TrueHeader from "../components/TrueHeader";
import SubCategory from "../components/subCategory";
import Subheader from "../components/sectionSubheader";
import ExampleImage from "../components/readingImage";
import Infobox from "./infoBox";

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
            </Infobox>
        </div>
    )
}