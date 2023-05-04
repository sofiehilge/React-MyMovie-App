# React-MyMovie-App

**Dynamisk web**

# Web applikation - MyMovie

Du skal i praktisk web perioden lave applikationene my movie. Data skal hentes fra "The Movie Database".

### **Mål**
Målet med opgaven er at vise hvad du har lært i skoleperioden om listevisning og detaljevisning ved brug af url-parametre(query-strings). Det forventes, at den afleverede opgave fremstår som et "færdigt produkt".


### **Materialer**
Der udleveres en figma fil til opgaven, som dit produkt skal ligne.

### **Opgaven**

I listevisning fetches der som minimum fra to forskellie endpoints, som dermed resulterer i to forskellige visninger. En med horisontalt scroll og en som "bare" fortsætter ned ad siden. 

Der skal implementeres darkmode. Switch-knappen i øverste højre hjørne skal skifte imellem dark-mode og light-mode. Applikationen skal huske mit foretrukne farvevalg (fx i localStorage), så brugeren præsenteres for samme oplevelse næste gang applikationen bruges.


### **Aflevering**: 
Du afleverer ved at lave et **pull-request** hvor du sætter din lærer på som *reviewer*. Vent med at lave et pull-request, til du er færdig med opgaven. 

### **Deadline**: 
Opgaven skal afleveres **senest torsdag den 22. september 2022.** 

### **Feedback**: 
Du får mundtlig feedback fra din lærer i en 1-til-1 session, hvor i gennemgår dit projekt.

### **Ekstraopgaver**
Hvis du bliver hurgigt færdig, må du gerne fx. tilføje ekstra views eller features. Gå på opdagelse i api'et og prøv at se om du kan finde nogle interessante data at præsentere.

Tilføj fx. en mulighed for at afspille traileren til en film (hvis den findes i databasen).

---

### **The Movie Database - introduktion**

For at bruge data fra The Movie Database skal du have en api-nøgle som skal sendes med alle requests til databasen. Det skal du gøre med et url-parameter, så det ved du godt hvordan fungerer.
En forespørgsel (fetch) til databasen kunne fx. se sådan ud:

```js
fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=c56b07231159979f222a2baafd615777")
// Det henter alle film som trender i denne uge.
```

Du får en api nøgle ved at registrere en bruger. Det er gratis, men du skal oplyse en del ting for at få nøglen. Hvis du ikke er vild med at oplyse din egen adresse kan du jo oplyse en fiktiv adresse i nærheden af hvor du bor, eller i nærheden af skolen. Brug dog din skole email, da du skal verificere din bruger for at få nøglen.

Du kan læse mere om oprettelse, og oprette dig som bruger her:
```
https://developers.themoviedb.org/3/getting-started/authentication
```

Når du skal bruge billeder, sender dataobjektet kun navnet på billedet. Læs mere om, hvilken sti du skal bruge for at få fat på billedet her: 

```
https://developers.themoviedb.org/3/getting-started/images
```


INSTALLER REACT;

find documentation til react på : https://vitejs.dev/guide/

Vælg det link der hedder NPM, da vores webpack hedder det.

skriv i terminalen npm create vite@latest

skriv punktum for package name
vælg react
vælg javascript

filer er oprettet
Og figma og readme er slettet

det kan du ændre i source control og tryk på discard vhanges på readme fil, vi vil ikke have figma fil i projektet.

commit changes

run npm install - for at hente alle de dependencies der ligger i vores package json

npm run dev - så er den lokale udviklingsserver blevet udviklet for os, og denne her kommando viser os projektet i browseren. 

MAPPE STRUKTUR -forklaring
--i dette projekt bruger vi også en bundler, ligesom webpack. Kig i node modules i den er der en mappe der hedder rollup, det er også en bundler. 

--build og public er bare to navne for den mappe der indeholder det som er bygget og klart til at blive publiseret. 

--src mappen er til alle javascript filer.

--assets indeholder billeder og ikoner.

--components mappen, indeholder custome made components og mappen hvor de importeres. 

--Vores index.js er det samme som main.jsx, app.jsx indeholder strukturen, men main.jsx indeholder hele appen.

--app.jsx er den fil der deklarere strukturen. de tags der ligger i app.jsx minder om HTML. Vi kan kigge på komponenterne for at se om de er stukrureret korrekt. I app.jsx bygges strukturen. 


-- en template består af komponenter og en side består af flere templates. e.g header er en template af flere komponenter. 

