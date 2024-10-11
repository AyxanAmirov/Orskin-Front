
import NewWalpaper from "../../assets/image/whats-new.jpg";
import { Link } from "react-router-dom";
import { blogs } from "../../../data/data";
function Blog() {
  return (
    <div className="container ">
      <div className="mt-[230px] flex flex-col items-center">
        <h1 className="font-[400 ] text-[30px]" data-aos="zoom-in">OUR BLOG</h1>
        <img src={NewWalpaper} alt="new" data-aos="zoom-in" />
      </div>
      <div className="bb-blog pb-[50px] mt-[30px] mb-[90px]">
        <div className="flex flex-wrap">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <img src={blogs[0].cover} alt="blog" data-aos="zoom-in" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
            <div className="h-full w-full flex flex-col justify-between">
              <div className="max-w-[500px]">
                <div className="bt-blog mt-[60px] ">
                  <div className="px-[30px]">
                    <h3 className="text-[30px] font-[600] mb-[20px] hover:text-[#9AD6CC] duration-[.4s]" data-aos="zoom-in">
                      <Link to={`/blog/${blogs[0].id}`}>{blogs[0].title}</Link>
                    </h3>
                    <p className="text-[#555555]" data-aos="zoom-in">
                      {blogs[0].introduction}
                    </p>
                  </div>
                </div>
              </div>
              <Link to={`/blog/${blogs[0].id}`} className="w-fit bg-[#a8d4cc]  self-end xl:py-[10px] lg:py-[10px] md:py-[10px] py-[8px] xl:px-[25px] lg:px-[25px] px-[20px] md:px-[25px] font-[600] text-[#ffffff] uppercase xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[17px] text-[17px]  duration-[.4s] hover:bg-[black] hover:text-[#a8d4cc]" data-aos="zoom-in">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
