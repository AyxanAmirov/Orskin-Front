import "./product.css";
function Products({ product }) {

  return (
    <div className="flex flex-col items-center mb-[30px] " data-aos="zoom-in">
      <div className="card relative ">
        <img src={product.imgSrc} alt={product.title} className="w-full h-[210px] md:h-[342px]" />

        <div className="overlay absolute inset-0 bg-[#b3d6d0c6] text-white flex justify-center align-center">
          <a href={product.url} target="_blank" rel="noopener noreferrer">
            Details</a>
        </div>
      </div>
      <p className="font-[400] mt-2 text-center xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[10px]">
        {product.title}
      </p>
      <p className="text-[#a5a7aa] xl:text-[13px] lg:text-[13px] md:text-[13px] sm:text-[13px] text-[8px]">
        {product.price}
      </p>
    </div>
  );
}

export default Products;

