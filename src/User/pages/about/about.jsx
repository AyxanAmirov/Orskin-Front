import React, { useEffect, useState } from "react";
import AboutBanner from "../../assets/images/aboutus-banner.jpg";
import TeamPerson from "../../assets/images/team-or.jpg";
import DoctorGustavo from "../../assets/images/Dr.-Gustavo-Mazariegos.jpg";
import DoctorAsima from "../../assets/images/team-dr.jpg";
import Team from "../../assets/images/team.jpg";
import Slider from "../../components/slider/slider";
import axios from "axios";

function About({}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://6622d9c13e17a3ac846e1a5a.mockapi.io/books"
        );
        const result = response.data;

        setData(result);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    getData();


  }, []);
  return (
    <>
      <div className="flex justify-center">
        <img src={AboutBanner} alt="about" />
      </div>
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
            <div className="col-lg-5 flex flex-col gap-[20px]  pr-[60px]">
              <h3 className="text-[25px] leading-[32px] text-[#B3D6D0] font-[600]">
                Orsolya Matheisz
              </h3>
              <h4 className="text-[25px] leading-[32px] text-[#BCBEC0]">
                Co-Founder
              </h4>
              <p className=" text-[18px] leading-[25px] pr-[25px]">
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
          <div className="flex justify-center gap-[30px]">
            <div className="col-lg-5 px-[30px]">
              <img src={DoctorAsima} alt="person" />
            </div>
            <div className="col-lg-5 flex flex-col gap-[20px]  pr-[60px]">
              <h3 className="text-[25px] leading-[32px] text-[#B3D6D0] font-[600]">
                DR. Asima Nasir
              </h3>
              <h4 className="text-[25px] leading-[32px] text-[#BCBEC0]">
                Medical Director
              </h4>
              <p className=" text-[18px] leading-[25px] pr-[25px]">
                An enthusiastic and committed American board-certified aesthetic
                physician combines art and science to enhance one’s inherent
                attractiveness. After consulting with the patient and learning
                about their needs, a holistic approach is used to treat each
                individual patient in accordance with their specific needs. As a
                staff member of the Orskin Aesthetic Clinic, Dr. Asima Nasir
                provides the best treatment possible while producing outstanding
                outcomes.Additionally, Dr. Asima completed a master’s degree in
                business administration in healthcare management at UCAM Spain.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px] flex justify-center">
        <img src={Team} alt="team" />
      </div>
      <Slider data={data}/>
    </>
  );
}
export default About;
