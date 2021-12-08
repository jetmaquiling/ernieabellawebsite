import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/newsection/newsection3.module.css'
import Link from 'next/link'

const NewSection3 = () => {
 
  
  return (
        <div className={style.main}>
            <h2  className={style.label} >Campaign Updates</h2>
            <div className={style.articleContainer}>
                {[1,2,3,4].map((data)=>{
                    return (
                        <div key={data} className={style.articleItem}>
                            <img className={style.articleImage} src="/Thumbnail/ernieabella.png"/>
                            <h4 className={style.articleTitle}>De nouvelles règles pour voyager vers la France entrent en vigueur ce samedi</h4>
                            <p className={style.articleSubTitle}>For Americans who have lost someone to COVID-19 or anything else this year, the holiday season might be an uphill battle. Here's advice on processing the pain.</p>
                        </div>
                    )
                })}
            
            </div>
        </div>
  )
  
}

export default NewSection3
