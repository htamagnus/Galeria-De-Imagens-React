import styles from "./InitialPage.module.scss";

import Gallery from "Components/Gallery";
import Header from "Components/Header";
import Menu from "Components/Menu";
import Popular from "Components/Popular";
import Footer from "Components/Footer";
import Banner from "Components/Banner";

export default function InitialPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.galeria}>
          <Gallery />
          <Popular />
        </div>
      </main>
      <Footer />
    </>
  );
}
