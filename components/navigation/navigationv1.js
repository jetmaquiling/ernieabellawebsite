import * as React from "react"
import * as style from "@/styles/navigation/navigationv1.module.css"
import Link from 'next/link'
import CloseIcon from '@material-ui/icons/Close';



const NavigationV1 = ({pos,open, setOpen, header}) => {
  
  const [drawer, setDrawer] = React.useState(null)

  return (
    <div className={open  ? style.off : style.main}>

        {header && <div className={style.navbar}>
          <div className={style.navbar1}>
              <div className={style.tinylogoToken}>
                <img  src="/Logo/LogoWhite.png" className={style.logoToken} alt="logo" onMouseLeave={(e) => {e.target.src = "/Logo/LogoWhite.png"}}  onMouseOver={(e) => {e.target.src = "/Logo/LogoDark.png"}} />
              </div>
          </div>

          <div className={style.navbar3} onClick={()=>{setOpen(!open)}}>      
               <CloseIcon style={{color:"#fff", fontSize: '40px'}}/>
          </div>
          
          
        </div> }

        <div className={style.navbar2}>

              
              <div  className={style.buttonBox}>
                <Link  href="https://docs.google.com/forms/d/1yoGOHrJUBUwfuhIeJDm18CGscvCLmGPlN-yno1-tQ-I/viewform?fbclid=IwAR3H0zii6wp9ukTk1OIWkntS8IbBySy2Mab2J0qjphUfefSKqWdDate7uuM&edit_requested=true" ><h4 className={style.h4animate}>Join The Advocacy</h4></Link>
              </div>
             
              <div  className={style.buttonBox}>
                <Link href="/info/about"><h4 className={style.h4animate}>About Ernie</h4></Link>
              </div>
  
              <div  className={style.buttonBox}>
                <Link href="/info/program"><h4 className={style.h4animate}>Priorities</h4></Link>
              </div>

              <div  className={style.buttonBox}>
                <Link href="/blog"><h4 className={style.h4animate}>News</h4></Link>
              </div>
              
             
              <div  className={style.specialbuttonBox}>
                <Link href="/info/donate"><h4 className={style.specialh4animate}>Donate</h4></Link>
              </div>

            
              



        </div>
        <div className={style.rightsBox}>
              <p className={style.rightsText}>2021 © ERNIE ABELLA | All rights reserved</p>
        </div>

        
    </div>
    
  )
}

export default NavigationV1
