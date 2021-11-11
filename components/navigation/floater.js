import * as React from "react"
import * as style from "@/styles/navigation/floater.module.css"
import Link from 'next/link'
import CloseIcon from '@material-ui/icons/Close';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Floater = ({pos,open, setOpen}) => {

  return (
    <div className={style.main}>
        <h3 className={style.text1}>BAGONG PILIPINO </h3>
        <h3 className={style.text2}>=</h3>
        <h3 className={style.text1}>BAGONG PILIPINAS</h3>
        <div className={style.socialMediaContainer}>
            <div className={style.socialBox}>
                <FacebookIcon style={{color: "#000", fontSize: '20px'}}/>
            </div>

            <div className={style.socialBox}>
                <InstagramIcon style={{color: "#000", fontSize: '20px'}}/>
            </div>

            <div className={style.socialBox}>
                <TwitterIcon style={{color: "#000", fontSize: '20px'}}/>
            </div>
        </div>
        <h3 className={style.donateButton}>DONATE</h3>
    </div>
    
  )
}

export default Floater
