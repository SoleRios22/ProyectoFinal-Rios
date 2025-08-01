import React from "react";
import "./Footer.css"; // Asegurate de crear este archivo

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
     
        <div className="footer-col">
          <h4>MiTienda</h4>
          <p>Productos de calidad, atención personalizada y envíos a todo el país.</p>
        </div>


        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Favoritos</a></li>
            <li><a href="#">Compras anteriores</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>Buenos Aires, Argentina</li>
            <li>contacto@mitienda.com</li>
            <li>+54 9 11 1234 5678</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 MiTienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
