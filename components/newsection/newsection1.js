import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/newsection/newsection1.module.css'
import Link from 'next/link'

const NewSection1 = () => {
 
  
  return (
        <div className={style.main}>
            <div className={style.mainContainer} >
                <h2 className={style.mainTitle}>De nouvelles règles pour voyager vers la France entrent en vigueur ce samedi</h2>
                <img className={style.mainImage} src="/Thumbnail/ernieabella.png"/>
            </div>

            <div className={style.subContainer} >
                <h5 className={style.label}>FEATURING</h5>
                <h4  className={style.subTitle} >De nouvelles règles pour voyager vers la France entrent en vigueur ce samedi</h4>
                <h4  className={style.subTitle}>De nouvelles règles pour voyager vers la France entrent en vigueur ce samedi</h4>
                <h4  className={style.subTitle}>De nouvelles règles pour voyager vers la France entrent en vigueur ce samedi</h4>
              
            </div>
            

           
        </div>
  )
  
}

export default NewSection1
