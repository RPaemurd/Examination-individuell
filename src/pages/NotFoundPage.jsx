// Importera Link-komponenten från 'react-router-dom' för att kunna skapa navigeringslänkar
import { Link } from 'react-router-dom';
import '../index.css';

// Skapar en funktionell komponent som representerar sidan för 404 Not Found
const NotFoundPage = () => {
  return (
    // Returnera JSX för att rendera innehållet på sidan för 404 Not Found.
    <>
      {/* Visa texten '404 Not Found' inuti en div-element. */}
      <div>404 Not Found</div>
      {/* Skapar en länk till startsidan ('/') som innehåller en knapp för att navigera tillbaka till startsidan. */}
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </>
  );
};

export default NotFoundPage;
