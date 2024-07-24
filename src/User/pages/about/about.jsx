import React from "react";
import AboutBanner from "../../assets/images/aboutus-banner.jpg";
import TeamPerson from "../../assets/images/team-or.jpg";
import DoctorGustavo from "../../assets/images/Dr.-Gustavo-Mazariegos.jpg";
function About() {
  return (
    <>
      <img src={AboutBanner} alt="about" />
      <div className="container ">
        <div className="flex flex-col items-center gap-[50px]">
          <div className="flex justify-center mt-[70px]">
            <div className="col-lg-5">
              <p className="px-[50px] text-[18px] leading-[25px]">
                At Orskin, we are driven to help you to achieve your vision of
                well-being and beauty. Our approach to skincare services is to
                provide you with an array of holistic and personalized
                treatments, specifically created to address any of your skin
                concerns.
                <br />
                <br />
                We use a combination of advanced high-tech devices with
                conventional methods giving the best possible skincare
                treatments to all of our clients. We want you to feel and look
                great!
              </p>
            </div>
            <div className="col-lg-5">
              <p className="px-[50px] text-[#B3D6D0] text-[25px] leading-[32px]">
                Our highly experienced skincare experts are qualified and
                trained in Europe, US and Asia. Some of our signature services
                include Advalight Laser, Neurotris Microcurrent Facial, and
                Morpheus microneedling to name a few.
              </p>
            </div>
          </div>
          <h2 className="text-[44px] text-[#9AD6CC]">MEET OUR TEAM</h2>
          <div className="flex justify-center gap-[30px]">
            <div className="col-lg-5 px-[30px]">
              <img src={TeamPerson} alt="person" />
            </div>
            <div className="col-lg-5 flex flex-col gap-[30px]  pr-[60px]">
              <h3 className="text-[25px] leading-[32px] text-[#B3D6D0] font-[600]">
                Orsolya Matheisz
              </h3>
              <h4 className="text-[25px] leading-[32px] text-[#BCBEC0]">
                Co-Founder
              </h4>
              <p className=" text-[18px] leading-[25px]">
                Introducing our Co-Founder Orsolya Matheisz, also known as Orsi,
                a licensed aesthetician from Hungary with a passion for beauty
                and wellness. With over 18 years of experience in beauty, facial
                care, and anti-aging.
                <br />
                <br />
                Orsi was inspired to start this company to bring the very best
                skincare technology solutions to the market, combined with a
                down-to-earth yet high-end approach.
              </p>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="col-lg-5 flex flex-col gap-[30px] px-[50px] ">
              <h3 className="text-[25px] leading-[32px] text-[#B3D6D0] font-[600]">
                Dr. Gustavo Mazariegos{" "}
              </h3>

              <p className=" text-[18px] leading-[25px] ">
                Dr. Gustavo Mazariegos is a leader in Aesthetic Medicine and
                Hair Restoration with over a decade of experience. A Professor
                of Master’s in Facial Aesthetic Medicine, he is internationally
                renowned for his skills in treatments such as Botox, Filler,
                Non-Surgical Face Lift, and Facial Harmonisation, achieving
                natural results for a more striking, streamlined complexion. He
                is also a highly sought-after Trichologist and Hair Transplant
                Surgeon.
              </p>
            </div>
            <div className="col-lg-5 px-[30px]">
              <img src={DoctorGustavo} alt="doctor" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
