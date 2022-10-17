import React from "react";
import Open from "./Open.png";
import Favorite from "./Favorite.png";

export default function Cards({ itens, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={item.imagem}
              alt={item.titulo}
            />
            <p className={styles.galeria__descricao}>{item.titulo}</p>
            <div>
              <p>{item.creditos}</p>
              <span>
                <img
                  src={Favorite}
                  alt="Ícone em formato de coração de curtir"
                />
                <img src={Open} alt="Ícone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
