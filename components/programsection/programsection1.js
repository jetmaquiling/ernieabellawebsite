import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/programsection/programsection1.module.css'
import Link from 'next/link'

const ProgramSection1 = () => {
 
  
  return (
        <div className={style.main}>
           <div className={style.container}>

             <div  className={style.contentBox}>
                <h6  className={style.title}>PLATFORM</h6>
                <div  className={style.underline}/>
                <div  className={style.textBox}></div>
                     
             </div>


           </div>
        </div>
  )
  
}

export default ProgramSection1