OPSÆTNING AF PROJKET:
--SLet inde i  app.jsk alt inde i div'en
--slet count
--slet tre øverste linjer

--i assets mappen flyt react svg op til public mappen.

index.css: kaver et root rest, den slettes, hele filen

### HVORDAN LAVER MAN COMMITS TIL GIT I TERMINALEN:
--git add .
--git commit -m "(commit besked)"
--git push
--> så er det sendt afsted og uploadet.

### OPRET NY BRANCH
-- git checkout -b "dev"
checkout fortæller at man vil checkeout af main branch og -b siger at man vil oprette nyh branch.

når du laver en ny commit og push vil den komme med en besked at dev-branch ikke har en dev-branch i git, men kun lokalt kopier den kommando som anbefales: git push --set-upstream origin dev

og så oprettes dev branch online.

STRUKTUR FOR PROJEKTET:
--overordnet container med id: "app"
-- Header: med My Movie og toogle, dvs. det består af to komponenter, hvor header er en lille template.
-- Main: indeholder både new showing og popular i hver deres section.
-- New showing: alle filmene i en section og hver film i en article, som indeholder en img med en heading
-- footer: navigation: liste: tre ikoner

INSTALLATION AF STYLE COMPONENT:
-- skriv i terminalen: npm install styled-components
-- i det komponent du vil style, skal du skrive import styled from style component.

TIPS: 
-- er der noget der skal bruges mere end en gang, laves det som en componenet.
-- fil navne til componenter skal skrives med stort eg. Heading.jsx - jsx. fortæller at det er en template der indeholder en react extension.
-- VIGTIGT med stort forbogstav til  componenter, da det er den måde jsx differenciere mellem hvad der er komponenter og hvad der er elementer.
-- et komponent kan kun returnere et element, derfor hvis vi har brug for at returnere et komponent med to elementer i kunne man umiddelbart bruge en div som container, men den renderes i domen. Derfor skal man bruge fraction-tag <>

-- For ikke at skrive component functionen hele tiden, har vi installeret et plugin og kan nu skrive SFC, som hjælper os med at skrive hele functionen automatisk

-- vi henter REACT Icons ned med npm, da den åbner for ikoner fra flere biblioteker.

GØR STYLEDCOMPONENTS DYNAMISKE:
--bruger predefinered navne e.g StyledHeading til alle h1,h2,h3,h4 etc.
--PROP er en attribute!!
--opretter en props, er et objekt man opretter, for at få sendt et objekt med ind i funktionene, der medsender alle de customprops der er defineret på elementet! Elementer er bare funktioner, men med en anden syntax.
-- i vores eksempel hedder den text, kan kaldes som man vil, altså:<!-- <Heading text="MyMovies> --> her hedder props text, og MyMovies returneres på siden!!
-- returneres ved at indsættes i constanten: 
<!-- const Heading = (props) => {
  return <StyledHeading>{props.text}</StyledHeading>;
}; -->

DESTRUERES: Kan også destruere objektet
<!-- const Heading = ({text}) => {
  return <StyledHeading>{text}</StyledHeading>;
}; -->

Dette kan også gøres ved e.g. font-size: DET HER VIRKER IKKE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
<!-- const Heading = ({text, size}) => {
    const StyledHeading = styled.h1`
      font-size: ${size};
      color: #110e47;
      justify-self: center;
    `;
  return <StyledHeading>{text}</StyledHeading>;
}; --> OBS her rykkes styled.component ind i constant scopet, da size som parameter ikke kan findes uden for scopet. Og da styled component er en template litteral skal der være dollar-tegn foran for at gøre parameteren dynamisk.
Udfordringen er at vi har brug for en prop i componentet som bliver defineret i en konstant uden for det funktionelle komponent.

DYNAMISK PROPS:
-- Vi kalder props i komponentet og fortæller i styled.komponenet hvilken styling den skal hente ved at definere det som en template litteral i styled compoenent:
<!-- 
import styled from "styled-components";/* muliggøre stykkubg */

const StyledHeading = styled.h1`
    font-size: ${props => props.size}px;

`
/* Når vi definere px inde i styled component sørger vi for at den der bruger komponenet ikke selv kan breake komponentet. */

const Heading = (props) => {
    return ( 
        <StyledHeading size={props.size}>{props.title}</StyledHeading>
     );
} -->

STYLEDCOMPONENT - tilføj egenskaber
--Når vi arbejder med et element, som har egenskaber vi gerne tilføje er syntaxen styled(type), når vi skal oprette et element er det styled.h1

