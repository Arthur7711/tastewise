import React from "react";
import styles from "./Header.module.css";
import logo from "../../imgs/logo.png";
import Image from "next/image";
import MySelect from "../mySelect/MySelect";
import SimpleBTN from "../simpleBTN/SimpleBTN";
import BurgerMenu from "../burgerMenu/BurgerMenu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.imgArea}>
          <Image src={logo} alt="logo" />
        </div>
        <MySelect values={["Solutions", 2, 3]} />
        <MySelect values={["Resources", 2, 3]} />
        <MySelect values={["About", 2, 3]} />
        <p>Pricing</p>
      </div>
      <div className={styles.burgerMenu}>
        <BurgerMenu />
      </div>
      <div className={styles.right}>
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            style={{ width: "20px", height: "20px" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <p style={{ wordWrap: "break-word", whiteSpace: "nowrap" }}>Log in</p>
        </div>
        <SimpleBTN title="Get started" />
      </div>
    </header>
  );
}
