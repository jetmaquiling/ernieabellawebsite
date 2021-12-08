import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/homesection/homesection4.module.css'
import Link from 'next/link'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import qs from 'qs'
import config from '@/config/configuration.json';
import moment from 'moment';
import axios from 'axios';
import NewSection1 from "../newsection/newsection1";


const HomeSection4 = () => {
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
                
            }catch(err){
                console.log(err)
            }
            
            
        }
        getBlog()

    }, [])


  return (
        <div className={style.main}>
            <h2 className={style.title}>News and Updates</h2>
            <NewSection1/>
            <div className={style.buttonContainer} ><Link href="/blog"><h4 className={style.button}>See More </h4></Link></div>
        </div>
  )
  
}

export default HomeSection4
