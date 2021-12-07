import Image from "next/image";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import logoWhite from "../imgs/logoWhite.png";
import Simplelabel from "../components/simpleLabel/SimpleLabel";
import SimpleBTN from "../components/simpleBTN/SimpleBTN";
import logos from "../imgs/logos.png";
import groups from "../imgs/GroupImgs.png";

export default function Home() {
  const info = [
    "Eliminate guesswork to discover new ingredients & concepts",
    "Expedite research & decision making processes by 10x",
    "Find the right audience for each product",
    "Identify sales opportunities in foodservice",
    "Develop successful marketing campaigns",
  ];
  const labelInfo = [
    "First name",
    "Last name",
    "Company",
    "Phone number",
    "Work email",
    "How did you hear about us?",
  ];
  return (
    <>
      <Header />
      <main className={styles.content}>
        <div className={styles.textArea}>
          <div>
            <Image src={logoWhite} alt="logo" />
          </div>
          <p className={styles.headP}>Make data the hero ingredient</p>
          <p className={styles.text}>
            Todays consumers want healthy, sustainable, and delicious food. Use
            the new Tastewise SaaS solutions to meet their demands quickly with
            data-driven product ideas, compelling marketing campaigns, and
            laser-sharp sales strategies.
          </p>
          <p className={styles.smallTitle}>
            The worlds leading brands use Tastewise to:
          </p>
          <div>
            {info.map((el, i) => (
              <p className={styles.infoText} key={i}>
                ✔️ {el}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.formArea}>
          <p className={styles.inputText}>
            See what food intelligence can do for you
          </p>
          {labelInfo.map((el, i) => (
            <Simplelabel key={i} title={el} />
          ))}
          <div style={{ marginTop: "20px" }}>
            <SimpleBTN title="request a demo" WIDTH="100%" />
          </div>
        </div>
        <div>
          <Image alt="groups" src={groups} />
        </div>
      </main>
      <footer className={styles.foot}>
        <Image alt="footerLogos" src={logos} />
      </footer>
    </>
  );
}
