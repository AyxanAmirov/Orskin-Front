import React, { useContext } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import { Accordion } from "@chakra-ui/react";
import AccordionComponent from "../../components/accordion/accordion";
import { Helmet } from "react-helmet-async";
import { seoContent } from "../../../data/data";
function Wellness() {
  const { moreinfo: { image, items, description } } = useContext(ServiceContext);
  const { title, description: seoDesc, canonical, schema } = seoContent["wellness"];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">
          {schema}
        </script>
      </Helmet>
      <div className="container py-[40px]">
        <div className="flex gap-[30px] align-center mb-[50px] md:flex-row flex-col">
          <img
            src={image}
            alt="wellness"
            className="w-[100%] h-[auto] object-cover"
            width={"100%"} height={"auto"} loading="lazy"
          />
          <p className="text-[#949598] text-[18px] font-[400] mb-[30px]">
            {description}
          </p>

        </div>
        <Accordion allowToggle allowMultiple={false}>
          {
            items?.map(item => <AccordionComponent
              title={item.title}
              description={item.description}
              itemImage={item.image}
              key={item.id}
            />)
          }
        </Accordion>
      </div>
    </>
  );
}

export default Wellness;
