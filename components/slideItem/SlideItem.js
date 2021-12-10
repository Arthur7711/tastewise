import React from "react";
import styles from "./Slideitem.module.css";
import Image from "next/image";

const SlideItem = ({ logo, text, avatar, name, description }) => {
  return (
    <>
      <div className={styles.logo}>
        <Image src={logo && logo} alt="logo" />
      </div>
      <div className={styles.triangleDiv}>
        <div className={styles.messageDiv}>
          <p>{text}</p>
        </div>
        <div className={styles.triangle}></div>
      </div>
      <div className={styles.flexBox}>
        <div className={styles.avatar}>
          <Image src={avatar && avatar} alt="avatar" />
        </div>
        <div className={styles.userInfo}>
          <strong>{name}</strong>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default SlideItem;
