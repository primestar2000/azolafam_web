import React from "react";
import NavBar from "../../assets/components/NavBar";
import bg from "../../assets/images/bg.jfif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
  return (
    <header className="h-[468px] lg:h-[100vh] flex flex-col " style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "center" }}>
      <NavBar />
      <div className="bg-[#00000040] flex-1 flex flex-col justify-center ">
        <div className="max-w-[824px] flex flex-col justify-center mx-[20px] lg:mx-[100px] gap-[8px] lg:gap-[16px]">
          <p className="text-[40px] text-white  leading-40 lg:leading-60 lg:text-[60px]" style={{fontFamily: "YesevaOne"}}>
            Revolutionizing the Agricultural Industry.
            </p>
            <p className="text-white text-[18px] font-[400] leading-18">Buy and Sell Produce, Equipment, and Services Effortlessly with Azolafam.</p>
            <button className="w-[135px] lg:w-[140px] h-[44px] lg:h-[47px]  rounded-[16px] bg-white text-[16px] lg:text-[18px] font-[700] flex justify-center items-center gap-4" >
              Explore
              <span className="w-[31px] lg:w-[35px] h-[31px] lg:h-[35px] bg-[#52A742]  rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faArrowUp} className="rotate-45 text-white" />
              </span>
            </button>
        </div>
          
      </div>
    </header>
  );
}
