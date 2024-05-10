import { Link } from 'react-router-dom'; // Importerar Link-komponenten från 'react-router-dom' för att kunna skapa navigeringslänkar
import Button from '../components/Button/Button'; // Importerar Button-komponenten från '../components/Button/Button' för att kunna använda anpassade knappar
import Header from '../components/Header/Header'; // Importerar Header-komponenten från '../components/Header/Header' för att inkludera en sidhuvud på kontaktformulärsidan
import Form from '../components/Form/Form'; // Importerar Form-komponenten från '../components/Form/Form' för att inkludera ett formulär på kontaktformulärsidan
import '../index.css';

// Skapar en funktionell komponent som representerar sidan för kontaktformuläret (ContactPage)
const ContactPage = () => {

    return(
        <div className="contact-container">

        {/* Inkludera Header-komponenten för att visa sidhuvudet på kontaktformulärsidan. */}
            <Header /> 
        {/* Inkludera Form-komponenten för att visa själva kontaktformuläret. */}
            <Form />
            {/* Skapa en navigeringslänk till startsidan med en anpassad knapp för att gå tillbaka till startsidan. */}
        <div>
                <Link to="/">
                    <Button text={"Gå tillbaka till hem"}></Button>
                </Link> 
        </div>
     
        </div>
     );
};

export default ContactPage;