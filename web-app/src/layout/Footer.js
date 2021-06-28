import React, { Component } from 'react';
import logo from '../assets/images/Logo-white-footer.png';
export default class Footer extends Component {

render() {
    return (
        <div class="footer">
        <div class="footer-inner wrap">
                <div class="footer-items">
                    <h3 class="footer__title">Kategorije</h3>
                    <ul class="footer-items__category">
                        <li class="footer-items__list">
                            <a class="footer-items__link"href="/">Zanati</a>
                        </li>
                        <li class="footer-items__list">
                            <a class="footer-items__link"href="/">Transport</a>
                        </li>
                        <li class="footer-items__list">
                            <a class="footer-items__link"href="/">Racunari</a>
                        </li>
                        <li class="footer-items__list">
                            <a class="footer-items__link"href="/">Izrada radova i prevodjenje</a>
                        </li>
                        <li class="footer-items__list">
                            <a class="footer-items__link"href="/">Muzika</a>
                        </li>
                        <li class="footer-items__list">
                            <a class="footer-items__link"href="/">jos kategorija</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-items">
                    <h3 class="footer__title">Podrska</h3>
                    <ul class="footer-items__category">
                        <li class="footer-items__list">
                            <a class="footer-items__link"href="/">Imate li pitanje ili sugestiju</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-items">
                    <h3 class="footer__title">Profil</h3>
                    <ul class="footer-items__category">
                        <li class="footer-items__list">
                            <a class="footer-items__link"href="/">Registracija</a>
                        </li>
                        <li class="footer-items__list">
                            <a class="footer-items__link"href="/">Uloguj se</a>
                        </li>
                        <li class="footer-items__list">
                            <a class="footer-items__link"href="/">O nama</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-items">
                    <h3 class="footer__title">Kompanija</h3>
                    <ul class="footer-items__category">
                        <li class="footer-items__list">
                            <a class="footer-items__link"href="/">O nama</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom"><a href="/"><img class="logo-image-footer" src={logo} alt="LOGO" /></a>
                <p class="footer-rights">Pronađi Sam © 2021. Sva prava su zaštićena</p>
            </div>
        </div>
    );
    }
}