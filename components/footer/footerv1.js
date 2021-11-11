import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/navigation/footerv1.module.css'
import Link from 'next/link'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';


const FooterV1 = () => {
 
  
  return (
        <div className={style.main}>
            <div className={`${style.section} ${style.section1}`}>
                <h3 className={style.label}>Contact Us</h3>
                <p  className={style.text}>+0917 183 5762</p>
                <p className={style.text}>402 4th Flr, Galleria Corporate Center, EDSA Corner, Ortigas Ave, Quezon City, 1110 Metro Manila
                </p>
                <p className={style.text}>bagongbayan@gmail.com</p>
                <div className={style.socialMediaContainer}>
                    <div className={style.socialBox}>
                        <FacebookIcon style={{color: "#fff", fontSize: '30px'}}/>
                    </div>

                    <div className={style.socialBox}>
                        <InstagramIcon style={{color: "#fff", fontSize: '30px'}}/>
                    </div>

                    <div className={style.socialBox}>
                        <TwitterIcon style={{color: "#fff", fontSize: '30px'}}/>
                    </div>

                    <div className={style.socialBox}>
                        <YouTubeIcon style={{color: "#fff", fontSize: '30px'}}/>
                    </div>
                </div>
                <h4  className={style.buttonFont}>DONATE</h4>
            </div>

            <div className={`${style.section} ${style.section2}`}>
                    <img src="/Logo/Logowhite.png" className={style.image}/>
            </div>

            <div className={`${style.section} ${style.section3}`}>
                <h3 className={style.label}>Sign up for updates</h3>
                <p className={style.text}>Coming Soon
                </p>
            </div>
        </div>
  )
  
}

export default FooterV1
