import Link from "next/link";
import React from "react";
import SectionHeader from "../components/sectionHeader";
import Paragraph from "../components/paragraph_Box";
import TrueHeader from "../components/TrueHeader";
import SubCategory from "../components/subCategory";
import Subheader from "../components/sectionSubheader";
import ExampleImage from "../components/readingImage";

const url = "text-red-200 hover:underline";
const list = "list-decimal ml-10 mb-10";
const ulist = "list-disc ml-10 mb-10";

export default function Section1(){
    return(
    <div>
        <TrueHeader>GitHub: En Begynners Guide</TrueHeader>
        <Subheader>GitHub er en utviklingsplattform som brukes globalt for å lagre, dele og samarbeide på kode. </Subheader>
        <Subheader>Derfor er det viktig for utviklere å bli kjent med GitHub.</Subheader>
        <Subheader>Men GitHub er komplisert, og vi ønsker derfor å gjøre det så enkelt som mulig å starte.</Subheader>
        
        <SectionHeader id="PreRequisites">Del #1 - Forutsetninger</SectionHeader>
        <Paragraph>Alt du trenger for å følge denne guiden er en datamaskin med tilkobling til internett.</Paragraph>
        <Paragraph>Guiden er skrevet med fokus på Windows, men fungerer med andre operativsystemer også</Paragraph>
        
        <SectionHeader id="Git">Del #2 - Hva er Git?</SectionHeader>
        <Paragraph>GitHub er bygget på Git, som er et versjonskontrollsystem.</Paragraph>
        <Paragraph>Enkelt forklart lar Git deg lagre og holde oversikt over endringer i kode.</Paragraph>
        <Paragraph>Hver gang du gjør en endring, kan du lagre en ny versjon (en "commit").</Paragraph>
        <Paragraph>Det betyr at du kan gå tilbake til tidligere versjoner, se hvem som endret hva, og følge utviklingen av prosjektet over tid. </Paragraph>
        <Paragraph>Jeg kommer til å forklare mer om Git senere i guiden.</Paragraph>
        
        <SectionHeader id="GitHub">Del #3 - Github</SectionHeader>
        <span id="FirstRepository"><SubCategory>Seksjon #1 - Ditt første Repository</SubCategory></span>
                        
        <Subheader>Denne seksjonen antar at du har laget en GitHub bruker. Hvis du ikke har gjort det, så kan du gjøre det fra <Link href={"https://github.com"} className={url}>https://github.com</Link></Subheader>
                        
        <Paragraph newParagraph={true}>Når du logger inn, blir du møtt av GitHub-dashboardet. </Paragraph>
        <Paragraph>Det kan virke litt komplisert første gang, men vi skal fokusere på noen få viktige deler.</Paragraph>
        <ExampleImage path="/dashboard.png" alt="A Picture of the GitHub Dashboard." imageText="Bilde: GitHub Dashboardet (Din side kan til å se litt forskjellig ut, siden du ikke har noen Repository ennå. Ikke stress!)"></ExampleImage>
        
        <Paragraph>Et repository (eller "repo") er som en mappe for prosjektet ditt. </Paragraph>
        <Paragraph>Det inneholder filer, mapper og en commit-historie slik at du kan se endringer over tid. Du oppretter vanligvis ett repository per prosjekt.</Paragraph>
        
        <SubCategory>La oss starte med å lage vårt første repository.</SubCategory>
                        
        <ol className={list}>
            <li> <Paragraph>Fra Dashboardet, velg <span className="font-bold">+-symbolet</span> som ligger øverst til høyre.</Paragraph> </li>
            <li> <Paragraph>Velg "New Repository" fra menyen</Paragraph></li>
            <li> <Paragraph>Du kommer til en side hvor du velger innstillinger for repoet. Sett navnet og beskrivelsen til hva du vil</Paragraph></li>
            <li> <Paragraph>Skru på "Add README". Dette legger til en README tekstfil som du kan redigere, som  ofte brukes til å beskrive prosjektet ditt.</Paragraph></li>
            <li> <Paragraph>La resten av innstillingene være som de er, og trykk "Create Repository".</Paragraph></li>
        </ol>
        
        <Paragraph>Nå har du laget ditt første GitHub repository. </Paragraph>
        <ExampleImage path="/createRepo.gif" alt="A Gif showcasing how to create a repository" imageText="Bilde / GIF: Repository setup."></ExampleImage>
        
        <Paragraph>Hvis alt er gjort riktig, vil du nå se en fil kalt <span className="font-bold">README.md.</span></Paragraph>
        <Paragraph>md (Kort for "Markdown") er en lettvektig filtype for tekst.</Paragraph>
        
        <Paragraph newParagraph={true}>Hvis du glemte å legge til README under opprettelsen, kan du gjøre det manuelt ved å klikke <span className="font-bold">Add file - Create new file</span>, og gi filen navnet <span className="font-bold">README.md.</span></Paragraph>
        <ExampleImage path="/repowithREADME.png" alt="A Image showcasing a GitHub Repository with a README file." imageText="Bilde: Repository med en README.md fil"></ExampleImage>

        <Paragraph>Nå burde du være på repository-siden. </Paragraph>
        <Paragraph>Nå er det kanskje ganske mange nye knapper, men ikke stress. </Paragraph>
        <Paragraph>Jeg kommer til å forklare hva flere av knappene gjør senere.</Paragraph>

        <SubCategory>La oss lage vårt første Commit</SubCategory>
        <Subheader>Vi skal utføre vårt første GitHub Commit ved å endre på teksten på README filen.</Subheader>
        
        <ol className={list}>
            <li> <Paragraph>I Repository-vinduet, trykk på <span className="font-bold">blyantikonet</span>  øverst til høyre i README boksen.</Paragraph></li>
            <li> <Paragraph>Endre teksten til hva du vil. </Paragraph></li>
            <li> <Paragraph>Trykk "Commit changes…" når du er ferdig</Paragraph></li>
            <li> <Paragraph>La innstillingene være som de er. Du får vite mer om <span className="font-bold">Branches</span>  senere.</Paragraph></li>
            <li> <Paragraph>Trykk "Commit changes"</Paragraph></li>
        </ol>

        <ExampleImage path="/babysFirstcommit.gif" alt="A Gif of someone creating a Commit by editing a README file" imageText="Bilde / GIF: Din første commit."></ExampleImage>
        <Paragraph>Gratulerer, du har nå gjort ditt første Commit!</Paragraph>
        <Paragraph>Du kan se historikken til repository ditt ved å trykke "Commits", som ligger under "Add File" knappen fra tidligere.</Paragraph>

        <ExampleImage path="/commitsButtonRed.png" alt="A Picture of the Commits button in a GitHub repository" imageText="Bilde: Commits-Knappen omringet i rødt."></ExampleImage>
        <ExampleImage path="/versionsHistory.png" alt="A Picture of the Commits History of a GitHub Repository" imageText="Bilde: Commits-versjonhistorikk."></ExampleImage>

        <SubCategory>Hva har du lært så langt:</SubCategory>
        <ul className={ulist}>
            <li> <Paragraph>Hva GIT er</Paragraph> </li>
            <li> <Paragraph>Hva et Repository er</Paragraph> </li>
            <li> <Paragraph>Hvordan du oppretter et repository</Paragraph> </li>
            <li> <Paragraph>Hvordan du gjør en commit</Paragraph> </li>
            <li> <Paragraph>Hvordan du ser commit-historikken</Paragraph> </li>
            <li> <Paragraph>Hva en .md fil er</Paragraph> </li>
        </ul>

        <Paragraph>Bra jobbet!</Paragraph>
        
    </div>
    )
}