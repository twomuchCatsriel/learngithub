import Link from "next/link";
import React from "react";
import SectionHeader from "../components/sectionHeader";
import Paragraph from "../components/paragraph_Box";
import TrueHeader from "../components/TrueHeader";
import SubCategory from "../components/subCategory";
import Subheader from "../components/sectionSubheader";
import ExampleImage from "../components/readingImage";

const subClass = "ml-5";
const url = "text-red-200 hover:underline";
const list = "list-decimal ml-10";

export default function Learn(){
    return(
        <div className="bg-gray-700 sm:flex text-white">
            <div className="sm:w-1/5 p-5 bg-gray-800 sticky top-0 overflow-y-auto h-screen"> {/* Info Box */}
                <h1 className="text-2xl font-bold">Innhold</h1>
                <div className=" flex flex-col mt-5 text-gray-400">
                    <Link href={"#part1"}>Del #1: Forutsetninger</Link>
                    <Link href={"#part2"}>Del #2: Hva er Git?</Link>
                    <Link href={"#part3"}>Del #3: GitHub</Link>
                    <Link href={"#test"} className={subClass}>- Seksjon #1: Ditt første Repository</Link>
                    <Link href={"#test"} className={subClass}>- Seksjon #2: Dypere om Repository</Link>
                    <Link href={"#test"} className={subClass}>- Seksjon #3: GitHub Desktop</Link>
                    <Link href={"#test"}>Del #4: Nå er du klar!</Link>
                </div>
            </div>
            
            <div className="sm:w-2/3 sm:w-4/5 p-5 bg-gray-700"> {/* Learn */}
                <TrueHeader>GitHub: En Begynners Guide</TrueHeader>
                <Subheader>GitHub er en utviklingsplattform som brukes globalt for å lagre, dele og samarbeide på kode. </Subheader>
                <Subheader>Derfor er det viktig for utviklere å bli kjent med GitHub.</Subheader>
                <Subheader>Men GitHub er komplisert, og vi ønsker derfor å gjøre det så enkelt som mulig å starte.</Subheader>

                <SectionHeader id="part1">Del #1 - Forutsetninger</SectionHeader>
                <Paragraph>Alt du trenger for å følge denne guiden er en datamaskin med tilkobling til internett.</Paragraph>
                <Paragraph>Guiden er skrevet med fokus på Windows, men fungerer med andre operativsystemer også</Paragraph>

                <SectionHeader id="part2">Del #2 - Hva er Git?</SectionHeader>
                <Paragraph>GitHub er bygget på Git, som er et versjonskontrollsystem.</Paragraph>
                <Paragraph>Enkelt forklart lar Git deg lagre og holde oversikt over endringer i kode.</Paragraph>
                <Paragraph>Hver gang du gjør en endring, kan du lagre en ny versjon (en «commit»).</Paragraph>
                <Paragraph>Det betyr at du kan gå tilbake til tidligere versjoner, se hvem som endret hva, og følge utviklingen av prosjektet over tid. </Paragraph>
                <Paragraph>Jeg kommer til å forklare mer om Git senere i guiden.</Paragraph>

                <SectionHeader id="part3">Del #3 - Github</SectionHeader>
                <SubCategory>Seksjon #1 - Ditt første Repository</SubCategory>
                
                <Subheader>Denne seksjonen antar at du har lagget en GitHub bruker. Hvis du ikke har gjort det, så kan du gjøre det fra <Link href={"https://github.com"} className={url}>https://github.com</Link></Subheader>
                
                <Paragraph newParagraph={true}>Når du logger inn, blir du møtt av GitHub-dashboardet. </Paragraph>
                <Paragraph>Det kan virke litt komplisert første gang, men vi skal fokusere på noen få viktige deler.</Paragraph>
                <ExampleImage path="/dashboard.png" alt="dashboard" imageText="Bilde: GitHub Dashboardet (Din side kan til å se litt forskjellig ut, siden du ikke har noen Repository ennå. Ikke stress!)"></ExampleImage>

                <Paragraph>Et repository (eller «repo») er som en mappe for prosjektet ditt. </Paragraph>
                <Paragraph>Det inneholder filer, mapper og en commit-historie slik at du kan se endringer over tid. Du oppretter vanligvis ett repository per prosjekt.</Paragraph>

                <SubCategory>La oss starte med å lage vårt første repository.</SubCategory>
                <ol className={list}>
                    <li> <Paragraph>Fra Dashboardet, velg <span className="font-bold">+-symbolet</span> som ligger øverst til høyre.</Paragraph> </li>
                    <li> <Paragraph>Velg "New Repository" fra menyen</Paragraph></li>
                    <li> <Paragraph>Du kommer til en side hvor du velger innstillinger for repoet. Sett navnet og beskrivelsen til hva du vil</Paragraph></li>
                </ol>
            </div>

        </div>
    )
}