import * as React from "react";
import Head from "next/head";
import * as style from "@/styles/blogsection/hub.module.css";
import Link from "next/link";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import qs from "qs";
import config from "@/config/configuration.json";
import moment from "moment";
import axios from "axios";
import HeadV3 from "@/components/head/headv3";
import NewSection1 from "@/components/newsection/newsection1";
import NewSection2 from "@/components/newsection/newsection2";
import FooterV2 from "@/components/footer/footerv2";
import FooterV1 from "./../../components/footer/footerv1";
import NewSection3 from "@/components/newsection/newsection3";
import NewSection4 from "@/components/newsection/newsection4";
import HeadV2 from "@/components/head/headv2";

const ArticleHub = () => {
  return (
    <div className={style.main}>
      <Head>
        <title>ERNIE ABELLA - BAGONG PILIPINAS</title>
        <meta
          name="description"
          content="PAG NABAGO ANG LOOB NG BAWAT PILIPINO MABABAGO ANG BAYAN NG PILIPINAS"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ERNIE ABELLA - BAGONG PILIPINAS" />
        <meta property="og:image" content="./Thumbnail/ernieabella.png" />
      </Head>

      <HeadV2 backdrop={true} />
      <NewSection1 />
      <NewSection2 />
      <NewSection3 />
      <FooterV1 />
      <FooterV2 />
    </div>
  );
};

export default ArticleHub;
