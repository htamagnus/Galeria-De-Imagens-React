import React from "react";
import Home from "../../assets/Icons/Home.png";
import Eye from "../../assets/Icons/Eye.png";
import Lamp from "../../assets/Icons/Lamp.png";
import Like from "../../assets/Icons/Like.png";
import Surprise from "../../assets/Icons/Surprise.png";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={Home} alt="ícone com formato de casa" />
          <a href="/#">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={Like} alt="Ícone com formato de curtida" />
          <a href="/#">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={Eye} alt="Ícone com formato de olho" />
          <a href="/#">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={Lamp} alt="Ícone com formato de lâmpada" />
          <a href="/#">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={Surprise} alt="Ícone com formato de catavento" />
          <a href="/#">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
