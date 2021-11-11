import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/homesection/homesection4.module.css'
import Link from 'next/link'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


const HomeSection4 = () => {
 
  
  return (
        <div className={style.main}>
            <h2 className={style.title}>Campaign Updates</h2>
           <div className={style.mainContainer}>
                <div className={style.imageBox}>
                    <img className={style.image} src="/Images/papaImage.jpg" alt="Ernie Abella"/>
                </div>

                <div className={style.articleBox}>
                    <h6 className={style.category}>
                        NEWS
                    </h6>
                    <h3 className={style.headline}>
                        Remarks As Prepared For Delivery: Ernesto Abella Delivers Victory Speech In Raleigh
                    </h3>

                    <h4 className={style.button}>Read Story <ArrowRightAltIcon style={{color: "#FF0000", fontSize: '40px'}}/> </h4>
                </div>
           </div>

           <div className={style.subContainer}>
                <div className={style.subArticleBox}>
                    <h6 className={style.category}>
                        NEWS
                    </h6>
                    <h3 className={style.headline}>
                        Remarks As Prepared For Delivery: Ernesto Abella Delivers Victory Speech In Raleigh
                    </h3>

                    <h4 className={style.button}>Read Story <ArrowRightAltIcon style={{color: "#FF0000", fontSize: '40px'}}/> </h4>
                </div>

                <div className={style.subArticleBox}>
                    <h6 className={style.category}>
                        NEWS
                    </h6>
                    <h3 className={style.headline}>
                        Remarks As Prepared For Delivery: Ernesto Abella Delivers Victory Speech In Raleigh
                    </h3>

                    <h4 className={style.button}>Read Story <ArrowRightAltIcon style={{color: "#FF0000", fontSize: '40px'}}/> </h4>
                </div>

                <div className={style.subArticleBox}>
                    <h6 className={style.category}>
                        NEWS
                    </h6>
                    <h3 className={style.headline}>
                        Remarks As Prepared For Delivery: Ernesto Abella Delivers Victory Speech In Raleigh
                    </h3>

                    <h4 className={style.button}>Read Story <ArrowRightAltIcon style={{color: "#FF0000", fontSize: '40px'}}/> </h4>
                </div>
           </div>

        </div>
  )
  
}

export default HomeSection4
