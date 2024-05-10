import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  HomePage   from './pages/HomePage.jsx';
import  NotFoundPage  from './pages/NotFoundPage.jsx';
import  ContactPage  from './pages/ContactPage.jsx';
import  AboutmePage  from './pages/AboutmePage.jsx';
import { useState } from 'react';
import GithubPage from './pages/GithubPage.jsx';

const router = createBrowserRouter([
  // Väg för AboutmePage med AboutmePage-komponenten och fallback till NotFoundPage vid felaktig rutt
  {
    path: '/AboutmePage',
    element: <AboutmePage />,
    errorElement: <NotFoundPage />,
  },
  // Väg för startsidan med HomePage-komponenten och fallback till NotFoundPage vid felaktig rutt
    { path: '/', 
    element: <HomePage />, 
    errorElement: <NotFoundPage /> },
    {
  // Väg för ContactPage med ContactPage-komponenten och fallback till NotFoundPage vid felaktig rutt
      path: '/ContactPage',
      element: <ContactPage />,
      errorElement: <NotFoundPage />,
    },
    // Väg för GithubPage med GithubPage-komponenten och fallback till NotFoundPage vid felaktig rutt
      {
        path: '/GithubPage',
        element: <GithubPage />,
        errorElement: <NotFoundPage />,
      }
  ]);

// Det här är en funktionell komponent som heter App.
// Den returnerar en JSX-element (<RouterProvider>) med en egenskap (prop) router satt till värdet av variabeln router
function App() {
  return <RouterProvider router={router}/>;
}

export default App
