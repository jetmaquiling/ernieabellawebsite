import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/newsection/newsection1.module.css'
import Link from 'next/link'
import qs from 'qs'
import config from '@/config/configuration.json';
import moment from 'moment';
import axios from 'axios';
import Skeleton from '@material-ui/lab/Skeleton';

const NewSection1 = () => {
    const [load, setLoad] = React.useState(true)
    const [mainArticle, setMainArticle] = React.useState({})
    const [feature, setFeature] = React.useState([])

    React.useEffect(() => {
        async function getBlog() { 
            try{
                const query = qs.stringify({ _where: { _or:[{"section_position": "feature"},{"section_position": "main"}]} });
                const {data} = await axios.get(`${config.SERVER_URL}/article-ernie-abellas?${query}`);

                data.map((article,index)=>{
                    if(article.section_position === "main"){
                        setMainArticle(data[index])
                        setMainArticle({...data[index], 
                            clipboard: data[index].thumbnail_image.url, 
                        })
                    }

                    if(article.section_position === "feature"){
                        setFeature(feature => [...feature, data[index]]);
                    }
                })
                setLoad(false)
                
            }catch(err){
                console.log(err)
            }
            
            
        }
        getBlog()

    }, [])
  
    if(!load){
        return (
            <div className={style.main}>
                <Link  href={`/blog/${mainArticle.id}`} >
                    <div className={style.mainContainer} >
                        <h2 className={style.mainTitle}>{mainArticle.main_title}</h2>
                        <img className={style.mainImage} src={mainArticle.clipboard}/>
                    </div>
                </Link>
                
    
                <div className={style.subContainer} >
                    <h5 className={style.label}>FEATURING</h5>
                    {feature.map((d,index)=>{
                        if(index <= 2){
                            return (
                                <Link key={d.main_title} href={`/blog/${d.id}`}><h4  className={style.subTitle} >{d.main_title}</h4></Link>
                            )
                        }
                        
                    })}
                    
                  
                </div>
                
    
               
            </div>
      )
    }else{
        return (
            <div  className={style.main}>
                <div className={style.mainContainer} >
                    <Skeleton animation="wave" height={30} />
                    <Skeleton animation="wave" height={30} />
                    <Skeleton animation="wave" height={300} />
                </div>
                <div className={style.subContainer} >
                    <Skeleton animation="wave" height={30} />
                    <Skeleton animation="wave" height={30} />
                    <Skeleton animation="wave" height={30} />
                </div>
            </div>
        )
        
    }
  
  
}

export default NewSection1
