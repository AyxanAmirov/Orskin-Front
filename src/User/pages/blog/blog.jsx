
import NewWalpaper from "../../assets/image/whats-new.webp";
import { Link } from "react-router-dom";
import { blogs, seoContent } from "../../../data/data";
import { Helmet } from "react-helmet-async";
function Blog() {

  const { title, description, canonical, schema } = seoContent["blog"];

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
      <div className="container ">
        <div className="mt-[230px] flex flex-col items-center">
          <h1 className="font-[400 ] text-[40px]  font-[900] mb-[20px]" data-aos="zoom-in">OUR BLOG</h1>
          <img src={NewWalpaper} alt="What’s New" data-aos="zoom-in"
            width={"auto"} height={"auto"} />
        </div>
        <div className="bb-blog pb-[50px] mt-[30px] mb-[90px]">

          <div className="flex flex-wrap">
            {
              blogs.sort((a, b) => b.id - a.id).map(blog => <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-[15px]" key={blog.id}>
                <div className="blog-item mb-[30px]">
                  <Link to={`/blog/${blog.slug}`}>
                    <img src={blog.coverMin} alt={blog.title} className="h-[300px] w-100 object-cover" data-aos="zoom-in"
                      width={"100%"} height={"300px"} loading="lazy"
                    />
                  </Link>
                  <div className="px-[10px]">
                    <h3 className="text-[25px] font-[600] my-[20px] hover:text-[#9AD6CC] duration-[.4s]" data-aos="zoom-in">
                      <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
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
    </>

  );
}

export default Blog;
