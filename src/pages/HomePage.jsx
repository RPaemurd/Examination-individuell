import { Link } from 'react-router-dom'; // Importerar Link-komponenten från 'react-router-dom' för att kunna skapa navigeringslänkar
import Button from '../components/Button/Button'; // Importerar Button-komponenten från '../components/Button/Button' för att kunna använda anpassade knappar
import Header from '../components/Header/Header';// Importerar Header-komponenten från '../components/Header/Header' för att inkludera en sidhuvud på startsidan

import '../index.css';

// Skapar en funktionell komponent som representerar startsidan (HomePage)
const HomePage = () => {

  return (

    // Returnera JSX för att rendera innehållet på startsidan
    <div className="homepage-container">
      <Header />
      <div className="homepage1">

         {/* Skapar en navigeringslänk till ContactPage med en anpassad knapp. */}
        <div className="row1">
          <Link to="/ContactPage">
            <Button text={"Gå till min kontaktformulär"}></Button>
          </Link>
        </div>

          {/* Rad 2: Skapar en navigeringslänk till aboutmePage med en anpassad knapp. */}
        <div className="row2">
          <Link to="/AboutmePage">
            <Button text={"Gå till mitt CV"}></Button>
          </Link>
        </div>  

          {/* Rad 3: Skapar en knapp för att navigera till min GitHub . */}
        <div className="row3">
        <Link to="/GithubPage">
          <Button text={"Gå till min github"}></Button>
        </Link>
        </div>

      </div>
    </div>
  );
};

export default HomePage; // Ensure to export the HomePage component as default
