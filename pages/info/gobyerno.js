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
        <div id="PATAS" className={style.maincontent}>
          <h2>Gobyernong Nararamdaman</h2>
          <p>
            23 milyong Pilipino ang ngayon ay nakasadlak sa sobrang kahirapan sa
            buhay. Mahigit kalhati sa bilang na yan ay nakararanas nang gutom sa
            pang araw-araw. Ito ang gustong bigyang lunas ni ERNIE ABELLA sa
            pamamagitan nang “AGRI POWERHOUSE”.
          </p>
          <p>
            Ibabalik muli ni ERNIE ABELLA ang sigla nang pagtatanim sa ating
            kabukiran upang maiangat natin muli ang kabuhayan nang mga maralita
            at mapakain muli natin ang buong sambayanan. Sa pamamagitan nito
            magkakaroon nang GOBYERNONG NARARAMDAMAN.
          </p>
        </div>
        <div className={style.buttonContainer}>
          <Link href="/info/matatag">
            <h6>Matatag Na Bayan</h6>
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
