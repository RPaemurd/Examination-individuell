# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Projektbeskrivning
Det här projektet är en webbapplikation som fungerar som en personlig portfolio och kontaktplats för mig,Rebecca. Webbappen är byggd med React och använder react-router-dom för att hantera navigering mellan olika sidor. Den visar även GitHub-repositories för en angiven användare. För detta använder jag GitHub API för att hämta repositories och renderar dem i ett användarvänligt gränssnitt.

Körning
För att köra projektet lokalt, följ dessa steg:

Klona projektet
1.git clone https://github.com/ditt/repo.git

2.Installera dependencies: npm install

3,Skapa ett GitHub Personal Access Token och ersätt värdet för auth i GithubRepositories.js med ditt token.

4.Starta applikationen: npm start
Detta kommer att köra applikationen i utvecklingsläge på http://localhost:3000

Användning
-Huvudsidan (/github) visar GitHub-repositories för den angivna användaren.
-Genom att klicka på knappen "Visa Repositories" öppnas ett popup-fönster som visar repositories.
-Använd växelknappen i headern för att växla mellan mörkt och ljust läge.

Översikt av funktioner
Hem
HomePage.jsx (/): Huvudsida som presenterar min portfolio. Innehåller knappar för att navigera till kontaktsidan (/contactPage) och om mig-sidan (/aboutmePage)

Om mig
AboutmePage.jsx (/aboutmePage): En sida som beskriver mig och min bakgrund. Innehåller också en knapp för att återvända till startsidan

Kontakt
ContactPage.jsx (/contactPage): En sida där besökare kan fylla i ett kontaktformulär. Innehåller en knapp för att återvända till startsidan efter att formuläret har skickats

GithubPage.jsx (/GithubPage): En sida där du som användare kan välja att se mina repositories från Github. Innehåller även en knapp för att återvända till startsidan.


Komponenter
Header.jsx: En återanvändbar komponent för sidhuvudet som visar rubriken "Rebeccas CV".
Button.jsx: En knappkomponent som används för navigering mellan sidor och andra interaktioner.
Form.jsx: En komponent för kontaktformuläret där besökare kan skicka meddelanden till mig. Formuläret skickar inmatad data till konsolen för nuvarande implementation
GithubRepositories.jsx: En React-komponent som hämtar och visar GitHub repositories för användaren "RPaemurd". Den använder Octokit, ett GitHub API-paket, för att göra begäranden till GitHub för att hämta användarens repositories. När komponenten renderas hämtar den data från API:et och visar sedan en lista över dessa repositories.
Användaren kan klicka på länkarna för att öppna varje repository på GitHub i en ny flik.
Den här komponenten använder också lokala states för att hantera popup-visning (showPopup) och för att lagra repositories (repositories). En useEffect-hook används för att köra en engångsdatahämtning vid komponentens montering för att fylla repositories med data från GitHub.

Projektet använder React Router för att hantera vägledning mellan olika sidor och visar en 404-sida (NotFoundPage.jsx) om en ogiltig rutt anges