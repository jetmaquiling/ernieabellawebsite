import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/navigation/footerv1.module.css";
import Link from "next/link";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const FooterV1 = () => {
  return (
    <div className={style.main}>
      <div className={`${style.section} ${style.section1}`}>
        <h3 className={style.label}>Contact Us</h3>
        <p className={style.text}>+63 2 8565 1086</p>
        <p className={style.text}>
          Unit 1110 AIC Burgundy Empire Tower, ADB Avenue corner Garnet &
          Sapphire Roads, Ortigas Center, Pasig City, 1605 Philippines
        </p>
        <p className={style.text}>secretariat@bagongpilipino.org</p>

        <div className={style.socialMediaContainer}>
          <Link href="https://www.facebook.com/ernieabellaPH">
            <div className={style.socialBox}>
              <FacebookIcon style={{ color: "#fff", fontSize: "30px" }} />
            </div>
          </Link>
          <Link href="https://instagram.com/ernie.abella">
            <div className={style.socialBox}>
              <InstagramIcon style={{ color: "#fff", fontSize: "30px" }} />
            </div>
          </Link>
          <Link href="https://twitter.com/ernieabella">
            <div className={style.socialBox}>
              <TwitterIcon style={{ color: "#fff", fontSize: "30px" }} />
            </div>
          </Link>
          <div className={style.socialBox}>
            <YouTubeIcon style={{ color: "#fff", fontSize: "30px" }} />
          </div>
        </div>
      </div>

      <div className={`${style.section} ${style.section2}`}>
        <img src="/Logo/LogoWhite.png" className={style.image} />
      </div>

      <div className={`${style.section} ${style.section3}`}>
        <img src="/Logo/LogoBPBP.png" className={style.imageBPBP} />
        <p className={style.text}>
          Ernie Abella Advocacy and Candidacy is supported by Bagong Pilipino =
          Bagong Pilipinas, a non-profit and non-government organization, duly
          registered at the Securities and Exchange Commission.
        </p>
        <Link href="/info/donate/">
          <h4 className={style.buttonFont}>DONATE</h4>
        </Link>
      </div>
    </div>
  );
};

export default FooterV1;
