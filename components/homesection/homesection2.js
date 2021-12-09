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
                   <Link   href="https://docs.google.com/forms/d/1yoGOHrJUBUwfuhIeJDm18CGscvCLmGPlN-yno1-tQ-I/viewform?fbclid=IwAR3H0zii6wp9ukTk1OIWkntS8IbBySy2Mab2J0qjphUfefSKqWdDate7uuM&edit_requested=true">
                        <a target="_blank" className={`${style.buttonBox} ${style.buttonBox1}`}>
                            <img src="/Images/JOIN.jpg" className={style.imageBox}/>
                        </a>
                    </Link >

                    <Link href="/info/program">
                        <div className={`${style.buttonBox} ${style.buttonBox2}`}>
                            <img src="/Images/PRIORITIES.jpg" className={style.imageBox}/>
                        </div>
                    </Link >

                    <Link href="/blog">
                        <div className={`${style.buttonBox} ${style.buttonBox3}`}>
                            <img src="/Images/PRESS.jpg" className={style.imageBox}/>
                        </div>
                    </Link >

               </div>
           </div>
        </div>
  )
  
}

export default HomeSection2
