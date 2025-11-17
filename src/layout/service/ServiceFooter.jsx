import ContactForm from "../../components/form";

function ServiceFooter() {
  return (
    <div className="my-[40px]">
      <div className="w-full bg-no-repeat bg-center bg-cover py-[60px] text-center"
      style={{backgroundImage:`url('/src/assets/image/servce-sub-bg.webp')`}}>
        <div className="container">
          <p className="xl:text-[45px] lg:text-[45px] md:text-[45px] sm:text-[33px] text-[25px] font-[450] leading-[55px] text-shadow" data-aos="zoom-in">
            <span className="font-[600]">Everything</span> we do is <br />
            designed to <span className="font-[600]">beautify</span> you.
          </p>
        </div>
      </div>
      <div className="mt-[40px]">
        <div className="container">
          <h2 className="text-[#8b8b8b] xl:text-[45px] lg:text-[45px] md:text-[45px] sm:text-[33px] text-[28px] text-center" data-aos="zoom-in">
            EXPERIENCE THE ORSKIN DIFFERENCE
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ServiceFooter;
