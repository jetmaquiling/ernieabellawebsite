import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/homesection/homesection2.module.css'
import Link from 'next/link'

const HomeSection2 = () => {
 
  
  return (
        <div className={style.main}>
           <div className={style.contentBox}>
               <h2 className={style.title}>Ways to Get Involved</h2>
               <div className={style.buttonContainer}>
                   <div className={`${style.buttonBox} ${style.buttonBox1}`}>
                        <h4 className={style.buttonFont}>Join The Advocacy</h4>
                   </div>

                   <div className={`${style.buttonBox} ${style.buttonBox2}`}>
                        <h4 className={style.buttonFont}>Pitch in</h4>
                    </div>

                    <div className={`${style.buttonBox} ${style.buttonBox3}`}>
                        <h4 className={style.buttonFont}>Stay up to Date</h4>
                    </div>
               </div>
           </div>
        </div>
  )
  
}

export default HomeSection2
