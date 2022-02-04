import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/programsection/programsection1.module.css";
import Link from "next/link";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import StopIcon from "@material-ui/icons/Stop";

const data = [
  {
    number: "#1",
    link: "/info/patas",
    title: "PATAS NA LIPUNAN",
    subtitle: "(Equal & Just Society)",
    items: [
      "Lahat may boses, Lahat pinapakinggan at pwedeng lumahok sa pamamahala.",
      "Pantay ang oportunidad ng pag-unlad.",
    ],
  },
  {
    number: "#2",
    link: "/info/gobyerno",
    title: "GOBYERNONG NARARAMDAMAN",
    subtitle: "(Trustworthy Government)",
    items: [
      "Ekonomiyang sapat sa lahat: Trabaho / Enerhiya/ Tubig / Pagkain / Kalusugan.",
      "Oportunidad para sa lahat: MSMEs, OFW Re-integration, disabled & differently abled.",
      "Batas at Kaayusan",
      "Proteksyon para sa yamang bayan.",
    ],
  },
  {
    number: "#3",
    link: "/info/matatag",
    title: "MATATAG NA BAYAN",
    subtitle: "(Resilient & Innovative Society)",
    items: [
      "Kalahok ang bayan laban sa korapsyon, krimen, droga at depensa laban sa terorista at mananakop.",
      "Panghabangbuhay na edukasyon at pagsasanay; serbisyong pangkalusugan; suporta sa sakuna; at tulong laban sa pinsala.",
    ],
  },
];

const ProgramSection1 = () => {
  return (
    <div className={style.main}>
      <img className={style.image} src="/Logo/LogoPlatform.png" />
      {/* <div  className={style.contentBox}>   
            <h2  className={style.title1}>PAG NAGBAGO ANG</h2>
            <h2 style={{color: '#0038A8'}} className={style.title2}>PILIPINO</h2>
            <h2  className={style.title1}>MABABAGO ANG</h2>
            <h2 style={{color: '#BF0D3E'}} className={style.title2}>PILIPINAS</h2>
          </div> */}
      {data.map((d) => {
        return (
          <div key={d.number} className={style.platformContainer}>
            <div className={style.titleContainer}>
              <h2 className={style.number}>{d.number}</h2>
              <div className={style.titleBox}>
                <Link href={d.link}>
                  <h3 className={style.title}>{d.title}</h3>
                </Link>
                <h4 className={style.subTitle}>{d.subtitle}</h4>
              </div>
            </div>
            <div className={style.underline2} />
            {d.items.map((i) => {
              return (
                <div key={i} className={style.textContainer}>
                  <StopIcon style={{ color: "#BF0D3E" }} />
                  <p className={style.textItem}>{i}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProgramSection1;
