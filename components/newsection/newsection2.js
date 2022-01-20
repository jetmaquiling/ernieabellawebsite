import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/newsection/newsection2.module.css'
import Link from 'next/link'
import qs from 'qs'
import config from '@/config/configuration.json';
import moment from 'moment';
import axios from 'axios';
import Skeleton from '@material-ui/lab/Skeleton';


const NewSection2 = () => {
    const [feature, setFeature] = React.useState([])

    React.useEffect(() => {
        async function getBlog() { 
            try{
                const query = qs.stringify({ _where: { _or:[{"section_position": "feature"}]} });
                const {data} = await axios.get(`${config.SERVER_URL}/article-ernie-abellas?${query}`);
                console.log(data)
                setFeature(feature => [...feature, ...data]);
                setLoad(false)
                
            }catch(err){
                console.log(err)
            }
            
            
        }
        getBlog()

    }, [])
  

  return (
        <div className={style.main}>
            <h2  className={style.label} >👇 Top Stories 👇</h2>
            <div className={style.articleContainer}>
                {feature.map((data)=>{
                    return (
                        <>
                            <Link href={`/blog/${data.id}`} >
                                <div key={data} className={style.articleItem}>
                                    <div className={style.articleImageBox}>
                                        <img className={style.articleImage} src={data.thumbnail_image.url} />
                                    </div>
                                    <h6 className={style.articleSubject}>{data.subject}</h6>
                                    <h4 className={style.articleTitle}>{data.main_title}<span className={style.author}>- By {data.author}</span></h4>
                                </div>
                            </Link>
                        </>
                        
                        
                    )
                })}
            
            </div>
        </div>
  )
  
}

export default NewSection2
