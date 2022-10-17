import React from "react";
import styles from "./Popular.module.scss";
import FotosPopulares from "./Fotos-populares.json";
import Button from "Components/Button";

export default function Popular() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {FotosPopulares.map((FotosPopulares) => {
          return (
            <li key={FotosPopulares.id}>
              <img src={FotosPopulares.path} alt={FotosPopulares.alt} />
            </li>
          );
        })}
      </ul>
      <Button />
    </aside>
  );
}
