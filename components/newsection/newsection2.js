import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/newsection/newsection2.module.css'
import Link from 'next/link'

const NewSection2 = () => {
 
  
  return (
        <div className={style.main}>
            <h2  className={style.label} >👇 Top Stories 👇</h2>
            <div className={style.articleContainer}>
                {[1,2,3,4,5,6].map((data)=>{
                    return (
                        <div key={data} className={style.articleItem}>
                            <img className={style.articleImage} src="/Thumbnail/ernieabella.png"/>
                            <h6 className={style.articleSubject}>SUBJECT</h6>
                            <h4 className={style.articleTitle}>De nouvelles règles pour voyager vers la France entrent en vigueur ce samedi</h4>
                        </div>
                    )
                })}
            
            </div>
        </div>
  )
  
}

export default NewSection2
