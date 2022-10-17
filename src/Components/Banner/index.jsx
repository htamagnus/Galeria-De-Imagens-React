import styles from "./Banner.module.scss";
import Banner1 from "./Banner1.jpg";

export default function Banner() {
  return (
    <div className={styles.principal__imagem}>
      <h1>A galeria de Valorant mais completa</h1>
      <img src={Banner1} alt="Banner do Jogo Valorant, com 4 personagens" />
    </div>
  );
}
