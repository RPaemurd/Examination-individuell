import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";

import "../index.css";

const AboutmePage = () => {
  return (
    <div className="aboutme-container">
      <Header />
      <h2>Om mig</h2>
      <p>
      Hej och välkommen! Jag heter Rebecca och kommer från den vackra kuststaden Lysekil. 
      Efter många år inom servicebranschen på IKEA och Naturkompaniet kände jag att det var dags att utforska nya karriärvägar som matchade mitt stora intresse för friluftsliv. <br />
      <br />
      Min resa inom karriären ledde mig förvånadsvärt till att upptäcka frontendprogrammering. 
      Jag fastnade för dess kreativa och tekniska aspekter som tillåter mig att kombinera mitt intresse för design och användarupplevelser.
      För att ta steget in i frontend-utveckling började jag studera på en YH-utbildning på Folkuniversitetet. Här får vi en djupgående inblick i områden som UX/UI-design, HTML/CSS och Javascript. 
      Vi lär oss också om populära bibliotek och ramverk som React samt agila arbetssätt som Scrum. <br />
      <br />
      Jag uppskattar verkligen den ständiga inlärningsprocessen inom frontend-utveckling. Varje dag får jag möjlighet att utveckla mina kunskaper och jag lär mig mer och mer. 
      Även om det finns utmaningar längs vägen ser jag dem som möjligheter att växa och utvecklas inom mitt yrke. <br />
      <br />
      Frontend-programmering har öppnat upp en helt ny spännande värld för mig
      och ser fram emot att fortsätta min resa inom detta dynamiska och kreativa område!
      </p>
      <Link to="/">
        <Button text={"Gå tillbaka till hem"}></Button>
      </Link>
    </div>
  );
};

export default AboutmePage;
