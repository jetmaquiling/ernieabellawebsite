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
          <p>
            Sa tulong nang kabataan ay itataguyod ni ERNIE ABELLA ang bayang
            matatag at handang manilbihan sa kapwa.. Ang National Volunteer
            Corps (NaVoCor) ay isang proyekto kung saan ay palalaganapin ni
            ERNIE ABELLA ang malawakang “Bayanihan” sa buong bansa. Ilan sa
            magiging aktibidad nang NaVoCor ay tree planting, paglilinis nang
            mga ilog at batis, pagsasanay sa ilalim nang Red Cross nang iba’t-
            ibang “survival techniques”, at pag-aaral kung paano maibabalik ang
            isang syudad na nasalanta nang sakuna, sa dati. Ang NaVoCor ay
            magsisilbing lakas nang bayan sa bawat lindol, bagyo, land-slide,
            sunog, baha at kung anu-ano pang sakuna na sama-sama nating
            haharapin na naka-kapitbisig at walang iwanan! Ang National
            Volunteer Corps ay magiging patunay sa sinasabi ni ERNIE ABELLA na
            kaakibat nang pagtutulungan ay isang MATATAG NA BAYAN!
          </p>
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
