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
                <img src={'/Logo/logowhite.png'} alt="Logo"  className={style.logoToken}/>
              </div>
          </div>

          <div className={style.navbar3} onClick={()=>{setOpen(!open)}}>      
               <CloseIcon style={{color:"#fff", fontSize: '40px'}}/>
          </div>
          
          
        </div> }

        <div className={style.navbar2}>

              
              <div  className={style.buttonBox}>
                <Link href="/join"><h4 className={style.h4animate}>Join The Advocacy</h4></Link>
              </div>

              <div  className={style.buttonBox}>
                <Link href="/join"><h4 className={style.h4animate}>Get Involved</h4></Link>
              </div>

             
              <div  className={style.buttonBox}>
                <Link href="/info/about"><h4 className={style.h4animate}>About Ernie</h4></Link>
              </div>
  
              <div  className={style.buttonBox}>
                <Link href="/info/about"><h4 className={style.h4animate}>Priorities</h4></Link>
              </div>

              <div  className={style.buttonBox}>
                <Link href="/info/about"><h4 className={style.h4animate}>News</h4></Link>
              </div>
              
             

              <div  className={style.buttonBox}>
                <Link href="/info/about"><h4 className={style.h4animate}>Articles</h4></Link>
              </div>

              <div  className={style.specialbuttonBox}>
                <Link href="/info/about"><h4 className={style.specialh4animate}>Donate</h4></Link>
              </div>

            
              



        </div>
        <div className={style.rightsBox}>
                    <p className={style.rightsText}>2021 © ErnieAbella.COM | All rights reserved</p>
        </div>

        
    </div>
    
  )
}

export default NavigationV1