POLYMOPHIC PROPS:
-- giver mulighed for at definere forskellige HTML tags for custome components. KALDET as
eksempel:
<!-- const StyledHeading = styled(props => props.as)`
    font-size: ${(props) => props.size}px;

`
/* Når vi definere px inde i styled component sørger vi for at den der bruger komponenet ikke selv kan breake komponentet. */

const Heading = (props) => {
    return ( 
        <StyledHeading size={props.size} as={props.as}>{props.title}</StyledHeading>
     );
} --> Kaldes i komponentet i app.jsx som sædvanligt. eg <!-- <Heading title="MyMovies" size="16"  weight="bold" as="h1"/> -->

SPREADOPERATOR:
-- gør at man spreder alle de props ud over det element man vil have dem på. gøres med ...
-- DEN TAGER ALLE PROPERTIES DER LIGGER I ET OBJEKT OG SPREDER DET I VORES TILFÆLDE UD OVER ELEMENTET SOM PROPS.
EKSEMPEL:
<!-- const Heading = (props) => {
    return ( 
        //<StyledHeading size={props.size} weight={props.weight} as={props.as}>{props.title}</StyledHeading>
        <StyledHeading {...props}>{props.title}</StyledHeading>
     );
} -->

OPretter et javascript objekt for at lave en midlertidig styling:
-- dobbelt curlybrackets for det er et objekt.

CURLYBRACKETS:
-- Når man vil skrive noget dynamisk så skal man skrive det i curleybrackets

INSTALLERE SWITCH KNAP:

--https://www.npmjs.com/ Husk at søge på React toggle

-- i dokumentatioen står der: npm i react-switch

--opret ny component fil; 

<!-- 
import Switch from "react-switch"; -->

STATE-variable:
-- variable der kan bevare sin værdi henover et rerender. Derfor skal vi fortælle om den er truly eller falsy for at den ved om den er tændt eller slukket.
--en state er en hook som vi kan bruge som en variable
LOGICAL KNOT:
-- vil altid sætte den til den modsatte værdi, eg. toggle mellem ture pg false. 

### Flere sidder i React:
-- vi arbejder med en single page-app, hvor siden ikke genindlæses, men hvor man faktisk bare skifter indholdet ud.

### Routing i React til at kunne skifte mellem sider
--- vi skal etablere en link funktion som vi kan sende op i vores URL. 
--- Vi har kun en HTML side - derfor gør vi det at vi holder øje med adressen og siger, hvis det er denne her komponent der står oppe i url'en skal du rendere denne her komponent. 

### React Router stiller mange funktionaliteter til rådighed, men vi skal i første omgang gøre vores links click parate således at vi får et andet view.

### React view har desuden lavet en funktion hvor man henter indhold på forhånd. 

## omorganisere siderne 
--- opretter ListView.jsx  det er et komponent.
--- kopier alle komponenet fra app.jsx over i listView.
-- fordi under i App.jsx vil vi skifte mellem listevisningen.

### importer react router i main.jsx
--- skriv i terminalen: npm i react-router-dom
--- obs findes flere forskellige routere, vi bruger create router Browser, da denne muliggøre loader, actions og fetches. Loaders vil hjælpe med at hente data. 
--- istedet for at hente routeren som et objekt, henter vi den som et element, da det er nemmere at overskue og at forstå. Men man kan selv vælge. https://reactrouter.com/en/main/utils/create-routes-from-elements
--- importer router i main.jsx: import {createBrowserRouter, createRoutesFromElements, RouterProvider, Rout}

--- dokumentationen fortæller os at rout hjælper os med at skabe en path som matcher urlen og definere hvad der skal vises.

--- App er containeren for hele vores projekt. Derfor får vi Route til at indlæse app elementet.

---Vi vil gerne definere hvad der skal vises når der står noget i urlen i vores App.jsx. Det der vises defineres i vores browserrouter i main.jsx

-- Outlet er et komponenet som fortæller hvor vi vil rendere elementerne.

-- vi bruger ikke anker-tag da det laver et hardrefresh, vi vil bare rerendere det der bliver vist. ikke genindlæse siden. Det er det der er hele pointen med at lave en singlepage app.

-- Først og fremmest importeres det der skal bruges, derfor import link.

-- vi sætter link rundt om moviecard, og to="" property kaldes ved at matche padti vi skriver i main, i vores tilfælde details:id 

--- /:id viser det er et dynamisk id, og beskriver et segment.