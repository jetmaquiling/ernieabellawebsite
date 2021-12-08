import * as React from "react"
import Head from 'next/head'
import * as style from '@/styles/navigation/headv3.module.css'
import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import NavigationV1 from "../navigation/navigationv1";
import CloseIcon from '@material-ui/icons/Close';

const HeadV3 = ({}) => {
  const [pos, setPos] = React.useState("top")
  const [open, setOpen] = React.useState("top")


  React.useEffect (()=>{
    document.addEventListener("scroll", e => {
        let scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 10){
           setPos("moved")
        } else {
           setPos("top")
        }
    })
  },[])
  
  return (
    <div  className={style.main} >
       <div  className={style.level1}>
            <div className={style.containerSide} >
                <Link href="/info/about"><h4 className={style.linkText} >About Ernie</h4></Link>
                <Link href="/info/platform"><h4 className={style.linkText} >Platform</h4></Link>
            </div>
            <div className={style.containerLogo} >
                <Link href="/">
                
                <img  src="/Logo/LogoWhite.png" className={style.logo} alt="logo" onMouseLeave={(e) => {e.target.src = "/Logo/LogoWhite.png"}}  onMouseOver={(e) => {e.target.src = "/Logo/LogoDark.png"}} />
            
            
                </Link>
            </div>
            <div className={style.containerSide} >
                <Link href="/blog"><h4 className={style.linkText} >News</h4></Link>
                <Link href="https://docs.google.com/forms/d/1yoGOHrJUBUwfuhIeJDm18CGscvCLmGPlN-yno1-tQ-I/viewform?fbclid=IwAR3H0zii6wp9ukTk1OIWkntS8IbBySy2Mab2J0qjphUfefSKqWdDate7uuM&edit_requested=true"><h4 className={style.linkText} >Get Involved</h4></Link>
            </div>

            <div className={style.navButton}>   
                {open ? <MenuIcon onClick={()=>{setOpen(!open)}} style={{color: '#fff', fontSize: '30px', cursor: 'pointer'}} /> : <CloseIcon onClick={()=>{setOpen(!open)}} style={{color: '#fff', fontSize: '30px', cursor: 'pointer'}} />}
                
            </div>
       </div>

       <div  className={style.level2}>
            <h4 className={style.subjectText} >PRESS NEWS</h4>
            <h4 className={style.subjectText} >CAMPAIGN</h4>
            <h4 className={style.subjectText} >ARTICLES</h4>
            <h4 className={style.subjectText} >STORIES</h4>
            <h4 className={style.subjectText} >NATION</h4>
            <h4 className={style.subjectText} >COMMUNITY</h4>
        </div>

        <NavigationV1 header={false}  pos={pos} open={open} setOpen={setOpen} />

    </div>
    
  )

}

export default HeadV3
