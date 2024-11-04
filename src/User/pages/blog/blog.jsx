
import NewWalpaper from "../../assets/image/whats-new.jpg";
import { Link } from "react-router-dom";
import { blogs } from "../../../data/data";
function Blog() {
  return (
    <div className="container ">
      <div className="mt-[230px] flex flex-col items-center">
        <h1 className="font-[400 ] text-[40px]  font-[900] mb-[20px]" data-aos="zoom-in">OUR BLOG</h1>
        <img src={NewWalpaper} alt="new" data-aos="zoom-in" />
      </div>
      <div className="bb-blog pb-[50px] mt-[30px] mb-[90px]">

        <div className="flex flex-wrap">
          {
            blogs.map(blog => <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-[15px]" key={blog.id}>
              <div className="blog-item mb-[30px]">
                <img src={blog.coverMin} alt={blog.title} className="h-[300px] w-100 object-cover" data-aos="zoom-in" />
                <div className="px-[10px]">
                  <h3 className="text-[25px] font-[600] my-[20px] hover:text-[#9AD6CC] duration-[.4s]" data-aos="zoom-in">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h3>
                  <p className="text-[#555555]" data-aos="zoom-in">
                    {blog.introduction}
                  </p>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  );
}

export default Blog;
