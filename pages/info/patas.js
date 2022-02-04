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
          <h2>PATAS NA LIPUNAN</h2>
          <p>
            Walang ganap na pagkakaisang mangyayari sa bayan, hanggat walang
            PATAS NA LIPUNAN.
          </p>
          <p>
            Ang PATAS NA LIPUNAN ay itataguyod ni ERNIE ABELLA sa pamamagitan
            nang pag-papalaganap at pag-suporta sa CIVIL SOCIETIES. Naniniwala
            si ERNIE ABELLA na pag napalaganap ang CIVIL SOCIETIES, mabibigyan
            nang pagkakataon ang pangkaraniwang mamamayang magkaboses at marinig
            nang gobyerno.
          </p>
          <p>
            Ayon pa kay ERNIE ABELLA ang CIVIL SOCIETIES din ang mag-sisilbing
            AntiCorruption “Watchdogs” na mag sasabing “Ehem, sumusobra ka na.”,
            “HOY! Tumigil ka na!” at “TAMA NA!!!” sa mga kawatan sa Gobyerno.
          </p>
        </div>
        <div className={style.buttonContainer}>
          <Link href="/info/gobyerno">
            <h6>Gobyernong Nararamdaman</h6>
          </Link>
          <Link href="/info/matatag">
            <h6>Matatag Na Bayan</h6>
          </Link>
        </div>
      </div>
      <HomeSection2 />
      <FooterV1 />
    </div>
  );
}
