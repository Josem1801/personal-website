import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import MyPhoto from "../public/photo.jpg";
import ProyectCard from "src/components/ProyectCard";
import Coolors from "public/coolors-clone.png";
import RPSLS from "public/rock-papper-sccisor-lizard-spock.jpg";
import Delivery from "public/delivery.png";
import TODOApp from "public/todo-app.jpg";
import CoinTest from "public/cointest.png";
import { FaPaperPlane } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiJquery,
  SiFirebase,
  SiTwitter,
  SiGithub,
  SiCodepen,
  SiLinkedin,
} from "react-icons/si";
import { AiOutlineRight } from "react-icons/ai";
import { IoLogoSass } from "react-icons/io";
export default function Home() {
  const [lightTheme, setLightTheme] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  function handleTheme() {
    setLightTheme(!lightTheme);
  }
  return (
    <div className={`${styles.container} ${lightTheme && "darkTheme"}`}>
      <Head>
        <title>Jose Manuel Rosales</title>
        <meta name="description" content="José Manuel Rosales Gómez" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className={styles.header}>
        <a href="#home" className={styles.header__logo}>
          J
        </a>
        <ul className={`${styles.header__nav} ${menuActive && styles.active}`}>
          {menu.map(({ name, section }) => (
            <li key={name} className={styles.header__menu}>
              <a href={section}>{name}</a>
            </li>
          ))}
        </ul>
        <div
          onClick={handleTheme}
          className={`${styles.header__mode} ${
            lightTheme && styles.header__modeToggle
          }`}
        >
          <div disabled className={styles.header_modeBox}>
            <FaSun className={styles.header__modeLight} fontSize={28} />
            <FaMoon className={styles.header__modeNight} fontSize={28} />
          </div>
        </div>
        <div className={styles.header__hamburger}>
          <AiOutlineMenu
            fontSize={28}
            onClick={() => setMenuActive(!menuActive)}
            cursor="pointer"
          />
        </div>
      </header>
      {/* Circle in the background */}
      <div className={styles.circles}>
        <div className={styles.circles__blue}></div>
        <div className={styles.circles__green}></div>
      </div>
      {/* ---------------------------*/}
      <main>
        <section id="home" className={styles.hero}>
          <div className={styles.hero__left}>
            <div className={styles.hero__leftTitle}>
              ¡Hola! Soy
              <h1>Jose Manuel Rosales</h1>
              Frontend Dev.
            </div>
            <div className={styles.hero__leftBtn}>
              <a
                href="https://www.linkedin.com/in/jos%C3%A9-manuel-r-904525135/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Linkedin &nbsp; <SiLinkedin />
              </a>
              <a
                href="https://github.com/Josem1801"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub &nbsp; <SiGithub />
              </a>
            </div>
          </div>
          <div className={styles.hero__photo}>
            <div className={styles.hero__photoMe}>
              <Image
                src={MyPhoto}
                layout="fill"
                alt="Jose Manuel Rosales Gomez"
                title="Jose Manuel Rosales Gomez"
              />
            </div>
          </div>
        </section>
        <section id="proyectos" className={styles.proyectos}>
          <h3 className="title">Algunos de mis proyectos</h3>
          <div className={styles.proyectos__grid}>
            {data.map(({ title, href, image, technologies, phone }, idx) => (
              <ProyectCard
                key={idx}
                title={title}
                hrefImage={image}
                hrefProyect={href}
                arrIconTecnologies={technologies}
                phone={phone}
              />
            ))}
          </div>
          <a
            href="https://codepen.io/JoseRg09/"
            className="btn"
            target="__blank"
          >
            Ver más &nbsp; <AiOutlineRight />
          </a>
        </section>

        <section id="contacto" className={styles.contacto}>
          <h4 className="title">Contacto</h4>
          <p>¿Te gustaria ponerte en contacto?</p>
          <form
            name="contacto"
            className={styles.contacto__form}
            netlify="true"
          >
            <legend>Enviame un correo.</legend>
            <input
              type="text"
              minLength="3"
              maxLength="30"
              className={styles.contacto__formInput}
              placeholder="Nombre"
              name="name"
              required
            />
            <input
              type="email"
              className={styles.contacto__formInput}
              placeholder="Correo electrónico"
              name="email"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              minLength="10"
              axlength="300"
              placeholder="Mensaje..."
              required
            ></textarea>
            <button type="submit" id="btn-submit" className="btn">
              Enviar &nbsp;
              <span>
                <FaPaperPlane />
              </span>
            </button>
          </form>
        </section>
      </main>
      <footer>
        <a
          href="https://twitter.com/JoseRosa09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTwitter />
        </a>
        <a
          href="https://github.com/Josem1801"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub color="#ff4949" />
        </a>
        <a
          href="https://codepen.io/JoseRg09/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiCodepen />
        </a>
      </footer>
    </div>
  );
}
/* eslint-disable */
const data = [
  {
    title: "Colors Clone",
    image: Coolors,
    href: "https://clone-coolors-page.vercel.app/",
    technologies: [
      <SiHtml5 fontSize={25} color="#f88c11" />,
      <SiReact fontSize={25} color="#1869ff" />,
      <IoLogoSass fontSize={28} color="#ff00c8" />,
    ],
  },
  {
    title: "Rock, Papper, Sccisor, Lizard, Spock",
    image: RPSLS,
    href: "https://rock-paper-scissor-lizard-spock-vercel.vercel.app/",
    technologies: [
      <SiHtml5 fontSize={25} color="#f88c11" />,
      <SiJavascript fontSize={25} color="#ffd900" />,
      <IoLogoSass fontSize={28} color="#ff00c8" />,
    ],
  },
  {
    title: "CoinMarketTest",
    image: CoinTest,
    href: "https://criptomarket.vercel.app/home",
    technologies: [
      <SiHtml5 fontSize={25} color="#f88c11" />,
      <SiCss3 fontSize={25} color="#001eca" />,
      <SiReact fontSize={25} color="#1869ff" />,
    ],
  },
  {
    title: "TODO App",
    image: TODOApp,
    href: "https://todo-list-app-delta.vercel.app/",
    technologies: [
      <SiHtml5 fontSize={25} color="#f88c11" />,
      <SiCss3 fontSize={25} color="#001eca" />,
      <SiJquery fontSize={25} color="#001eca" />,
    ],
  },
  {
    title: "Delivery Food App",
    image: Delivery,
    href: "https://delivery-food-app.vercel.app/",
    technologies: [
      <SiHtml5 fontSize={25} color="#f88c11" />,
      <SiCss3 fontSize={25} color="#001eca" />,
      <SiNextdotjs fontSize={25} color="white" />,
      <SiFirebase fontSize={25} color="#ffa800" />,
    ],
    phone: true,
  },
];

const menu = [
  {
    name: "Home",
    section: "#home",
  },
  {
    name: "Proyectos",
    section: "#proyectos",
  },
  {
    name: "Contacto",
    section: "#contacto",
  },
];
