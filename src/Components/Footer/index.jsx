import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a href="https://github.com/htamagnus" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            width="40"
            height="40"
          />
        </a>
        <a href="https://www.linkedin.com/in/agathamagnus/" target="_blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/49/49408.png"
            width="40"
            height="40"
          />
        </a>
      </div>
      <p>Desenvolvido por Ágatha Magnus</p>
    </footer>
  );
}
