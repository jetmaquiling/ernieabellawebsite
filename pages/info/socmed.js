/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, {useEffect} from 'react';
import styles from  "@/styles/blogsection/blog.module.css"
import IconButton from '@material-ui/core/IconButton';
import config from '@/config/configuration.json';
import axios from 'axios';
import Link from 'next/link'
import {useRouter} from 'next/router';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Skeleton from '@material-ui/lab/Skeleton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import ShareIcon from '@material-ui/icons/Share';
import Head from 'next/head'
import HeadV2 from '@/components/head/headv2';
import FooterV2 from '@/components/footer/footerv2';
import FooterV1 from './../../components/footer/footerv1';
import qs from 'qs'
import ReplyIcon from '@material-ui/icons/Reply';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function Socmed({article}) {
    const myRef = React.useRef(null);
    const router = useRouter();
    const [blog , setBlog] = React.useState({});
    const [link, setLink] = React.useState(false);
    const ShareTitle = blog ? blog.main_title : "Ernie Abella - Patas Na Lipunan"
    
    const share = async () =>{
        try {
            await navigator.share({ title: ShareTitle, url: window.location.href });
            console.log("Data was shared successfully");
          } catch (err) {
            console.error("Share failed:", err.message);
          }
    }
  
    useEffect(() => {
        scrollToRef(myRef)
    }, [])



    useEffect(() => {
        setBlog({})
        async function getBlog() { 
            try{
                const {data} = await axios.get(`${config.SERVER_URL}/article-ernie-abellas/16`);
                setBlog(data)
                const url = `"${data.main_title.replaceAll(' ', '%20')}"%0ABy%20${data.author.replaceAll(' ', '%20')}%0D%0A${data.seo_description.replaceAll(' ', '%20')}`
                
                setBlog({...data, 
                    clipboard: data.thumbnail_image.url, 
                    thumbnail: data.thumbnail_image.formats.thumbnail.url,
                    urltitle : url
                })

                

            }catch(err){
                console.log(err)
            }
            
        }
        getBlog()

    }, [])





      
    if(blog.main_title){
        return (

            <div className={styles.root} ref={myRef} >

                    {article && 
                        <Head>
                            <meta property="og:type" content="website" />
                            <title>{article.main_title}</title>
                            <meta property="og:title" content={article.main_title} />
                            <meta property="og:image" content={article.thumbnail_image ? article.thumbnail_image.url : "/Thumbnail/ernieabella.png"} />
                            <meta property="og:description" content={article.sub_title} />
                        </Head>
                    }
                <HeadV2 backdrop={true}/>

                <div  className={styles.mainContainer}>

                    <div className={styles.logoBox}>
                        <img src="/Logo/LogoDark.png" className={styles.logo} />
                    </div>

                
                    <div className={styles.linkContainer}>
                        
                        <div className={styles.linkBox} onClick={share}>
                            <ReplyIcon style={{color:'#fff'}}/>    
                        </div>
                  

                        <a  target="_blank"  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                        <div className={styles.linkBox}>
                            <FacebookIcon style={{color:'#fff'}}/>    
                        </div>
                        </a> 

                        <a  target="_blank" href={`http://www.twitter.com/share?url=${window.location.href}`}>
                        <div className={styles.linkBox}>
                            <TwitterIcon style={{color:'#fff'}}/>
                        </div>
                        </a>

                        <a  target="_blank"   href={`mailto:?subject=${blog.title}"&body=${window.location.href}`}>
                        <div className={styles.linkBox}>
                            <MailIcon style={{color:'#fff'}}/>
                        </div>
                        </a> 

                    </div>
                    <h1 className={styles.title}>{blog.main_title}</h1>
                    

                </div>
               
                <div className={styles.sectionContainer}>
                    <div  className={styles.sectionA}>
                        <h2 className={styles.subtitle}>{blog.sub_title}</h2>
                        <h6 className={styles.time}>Updated at {moment(blog.published_at).format('MM/DD/YYYY h:mm a')} ACT</h6>
                        <div className={styles.content} dangerouslySetInnerHTML={{__html: `${blog.main_body}`}} />
                        <div></div>
                    </div>

                    <div  className={styles.sectionB}>
                        
                        

                        
                    </div>
                </div>
                
                <FooterV1/>
               
            </div>
        );
    }else{
        return(
            <div className={styles.root} ref={myRef}>
                {article && 
                        <Head>
                            <meta property="og:type" content="website" />
                            <title>{article.main_title}</title>
                            <meta property="og:title" content={article.main_title} />
                            <meta property="og:image" content={article.thumbnail_image ? article.thumbnail_image.url : "/Thumbnail/ernieabella.png"} />
                            <meta property="og:description" content={article.sub_title} />
                        </Head>
                    }
                <div  className={styles.main}>
                    
                      
                    <Typography variant="h2" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="p" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="p" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="p" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="p" >
                        <Skeleton />
                    </Typography>
                    
                    
                    <Skeleton variant="rect" style={{width: '100%', height: '300px'}} />

                    <Typography variant="h2" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h2" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h6" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h6" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h6" >
                        <Skeleton />
                    </Typography>
                </div>
            
            </div>
        );
           
    }
    
}



export async function getServerSideProps(context) {
    let article = null;
    await fetch(`${config.SERVER_URL}/article-ernie-abellas/16}`)
      .then((response) => response.json())
      .then((json) =>{
        article=json
      })
  
    return {
      props: {
        article,
      },
    };
  };


