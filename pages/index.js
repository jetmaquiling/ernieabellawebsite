import FooterV1 from '@/components/footer/footerv1'
import FooterV2 from '@/components/footer/footerv2'
import HeadV2 from '@/components/head/headv2'
import HomeSection1 from '@/components/homesection/homesection1'
import HomeSection2 from '@/components/homesection/homesection2'
import HomeSection3 from '@/components/homesection/homesection3'
import HomeSection4 from '@/components/homesection/homesection4'
import NewSection1 from '@/components/newsection/newsection1'
import Head from 'next/head'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
       <Head>
          <title>ERNIE ABELLA - PARA SA PAGKA-PANGULO NG PILIPINAS</title>
          <meta name="description" content="PAG NABAGO ANG LOOB NG BAWAT PILIPINO MABABAGO ANG BAYAN NG PILIPINAS"/>
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="ERNIE ABELLA - PARA SA PAGKA-PANGULO NG PILIPINAS" />
          <meta property="og:image"              content='./Thumbnail/ernieabella.png' />
        </Head>
      <HeadV2/>
      <HomeSection1/>
      <HomeSection2/>
      <HomeSection3/>
      <HomeSection4/>
      <FooterV1/>
      <FooterV2/>
    </div>
  )
}
