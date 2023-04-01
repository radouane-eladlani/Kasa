import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';

 /*HeaderFooterLayout est un composant qui permet de renseigner les composants pour
  afficher le header et le footer*/
const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />

    </>
  );
};
/* on utilise la variable router pour définir les routes de l'application*/
const router = createBrowserRouter([
  {
    /*
    on utilise element pour définir le layout de l'application */
    element: <HeaderFooterLayout />,
    /*
    on utilise errorElement pour définir la page d'erreur dans toute les routes */
    errorElement: <h1> 404 Not found</h1>,
    /*
    children permet de définir les routes de l'application */
    children: [
      {
        /*on utilise path pour définir le chemin de la route */
        path: "/",
        /*on utilise element pour définir le composant à afficher */
        element: <App />

      },
      {
        path: "/flat",
        element: <div>Nos locations</div>

      },
      {
        path: "/about",
        element: <div>A propos</div>
      },
    ],
  },
]);

/*
on utilise la variable root pour définir le composant qui sera affiché dans le DOM*/
const root = ReactDOM.createRoot(document.getElementById('root'));
/* on utilise root.render pour afficher le composant RouterProvider qui permet de
définir les routes de l'application*/
root.render(
  /* on utilise React.StrictMode pour afficher les erreurs dans la console */
  /* on utilise RouterProvider pour définir les routes de l'application */
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
