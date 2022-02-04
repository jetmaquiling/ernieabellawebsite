import AboutSection1 from "@/components/aboutsection/aboutsection1";
import FooterV1 from "@/components/footer/footerv1";
import FooterV2 from "@/components/footer/footerv2";
import HeadV2 from "@/components/head/headv2";
import ProgramSection1 from "@/components/programsection/programsection1";
import Link from "next/link";
import * as style from "@/styles/programsection/programinfo.module.css";
import HomeSection2 from "@/components/homesection/homesection2";

export default function Patas() {
  return (
    <div className={style.main}>
      <HeadV2 backdrop={true} />
      <img className={style.image} src="/Logo/LogoPlatform.png" />
      <div className={style.container}>
        <div className={style.maincontent}>
          <h2>Matatag Na Bayan</h2>
        </div>
        <div className={style.buttonContainer}>
          <Link href="/info/gobyerno">
            <h6>Gobyernong Nararamdaman</h6>
          </Link>
          <Link href="/info/patas">
            <h6>Patas Na Lipunan</h6>
          </Link>
        </div>
      </div>
      <HomeSection2 />
      <FooterV1 />
    </div>
  );
}
