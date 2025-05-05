import Feedbacks from "../../components/feedbacks";
import { seoContent, services, serviceSlider } from "../../../data/data";
import ServiceCard from "../../components/serviceCard";
import Slider from "../../components/slider";
import { Helmet } from "react-helmet-async";




function Services() {
  const { title, description, canonical, schema } = seoContent["services"];


  return (

    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">
          {schema}
        </script>
      </Helmet>
      <section>
        <Slider slides={serviceSlider} />
        <div className="max-w-[1100px] m-auto container ">
          <div className="grid my-[60px] xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[50px]">
            {services?.map((service, index) => (
              <ServiceCard {...service} key={service.id} delay={index} />
            ))}
          </div>
        </div>
        <Feedbacks />
      </section>
    </>
  );
}

export default Services;
