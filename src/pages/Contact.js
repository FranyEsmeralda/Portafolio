import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h1>Contáctame</h1>
      <p>Puedes contactarme a través de los siguientes medios:</p>
      <ul>
        <li>Email: <a href="mailto:example@example.com">example@example.com</a></li>
        <li>Teléfono: +123456789</li>
        <li>LinkedIn: 
          <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/tuusuario
          </a>
        </li>
        <li>GitHub: 
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
            github.com/tuusuario
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
