import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/aboutsection/aboutsection1.module.css'
import Link from 'next/link'

const AboutSection1 = () => {
 
  
  return (
        <div className={style.main}>
           <div className={style.container}>

             <div className={style.imageBox}>
                <img src="/Images/papaImage2.png" className={style.image} />
             </div>

             <div  className={style.contentBox}>
                <h6  className={style.title}>ABOUT</h6>
                <div  className={style.underline}/>
                <div  className={style.textBox}>ERNESTO "ERNIE" CORPUZ ABELLA IS A FILIPINO BUSINESSMAN, WRITER, AND FORMER EVANGELIST WHO SERVED IN PRESIDENT RODRIGO DUTERTE'S ADMINISTRATION AS PRESIDENTIAL SPOKESPERSON (2016-2017AND UNDERSECRETARY FOR STRATEGIC COMMUNICATIONS AND RESEARCH OF THE DEPARTMENT OF FOREIGN AFFAIRS (2017-2021).[2]</div>
                <div  className={style.textBox}>BEFORE JOINING THE GOVERNMENT, HE WAS AN EXECUTIVE WITH A DAVAO CITY-BASED AGRICULTURAL PRODUCTS MANUFACTURER AND A LOCAL COOPERATIVE WHICH HE CO-FOUNDED. HE ALSO ESTABLISHED A SCHOOL IN DAVAO AND WAS A COLUMNIST FOR LOCAL NEWSPAPER SUNSTAR DAVAO.</div>
             </div>


           </div>
        </div>
  )
  
}

export default AboutSection1
