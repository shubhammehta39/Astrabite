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
    if(scrollY<1000){
      setSt(5);
    } 
    if (scrollY>=1000 && scrollY < 1700) {
      setSt(1);
    }
    else if (scrollY >= 1700 && scrollY < 2400) {
      setSt(2);
    }
    else if (scrollY >= 2400 && scrollY < 2700) {
      setSt(3);
    }
    else if (scrollY >= 2700) {
      setSt(4);
    }

  };
  const s1 = st==1?{borderBottom:"2px solid black",color:"black"}:st==5?{color:"white"}:{color:"black"}
  const s3 = st==3?{borderBottom:"2px solid black",color:"black"}:st==5?{color:"white"}:{color:"black"}
  const s4 = st==4?{borderBottom:"2px solid black",color:"black"}:st==5?{color:"white"}:{color:"black"}


  return (
    <div style={{}}>
      <header class="w-full h-5 flex justify-center absolute ">
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
                <div style={s3}>Services</div>
              </li>
            </a>
            <a href="#">
              <li class="cursor-pointer">
                <div style={s4}>Contact Us</div>
              </li>
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
}
