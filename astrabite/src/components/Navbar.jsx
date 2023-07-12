import React from "react";
import { useEffect } from "react";
export default function Navbar() {
  const [s, setS] = React.useState(0);
  const [st, setSt] = React.useState(0);
  const [c,setC]=React.useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    console.log(scrollY);
    if (scrollY < 200) {
      setS(0);
    } else if (scrollY >= 200) {
      setS(1);
    }
    if(scrollY<400){
      setSt(1);
    } 
    if (scrollY>=400 && scrollY < 950) {
      setSt(2);
    }
    else if (scrollY >=950 && scrollY < 1400) {
      setSt(3);
    }
    else if (scrollY >= 1350  ) {
      setSt(4);
    }

  };
  const s1 = st==1?{borderBottom:"2px solid black",color:"white"}:{color:"white"}
  const s2 = st==2?{borderBottom:"2px solid black",color:"white"}:{color:"white"}
  const s3 = st==3?{borderBottom:"2px solid black",color:"white"}:{color:"white"}
  const s4 = st==4?{borderBottom:"2px solid black",color:"white"}:{color:"white"}
  const style=s==0?{
    position:"sticky",
    zIndex:"5  ",
    top:0,
    backgroundColor:"",
    paddingTop:'20px'

  }:{
    position:"sticky",
    zIndex:"5  ",
    top:0,
    backgroundColor:"white",
    


    background: "rgba( 231, 227, 227, 0.35 )",
boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
backdropFilter: "blur( 6.5px )",
webkitBackdropFilter: "blur( 11px )",
// borderRadius:" 10px",
border: "1px solid rgba( 255, 255, 255, 0.18 )",


// background: rgba( 231, 227, 227, 0.35 );


  }

  return (
    <div style={{position:"sticky",zIndex:"5  ",top:0,backgroundColor:"",paddingTop:"0px"}}>
      <header class="w-full h-16 flex justify-center  " style={style}>
        <nav class="w-4/5 flex justify-between items-center font-bebas">
          <h1 class="text-3xl text-color-black">Astrabite</h1>
          <ul class="md:flex gap-x-5 text-xl hidden">
            <a href="#">
              <li class="cursor-pointer">
                <div style={s1}>About Us</div>
              </li>
            </a>
            <a href="#">
              <li class="cursor-pointer">
                <div style={s2}>Team</div>
              </li>
            </a>
            <a href="#">
              <li class="cursor-pointer">
                <div style={s3}>Services</div>
              </li>
            </a>
            <a href="#">
              <li class="cursor-pointer">
                <div style={s4}>Contact Us </div>
              </li>
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
}
