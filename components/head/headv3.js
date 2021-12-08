import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/navigation/headv3.module.css'
import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

const HeadV3 = ({}) => {
 
  
  return (
    <div  className={style.main} >
       <div  className={style.level1}>
            <div className={style.containerSide} >
                <h4 className={style.linkText} >About Ernie</h4>
                <h4 className={style.linkText} >Platform</h4>
            </div>
            <div className={style.containerLogo} >
                <Link href="/">
                
                <img  src="/Logo/LogoWhite.png" className={style.logo} alt="logo" onMouseLeave={(e) => {e.target.src = "/Logo/LogoWhite.png"}}  onMouseOver={(e) => {e.target.src = "/Logo/LogoDark.png"}} />
            
            
                </Link>
            </div>
            <div className={style.containerSide} >
                <h4 className={style.linkText} >News</h4>
                <h4 className={style.linkText} >Get Involved</h4>
            </div>
       </div>

       <div  className={style.level2}>
            <h4 className={style.subjectText} >PRESS NEWS</h4>
            <h4 className={style.subjectText} >CAMPAIGN</h4>
            <h4 className={style.subjectText} >ARTICLES</h4>
            <h4 className={style.subjectText} >STORIES</h4>
            <h4 className={style.subjectText} >NATION</h4>
            <h4 className={style.subjectText} >COMMUNITY</h4>
        </div>

    </div>
    
  )

}

export default HeadV3
