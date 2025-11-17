import React, { useContext, useState } from "react";
import AccordionComponent from "../../components/accordion/accordion";
import { ServiceContext } from "../../context/ServiceContext";
import { Helmet } from "react-helmet-async";
import { seoContent } from "../../data/data";

function Aesthetics() {
  const { moreinfo: { description, items } } = useContext(ServiceContext);
  const { title, description: seoDesc, canonical, schema } = seoContent["aesthetics"];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{schema}</script>
      </Helmet>

      <div className="container py-[40px]">
        <p className="text-[#949598] text-[18px] font-[400] mb-[30px]">
          {description}
        </p>

        <div className="pl-4">
          {items?.map((item, i) => (
            <AccordionComponent
              key={item.id}
              index={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              title={item.title}
              description={item.description}
              itemImage={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Aesthetics;
