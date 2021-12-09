import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/aboutsection/aboutsection1.module.css'
import Link from 'next/link'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const bio = [
   "A FOUNDATIONAL Builder.",
   "A Father to 2 Children, Immanuel Romualdo Lao Abella and Lia Luisa Abella-Hutchinson and a Husband  of 1 wife, Married to Joy Lao Abella",
   "18 Years as a Church Minister (Founder, and Pastor, The Jesus Fellowship, DAVAO) ",
   "He started from 10-15 youth group, which grew into thousands of members each event/ service."
]

const government = [
   "Former DFA Undersecretary for Strategic Communications on 2017 until 2021 October.",
   "The First and former Spokesperson of President Rodrigo Roa Duterte in 2016",
   "Officer-in-charge of UNESCO National Commission",
]

const business = [
   "A SOCIAL ENTREPRENEUR for 19 years.",
   "A Leader who works with the CIVIL SOCIETY from 1988 until Present.",
   "A FOUNDATIONAL Builder.",
   "A Father figure to Many.",
   "20 Years as an Educator - Founder, and Former President of The Southpoint School, Davao",
   "20 Years in Cooperative Founder, and Former Chairman of One Accord Cooperative, Davao - this coop started from 10,000 pesos now , Millions in Assets, has helped a multitude of Start-Ups from Davao to Luzon and Visayas"
]

const academic = [
   "Masters in Entrepreneurship at Asian Institute of Management (AIM) - Social Entrepreneurship.",
   "Masters of Divinity at Siliman University - Cumlaude",
   "Studied Communication Arts at the Ateneo de Manila Graduate School",
   "Graduated, AB Pre-Med at the Ateneo de Davao"
]





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
                <div  className={style.textBox}>Ernesto "Ernie" Corpuz Abella is a Filipino businessman, writer, and former evangelist who served in President Rodrigo Duterte's administration as Presidential Spokesperson (2016-2017) and Undersecretary for Strategic Communications and Research of the Department of Foreign Affairs (2017-2021).</div>
                <div  className={style.textBox}>Before joining the government, he was an executive with a Davao city-based agricultural products manufacturer and a local cooperative which he co-founded. He also established a school in Davao and was a columnist for local newspaper Sunstar Davao.</div>
                     
             </div>

             


           </div>

          

            <div  className={style.container2}>
                <div  className={style.contentBox2}>
                    <h6  className={style.title}>Background in Governance</h6>
                    <div  className={style.underline2}/>
                        {government.map((data,index)=>{
                           return (
                              <div key={index} className={style.textContainer}>
                                 <FiberManualRecordIcon style={{color: '#fff'}}/>
                                 <p className={style.textItem}>{data}</p>
                              </div> 
                           )
                        })}
                </div>
            </div>


            <div  className={style.container2}>
                <div  className={style.contentBox2}>
                    <h6  className={style.title}>Business Experience</h6>
                    <div  className={style.underline2}/>
                        {business.map((data,index)=>{
                           return (
                              <div key={index} className={style.textContainer}>
                                 <FiberManualRecordIcon style={{color: '#fff'}}/>
                                 <p className={style.textItem}>{data}</p>
                              </div> 
                           )
                        })}
                </div>
            </div>

            <div  className={style.container2}>
                <div  className={style.contentBox2}>
                    <h6  className={style.title}>Education</h6>
                    <div  className={style.underline2}/>
                        {academic.map((data,index)=>{
                           return (
                              <div key={index} className={style.textContainer}>
                                 <FiberManualRecordIcon style={{color: '#fff'}}/>
                                 <p className={style.textItem}>{data}</p>
                              </div> 
                           )
                        })}
                </div>
            </div>


            <div  className={style.container2}>
                <div  className={style.contentBox2}>
                    <h6  className={style.title}>BIO</h6>
                    <div  className={style.underline2}/>
                     
                           {bio.map((data,index)=>{
                              return (
                                 <div key={index} className={style.textContainer}>
                                    <FiberManualRecordIcon style={{color: '#fff'}}/>
                                    <p className={style.textItem}>{data}</p>
                                 </div> 
                              )
                           })}
                           
                     
                </div>
            </div>
            
        </div>
  )
  
}

export default AboutSection1
