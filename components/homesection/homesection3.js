import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/homesection/homesection3.module.css'
import Link from 'next/link'

const HomeSection3 = () => {
 
  
  return (
        <div className={style.main}>
           <div className={style.imageBox}>
               <img className={style.image} src="/Images/papaImage.jpg" alt="Ernie Abella"/>
           </div>
           <div className={style.contentBox}>
               <h1 className={style.title}>Meet Ernie</h1>
               <p className={style.subTitle}>Ernesto Abella was formerly a Presidential Spokesperson, carrying the position with grace and professionalism. No undiplomatic, tactless accounts were communicated, nor were there any taunts or provocations delivered.</p>
               <Link href="/info/about" ><h4 className={style.button}>READ MORE</h4></Link>
           </div>
        </div>
  )
  
}

export default HomeSection3
