import Feedbacks from "../../components/feedbacks";
import { services, serviceSlider } from "../../../data/data";
import ServiceCard from "../../components/serviceCard";
import Slider from "../../components/slider";




function Services() {

  return (
    <section>
      <Slider slides={serviceSlider} />
      <div className="max-w-[1100px] m-auto container ">
        <div className="grid my-[60px] xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-[50px]"> {services?.map((service) => (
          <ServiceCard {...service} />
        ))}
        </div>
      </div>
      <Feedbacks />
    </section>
  );
}

export default Services;
