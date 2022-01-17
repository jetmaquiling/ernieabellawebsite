import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/aboutsection/aboutsection1.module.css'
import Link from 'next/link'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StopIcon from '@material-ui/icons/Stop';

const about = [
   "ERNIE ABELLA, publicly known as SPOX, was the first Spokesperson of President Rodrigo Duterte.",
   "After fulfilling his mandate at Malacanang, he moved to the Department of Foreign Affairs as Undersecretary for Strategic Communications, representing the Philippines internationally at various diplomatic, democratic, cultural, political and religious fora; and in inter-agency and inter-branch activities of government.",
   "He also served as Officer-in-Charge of the UNESCO National Commission (NATCOM) working closely with the Creative Bloc of Congress, efforts of toward promoting Philippine Creative Cities, and advancing UN peace efforts through Educational, Scientific and Cultural cooperation."
]

const bio = [
   "A FOUNDATIONAL Builder.",
   "A Father to 2 Children, Immanuel Romualdo Lao Abella and Lia Luisa Abella-Hutchinson and a Husband  of 1 wife, Married to Joy Lao Abella",
   "18 Years as a Church Minister (Founder, and Pastor, The Jesus Fellowship, DAVAO) ",
   "He started from 10-15 youth group, which grew into thousands of members each event/ service."
]

const government = [
   "He started as junior copywriter in Manila; & became Creative Director 5 years later",
   "Taught at the Ateneo de Davao Humanities & Communication Arts Dept",
   "He started and was pastor of a successful church for 18 years",
   "Founder/president of an innovative secondary school & for 20 years",
   "Founder/chair of a thriving credit cooperative for 18 years Sent missionaries to Southeast Asia and East Asia"
]

const business = [
   "Graduated pre-medicine from Ateneo de Davao",
   "Studied at the Graduate Schools of both English and Communication Arts Department of Ateneo de Manila",
   "Finished his Master in Divinity, Silliman University",
   "Earned his Master in Entrepreneurship (Social Development) Asian Institute of Management (A.I.M.)"
]

const academic = [
   "He learns from social media, vloggers, bloggers, young people, kids and those who take the opposite view.",
   "Ernie has a wife, Joy and 2 kids who have birthed, 6 healthy children - with one on the way.",
   "He is also a father figure, and a spiritual mentor and counselor to many ordinary men and women, along with many who have their own ministries."
]

const quote = [
   'He Says, "it is my experience with people, from Makati to the provinces, from schools to farms, from credit cooperatives to churches, or government, that made me see and realize, that there is a genius within people that knows the solution of the problems they face, they just need to be heard. When we change mindset, when we change inside and listen to one another, then miracles happen."',
   '"Pag nabago ang PILIPINO mababago ang PILIPINAS"'
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
                  {about.map((data,index)=>{
                     return (
                        <div key={index}  className={style.textBox}>{data}</div>
                     )
                  })}
             </div>

             


           </div>

          

            <div  className={style.container2}>
                <div  className={style.contentBox2}>
                    <h6  className={style.title}>A Builder of Institutions</h6>
                    <div  className={style.underline2}/>
                        {government.map((data,index)=>{
                           return (
                              <div key={index} className={style.textContainer}>
                                 <StopIcon  fontSize="small" style={{color: '#fff'}}/>
                                 <p className={style.textItem}>{data}</p>
                              </div> 
                           )
                        })}
                </div>
            </div>


            <div  className={style.container2}>
                <div  className={style.contentBox2}>
                    <h6  className={style.title}>Understands & Appreciates both Formal & Self-Education</h6>
                    <div  className={style.underline2}/>
                        {business.map((data,index)=>{
                           return (
                              <div key={index} className={style.textContainer}>
                                 <StopIcon fontSize="small"  style={{color: '#fff'}}/>
                                 <p className={style.textItem}>{data}</p>
                              </div> 
                           )
                        })}
                </div>
            </div>


            <div  className={style.container2}>
                <div  className={style.contentBox3}>
                        {academic.map((data,index)=>{
                           return (
                              <div key={index} className={style.textContainer}>
                                 <p className={style.textItem}>{data}</p>
                              </div> 
                           )
                        })}
                </div>
            </div>


            <div  className={style.container2}>
                <div  className={style.contentBox4}>
                        {quote.map((data,index)=>{
                           return (
                                 <p className={style.textItem}>{data}</p>
                           )
                        })}
                </div>
            </div>
            
        </div>
  )
  
}

export default AboutSection1
