import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styled from "./Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>QR Code - Challenge 01</title>
      </Head>
      <main className={styled.container}>
        <div className={styled.card}>
          <div className={styled.content_image}>
            <Image
              src="/image-qr-code.png"
              layout="fill"
              objectFit="cover"
              alt="QR Code"
            />
          </div>
          <div className={styled.content_texts}>
            <h1>
              Improve your front-end <br /> skills by building projects
            </h1>
            <p>
              Scan the QR code to visit Frontend <br />
              Mentor and take your coding skills to <br />
              the next level
            </p>
          </div>
        </div>
      </main>
      <footer className={styled.footer}>
        Challenge by &nbsp;
        <a
          href="https://www.frontendmentor.io/home"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor.
        </a>
        Coded by &nbsp;
        <a
          href="https://github.com/carolferreiradev"
          target="_blank"
          rel="noreferrer"
        >
          Carol Ferreira.
        </a>
      </footer>
    </>
  );
};

export default Home;
