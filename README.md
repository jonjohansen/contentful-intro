# Contentful intro

## Teknologier

Frontenden til portfolio-appen er skrevet i [React ⚛️](https://react.dev/) og [NextJs 🔼](https://nextjs.org/) med `app`-folder.
Der brukes [NextUI 🧱](https://nextui.org/) til noen av komponentene, og [tailwindcss 🎨](https://tailwindcss.com/) til stilsetting.

## 🔤 Kom i gang!

### 📦 Kodekloning og avhengigheter

Før du kan begynne med selve workshoppen må vi laste ned prosjektet og installere litt avhengigheter.

1. Du må å ha [`node`](https://nodejs.org/) installert.
2. `git clone` prosjektet ned til din maskin
3. Gå inn i prosjekt-mappen og innstallerer avhengighetene med `npm install`

### 👤 Lage seg konto og space på Contentful

Det neste man må gjøre er å få satt opp [Contentful](https://www.contentful.com/sign-up/). Her er nok enkleste vei å registrere seg med Github-bruker. Lag deg et område (space) for prosjektet.

> P.S Det kan hende det første spacet dukker opp med noe ferdig introduksjonsinnhold. Her kan man trygt slette både innholdet og content modellene.

### 🏷️ Lage den første Content modelen

For å komme i gang kan vi begynne med å lage en content model for en `author` som vil være eieren av portfolioen.
Begynn med et felt for navn og en kort biografi (`name` og `bio`)

Gå deretter over til content og lag en ny author, og fyll ut feltene.

### 🤐 Sette opp klienthemmelighetene

Hopp over til `/utils/contentfulClient.ts` og fyll inn detaljene. Her må vi lage en ny nøkkel (opp i høyre hjørnet). Fra den nye nøkkelen vår trenger vi `Space ID` og `Content Delivery Access token`. Disse finner du under `Settings` innenfor `Spacet` ditt på Contentful.

### 🎈 Hente de første feltene

Gå til `/utils/author.ts` og implementer uthentingen av dataen for forfattere. Her er det lagt til rette for å bruke `client` fra `./contentfulClient`.

Funksjonen brukes allerede i appen, og du kan forvente at dataen dukker opp hvis den er implementert riktig!

### 📸 Legg til et felt for bilde (asset)

Vi trenger et fint bilde av forfatteren. Legg til støtte for et bilde av forfatteren. Legg til et bilde og hopp over til `app/components/author/AuthorSection.tsx` og implementer uthentingen av bildet.

> P.S Her kan det være lurt å være litt nøye når man oppretter feltet, og velger nøye hvilke filtyper som støttes.

### 📎 SoMe lenker

Det er lagt opp for å liste ut diverse SoMe-lenker på forsiden av portfolioen i `AuthorSection.tsx`. Lag en fin struktur på _content modellen_ til forfatteren for å legge til SoMe lenker for Github, LinkedIn og Twitter/X. List de så ut på forsiden.

### 🧳 Over til prosjekter

Lag en ny type _Content Model_ for prosjekter som skal vises frem i portfolioen. Denne _bør_ inneholde felter for prosjektnavn (`projectName`), en kort beskrivelse (`shortDescription`), en slug (`slug`) og et bilde (`image`).

Fyll inn litt info om et prosjekt _(ChatGPT er god på å lage dummy-data, og unsplash.com har fine bilder ✨)_, og implementer `getProjects` i `utils/projects`.

Fiks i samme slengen uthentingen av bildet som skal vises på forsiden i `ProjectCard.tsx`.

### 📄 Prosjektsidene

Fra forsiden og under `/prosjekter` ligger alle prosjektene. Trykker man videre skal man kunne lese litt i dybden om hvert enkelt prosjekt. Legg til nye felter for en liste med nøkkelord (`keywords`), dato (`date`) og riktekst-innhold (`content`) og fyll ut litt forskjellig informasjon på disse.

Koden for prosjektsidene finner du under `/prosjekter/[slug]/page.tsx`.

Ta i bruk [`@contentful/rich-text-react-renderer`](https://www.npmjs.com/package/@contentful/rich-text-react-renderer) og implementer støtte for å rendre ut riktekstinnhold.

> P.S Det ligger en config for riktekst-innhold i `richTextConfig` som kan brukes for å overstyre hvordan den forskjellige markupen og elementene rendres.

### 🫶 Favorittprosjekter

Akkurat nå rendres det kun ut et tilfeldig utvalg av prosjekter på forsiden. Lag funksjonalitet så forfatteren kan velge sine favorittprosjekter å vise frem på forsiden.

### 💰 Bonus

#### 🔌 GraphQL-Apiet

Til nå har vi brukt Contentfuls _klient_ gjennom deres SDK. Prøv å skrive om datahentingsfunksjonen for Author til å bruke [GraphQL-apiet](https://www.contentful.com/developers/docs/javascript/tutorials/using-contentful-graphql-with-javascript/) deres.

#### 🖼️ Bilder i Riktekst-editoren

Ofte kan det være fint å sprite opp wall-of-text med noen bilder. Implementer støtte for å legge inn bilder i Riktekst-editoren!
Konfigurasjon for markupen til riktekst-editoren finner du under `utils/richtextConfig.tsx`
