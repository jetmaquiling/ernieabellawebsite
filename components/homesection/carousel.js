/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import React ,{useState, useCallback}from 'react'
import Link from 'next/link';
import Head from 'next/head'
import Carousel from 'nuka-carousel';
import style from '@/styles/homesection/carousel.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export default function CarouselComponent ({openVideo,setOpenVideo}) {


    const toggle = (url) =>{
        setOpenVideo({url: url, open:true})
    }
    
  return (
      <div className={style.main}>
        <Carousel
            width="100%"
            height="100%"
            transitionMode='scroll'
            autoplay={true}
            autoplayInterval={6000}
            wrapAround={true}
            renderCenterLeftControls={({ previousSlide }) => (
                <div className={style.carouselButton}>
                    <ArrowBackIosIcon style={{fontSize: '70px'}}  onClick={previousSlide} />
                </div>
            )}

            renderCenterRightControls={({ nextSlide }) => (
                <div className={style.carouselButton} >
                    <ArrowForwardIosIcon style={{fontSize: '70px'}} onClick={nextSlide}/>
                </div>
                
            )}

        >
            <div className={style.itemContainer1}>
               <div className={style.itemBox1}>
                    <div className={style.textBox}>
                        <h1 className={style.title}>
                                GOBYERNONG NARARAMDAMAN
                        </h1>
                   </div>
                   <div className={style.buttoncontainer}>
                        <h4 className={style.button} >LEARN MORE</h4>
                        <PlayCircleOutlineIcon onClick={()=>toggle("https://www.youtube.com/embed/V5Is1K5Bprs")} style={{fontSize: '45px'}} className={style.youtubeButton}/>
                   </div>
                   
               </div>
            </div>

            <div className={style.itemContainer2}>
                <div className={style.itemBox1}>
                    <div className={style.textBox}>
                        <h1 className={style.title}>
                                PATAS NA LIPUNAN
                        </h1>
                        {/* <p className={style.subText}>
                                The PHILIPPINE CENTURY, Change can happen OVERNIGHT!
                        </p> */}
                    </div>
                    <div className={style.buttoncontainer}>
                        <h4 className={style.button} >LEARN MORE</h4>
                        <PlayCircleOutlineIcon onClick={()=>toggle("https://www.youtube.com/embed/Hh5NoTvzDQY")} style={{fontSize: '45px'}} className={style.youtubeButton}/>
                   </div>
                
                </div>
            </div>

            <div className={style.itemContainer3}>
                <div className={style.itemBox1}>
                    <div className={style.textBox}>
                        <h1 className={style.title}>
                           MATATAG NA BAYAN
                        </h1>
                    </div>
                    <div className={style.buttoncontainer}>
                        <h4 className={style.button} >JOIN THE ADVOCACY</h4>
                        <PlayCircleOutlineIcon onClick={()=>toggle("https://www.youtube.com/embed/yVlRTRWKGkw")} style={{fontSize: '45px'}} className={style.youtubeButton}/>
                   </div>
                </div>
            </div>

        </Carousel>
      </div>
  );
}