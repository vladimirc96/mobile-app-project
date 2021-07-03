import React, { Component } from "react";
import logo from "../assets/images/Logo-white-footer.png";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-inner wrap">
          <div className="footer-items">
            <h3 className="footer__title">Kategorije</h3>
            <ul className="footer-items__category">
              <li className="footer-items__list">
                <a className="footer-items__link" href="/">
                  Zanati
                </a>
              </li>
              <li className="footer-items__list">
                <a className="footer-items__link" href="/">
                  Transport
                </a>
              </li>
              <li className="footer-items__list">
                <a className="footer-items__link" href="/">
                  Racunari
                </a>
              </li>
              <li className="footer-items__list">
                <a className="footer-items__link" href="/">
                  Izrada radova i prevodjenje
                </a>
              </li>
              <li className="footer-items__list">
                <a className="footer-items__link" href="/">
                  Muzika
                </a>
              </li>
              <li className="footer-items__list">
                <a className="footer-items__link" href="/">
                  jos kategorija
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <h3 className="footer__title">Podrska</h3>
            <ul className="footer-items__category">
              <li className="footer-items__list">
                <a className="footer-items__link" href="/">
                  Imate li pitanje ili sugestiju
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <h3 className="footer__title">Profil</h3>
            <ul className="footer-items__category">
              <li className="footer-items__list">
                <a className="footer-items__link" href="/">
                  Registracija
                </a>
              </li>
              <li className="footer-items__list">
                <a className="footer-items__link" href="/">
                  Uloguj se
                </a>
              </li>
              <li className="footer-items__list">
                <a className="footer-items__link" href="/">
                  O nama
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <h3 className="footer__title">Kompanija</h3>
            <ul className="footer-items__category">
              <li className="footer-items__list">
                <a className="footer-items__link" href="/">
                  O nama
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <a href="/">
            <img className="logo-image-footer" src={logo} alt="LOGO" />
          </a>
          <p className="footer-rights">
            Pronađi Sam © 2021. Sva prava su zaštićena
          </p>
        </div>
      </div>
    );
  }
}
