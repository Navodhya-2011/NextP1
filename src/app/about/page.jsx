import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
          The company itself is a very successful company. We lead
             what pain, the choice of pleasures is a great right to be happy times. A
             he receives them. Some souls with all the duties of the pleasures in which they are
             will it happen The company itself is a very successful company.
             We conclude that what is pain, the choice of pleasures is a great right for the times
             happy, he receives them. Some minds with all duties
            <br />
            <br />
            pleasures where it will happen? Lorem ipsum dolor sit amet, consectetur
             adipisicing elit. We lead what pain, the choice of pleasures great right
             to be happy times, he welcomes them. Some minds with all
             the services of the pleasures where it will occur?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
          The company itself is a very successful company. We lead
             which pain, the choice of pleasures, is a great right to be happy times, a
             he receives them. Some souls with all the duties of the pleasures in which they are
             will it happen The company itself is a very successful company. -
             Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
