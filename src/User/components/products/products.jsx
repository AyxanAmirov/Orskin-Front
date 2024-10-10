import "./product.css";
function Products({ product }) {

  return (
    <div className="flex flex-col items-center" data-aos="zoom-in">
      <div className="card relative ">
        <img src={product.imgSrc} alt="product" className="w-full" />

        <div className="overlay absolute inset-0 bg-[#b3d6d0c6] text-white flex justify-center align-center">
          <a href="https://orskin.ae/" target="_blank" rel="noopener noreferrer">
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

