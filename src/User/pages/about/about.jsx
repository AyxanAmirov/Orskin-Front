
import TeamBottomBanner from "../../assets/image/team.jpg";
import Feedbacks from "../../components/feedbacks";
import { aboutInfo, team } from "../../../data/data";
import { Helmet } from "react-helmet";

function About() {

  return (
    <>
      <Helmet>
        <title>The Best Aesthetic Doctors in Dubai | Expert Doctors in Aesthetic</title>
        <meta name="description" content="Orskin Aesthetic Clinic in Dubai offers advanced aesthetic treatments with global expertise. Experience Advalight Laser, Neurotris Microcurrent Facial, and Morpheus Microneedling" />
        <link rel="canonical" href="https://orskin.ae/about-us" />
        <script type="application/ld+json">
          {`
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://orskin.ae/about-us/",
      "url": "https://orskin.ae/about-us/",
      "name": "About Us - Orskin Aesthetic Clinic in Dubai",
      "description": "Learn more about Orskin Aesthetic Clinic and our team of skincare experts in Dubai.",
      "datePublished": "2023-05-21",
      "dateModified": "2024-01-15",
      "inLanguage": "en-US",
      "breadcrumb": {
        "@id": "https://orskin.ae/about-us/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://orskin.ae/about-us/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://orskin.ae/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us"
        }
      ]
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://orskin.ae/#medicalclinic",
      "name": "Orskin Aesthetic Clinic",
      "url": "https://orskin.ae/",
      "description": "Orskin Aesthetic Clinic in Dubai offers high-quality skincare treatments by experienced experts.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "285D Al Wasl Rd",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "telephone": "+971 (0) 4 345 5520",
        "email": "info@orskin.ae"
      },
      "openingHours": [
        "Mo-Sa 09:00-21:00",
        "Su 10:00-19:00"
      ]
    }
  ]
`}
        </script>
      </Helmet>

      <div className="flex justify-center">
        <img src={aboutInfo.banner} alt="Facial lifting effect demonstrated through our advanced treatment." className="w-100 xl:h-[420px] lg:h-[390px] md:h-[330px] sm:h-[310px] h-[200px] object-cover" data-aos="zoom-in" />
      </div>
      <div className="container ">
        <div className="flex flex-col items-center gap-[50px]">
          <div className="flex flex-wrap justify-center mt-[70px] xl:gap-0 lg:gap-0 md:gap-[30px] sm:gap-[30px] gap-[30px]">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12" data-aos="zoom-in">
              <p className="xl:px-[50px] lg:px-[50px] md:px-[50px] sm:px-[50px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] leading-[25px]">
                {aboutInfo.description}
              </p>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12" data-aos="zoom-in">
              <p className="xl:px-[50px] lg:px-[50px] md:px-[50px] sm:px-[50px] text-[#B3D6D0] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[23px] text-[23px]  leading-[32px]">
                {aboutInfo.title}
              </p>
            </div>
          </div>
          <h1 className="xl:text-[44px] lg:text-[44px] md:text-[44px] sm:text-[40px] text-[40px] text-[#9AD6CC] mb-[50px]" data-aos="zoom-in">MEET OUR TEAM</h1>
        </div>
        <div className="flex flex-col items-center gap-[50px]">
          {
            team.map((member, index) => (
              <div key={member.id} className={
                index % 2 == 0 ? "flex justify-center flex-wrap lg:gap-[0px] xl:gap-[0px]  md:gap-[50px] sm:gap-[50px] gap-[50px]" : "flex justify-center flex-wrap lg:gap-[0px] xl:gap-[0px] md:flex-row-reverse md:gap-[50px] sm:gap-[50px] gap-[50px]"
              }>
                <div className="lg:order-1 xl:order-1 order-2 col-lg-5 col-md-12 col-sm-12 col-12 flex flex-col gap-[30px] xl:px-[50px] lg:px-[50px] md:px-[50px] sm:px-[50px] ">
                  <h2 className="xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[23px] text-[23px] leading-[32px] text-[#B3D6D0] font-[600]" data-aos="zoom-in">
                    {member.fullName}
                  </h2>

                  <p className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[16px] leading-[25px] " data-aos="zoom-in">
                    {member.description}
                  </p>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 col-12 xl:px-[30px] lg:px-[30px] md:px-[30px] sm:px-[30px]" data-aos="zoom-in">
                  <img src={member.image} alt={member.alt} className="w-full h-[500px] object-cover" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="mt-[40px] flex justify-center">
        <img src={TeamBottomBanner} alt="Orskin aesthetics clinic's team" data-aos="zoom-in" className="w-100" />
      </div>
      <Feedbacks />
    </>
  );
}
export default About;
