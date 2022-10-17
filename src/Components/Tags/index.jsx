import React from "react";
import styles from "./Tags.module.scss";
import fotos from "../Gallery/Fotos.json";

export default function Tags({ tags, filtrarFotos, setItens }) {
  return (
    <div className={styles.tags}>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filtrarFotos(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItens(fotos)}>Todas</li>
      </ul>
    </div>
  );
}
