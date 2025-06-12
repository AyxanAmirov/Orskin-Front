// import Wpicon from "../../assets/icons/wpicon";
// import whatsappIcon from "../../assets/icons/whatsapp.webp";
function Whatsapp() {
  return (
    <a href="https://wa.me/971504459672">
      <div className="z-50 cursor-pointer xl:rounded-[20px] lg:rounded-[20px] md:rounded-[20px] rounded-[50%] fixed right-7 bottom-[20px] bg-[#22DDB0] xl:px-[9px] lg:px-[9px] md:px-[9px] xl:py-[4px] lg:py-[4px] md:py-[4px] flex items-center gap-[10px] xl:w-auto lg:w-auto md:w-auto w-[40px] ">
        <img src={"https://d2mibg5rblp3sh.cloudfront.net/assets/whatsapp-ClNJ-q35.webp"} alt="Whatsapp icon" className="xl:w-[26px] lg:w-[26px] md:w-[26px] w-full xl:ml-[-18px] lg:ml-[-18px] md:ml-[-18px]"
          width={"100%"}
          height={"100%"}
        />
        {/* <Wpicon /> */}
        <p className="text-[white] text-[12px] xl:block lg:block md:block hidden ">
          WhatssApp Us
        </p>
      </div>
    </a>
  );
}

export default Whatsapp;
