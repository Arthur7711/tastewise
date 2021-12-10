import Image from "next/image";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import logoWhite from "../imgs/logoWhite.png";
import Simplelabel from "../components/simpleLabel/SimpleLabel";
import SimpleBTN from "../components/simpleBTN/SimpleBTN";
import logos from "../imgs/logos.png";
import groups from "../imgs/GroupImgs.png";
import SlideItem from "../components/Slideitem/SlideItem";
import pepsico from "../imgs/pepsico.png";
import freshly from "../imgs/freshly.png";
import campbells from "../imgs/campbells.png";
import pepsicoavatar from "../imgs/pepsicoavatar.png";
import freshlyavatar from "../imgs/freshlyavatar.png";
import campbellsavatar from "../imgs/campbellsavatar.png";

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
  const SlideInfo = [
    {
      logo: pepsico,
      text: "With partners in digital transformation like Tastewise, we are able to deliver innovative opportunities that surprise and delight our consumers, creating more smiles with every sip and every bite.",
      logoAvatar: pepsicoavatar,
      name: "Ramon Laguarta",
      description: "Chairman & Chief Executive Officer",
    },
    {
      logo: freshly,
      text: "Now, what used to take 3 days of painstaking research takes 3 hours of data-driven analysis.",
      logoAvatar: freshlyavatar,
      name: "Rachel Waynberg",
      description: "Senior Manager, Meal Innovation",
    },
    {
      logo: campbells,
      text: "Our team is using Tastewise to identify beverage and cooking trends, and bring them to life in product and recipe innovation. We've had really great success stories!",
      logoAvatar: campbellsavatar,
      name: "Maria Gamble",
      description: "Director, Culinary Innovation Hub",
    },
  ];
  const slideLogoInfo = [pepsico, freshly, campbells];
  const slideText = [
    "With partners in digital transformation like Tastewise, we are able to deliver innovative opportunities that surprise and delight our consumers, creating more smiles with every sip and every bite.",
    "Now, what used to take 3 days of painstaking research takes 3 hours of data-driven analysis.",
    "Our team is using Tastewise to identify beverage and cooking trends, and bring them to life in product and recipe innovation. We've had really great success stories!",
  ];
  const slideLogoAvatarInfo = [pepsicoavatar, freshlyavatar, campbellsavatar];
  const slideName = ["Ramon Laguarta", "Rachel Waynberg", "Maria Gamble"];
  const slideDescription = [
    "Chairman & Chief Executive Officer",
    "Senior Manager, Meal Innovation",
    "Director, Culinary Innovation Hub",
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
      <p className={styles.title}>Trusted by the industries top brands</p>
      <div className={styles.mainFlex}>
        {SlideInfo.map((info, i) => (
          <div key={i}>
            <SlideItem
              logo={info.logo}
              text={info.text}
              avatar={info.logoAvatar}
              name={info.name}
              description={info.description}
            />
          </div>
        ))}
      </div>
    </>
  );
}
