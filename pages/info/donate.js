import AboutSection1 from '@/components/aboutsection/aboutsection1'
import FooterV1 from '@/components/footer/footerv1'
import FooterV2 from '@/components/footer/footerv2'
import HeadV2 from '@/components/head/headv2'
import ProgramSection1 from '@/components/programsection/programsection1'
import Head from 'next/head'
import styles from '@/styles/caveat/donate.module.css'

export default function Program() {
  return (
    <div className={styles.main}>
      <HeadV2 backdrop={true}/>
        <div className={styles.mainContainer}>
            <h1 className={styles.title}>Donate</h1>

            <div className={styles.detailBox}>
              <p className={styles.note}>Be a part of the fulfillment of the Destiny & Calling of the nation Philippines i.e. to   be a "Light to the Nations". We value your prayers and monetary support. Please send your cash donations to below account. Please accept our sincere thanks for your contribution.</p>
            </div>


            <div className={styles.detailBox}>
              <p className={styles.note}>Bagong Pilipino = Bagong Pilipinas, -- a non-profit and non-government organization, duly registered at the Securities and Exchange Commission -- is the official support organization of ERNIE ABELLA.</p>
            </div>
            
            <div className={styles.detailBox}>
                <h4 className={styles.label}>Bank:</h4>
                <p className={styles.text}>Unionbank Account</p>
                <h4 className={styles.label}>Account Name:</h4>
                <p className={styles.text}>Bagong Pilipino Equals Bagong Pilipinas Association, Inc.</p>
                <h4 className={styles.label}>Account Number:</h4>
                <p className={styles.text}>002400011169</p>
                <h4 className={styles.label}>Swift Code:</h4>
                <p className={styles.text}>UBPHPHMM</p>
            </div>

            
            
        </div>
        <FooterV1/>
      <FooterV2/>
    </div>
  )
}
