import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  
  <section className="error">
    <section className="error__container">
      <h1 className="error__container--title">Page not found 404</h1>
      <h2>Regresa a la página de <a href="/">home</a>
      </h2>
    </section>
  </section>
  
);

export default NotFound;