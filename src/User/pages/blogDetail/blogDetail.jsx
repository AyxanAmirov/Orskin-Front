import { Tooltip } from "@chakra-ui/react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../../../data/data";
import { Helmet } from "react-helmet-async";
function BlogDetail() {
  const { slug } = useParams()
  const [blogState, setBlogState] = useState({})
  useEffect(() => {
    const foundBlog = blogs.find(blog => blog.slug === slug);
    if (!foundBlog) {
      setBlogState({
        title: "Blog Not Found",
        introduction: "The blog you are looking for does not exist.",
        cover: "https://placehold.co/800x400?text=Blog+Not+Found&font=roboto",
        coverMin: "https://placehold.co/400x200?text=Blog+Not+Found&font=roboto",
        description: "<p>Sorry, we couldn't find the blog you're looking for.</p>",
        products: [],
      });
    } else {
      setBlogState(foundBlog);
    }
  }, [slug])



  return (
    <>
      <Helmet>
        <title>{blogState?.title}</title>
        <meta name="description" content={blogState?.introduction} />
        <link rel="canonical" href={`https://orskin.ae/blog/${blogState?.title}`} />
        <meta property="og:title" content={blogState?.title} />
        <meta property="og:description" content={blogState?.introduction} />
        <meta property="og:image" content={blogState?.coverMin} />
        <meta property="og:url" content={`https://orskin.ae/blog/${blogState?.slug}`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json"></script>
      </Helmet>
      <div className="container ">
        <div className="mt-[230px] flex flex-col gap-[30px]">
          <h1 data-aos="fade-down" className=" text-[36px] text-[#B3D6D0] font-[900] mb-[20px]">
            {blogState?.title}
          </h1>
          <img
            src={blogState?.cover}
            alt={blogState?.title}
            className="self-center rounded-md shadow-lg"
            data-aos="fade-up"
            width="100%"
            height="auto"
            loading="lazy"
          />
          <div dangerouslySetInnerHTML={{ __html: blogState?.description }} ></div>
          <div className="flex flex-row flex-wrap">
            {
              blogState?.products?.map(product =>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-[20px]" key={product.id} >
                  <div className="flex flex-col gap-[10px] mb-[50px]">
                    <div>
                      <img
                        src={product.imgSrc}
                        alt={product.title}
                        className="h-[300px] w-100 object-cover"
                        data-aos="zoom-in"
                        loading="lazy"
                        width="100%"
                        height="300px"
                      />
                      <a className="text-[#9DD7CD] text-[13px]" data-aos="zoom-in" href={product.url} target="_blank">
                        {product.title}
                      </a>
                    </div>
                    <p data-aos="zoom-in">
                      {product.description}
                    </p>
                    <a href={product.url} target="_blank">
                      <button className="w-full py-[10px] px-[10px] bg-[#9AD6CC] rounded-[5px] text-white" data-aos="zoom-in">
                        Buy Now
                      </button>
                    </a>
                  </div>
                </div>)
            }

          </div>
          {blogState.id && <div> 
            <div className="bg-[#FFFCFC] px-[15px] py-[20px] flex items-center justify-between">
              <p className="text-[14px] text-[#C3DED9]" data-aos="zoom-in">
                Share This Story, Choose Your Platform!
              </p>
              <div className="flex gap-[15px]" data-aos="zoom-in">
                <Tooltip hasArrow label="Facebook" bg="black" color="#D3D3D3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="text-[#B3D6D0] text-[22px] cursor-pointer"
                    />
                  </a>
                </Tooltip>

                <Tooltip hasArrow label="Twitter" bg="black" color="#D3D3D3">
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blogState?.title || "Check this out!")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-[#B3D6D0] text-[22px] cursor-pointer"
                    />
                  </a>
                </Tooltip>

                <Tooltip hasArrow label="Email" bg="black" color="#D3D3D3">
                  <a
                    href={`mailto:?subject=${encodeURIComponent(blogState?.title)}&body=${encodeURIComponent(blogState?.introduction + " \n \n \n" + "Read more at: " + window.location.href)}`}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-[#B3D6D0] text-[22px] cursor-pointer"
                    />
                  </a>
                </Tooltip>

                <Tooltip hasArrow label="Whatsapp" bg="black" color="#D3D3D3">
                  <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent("Check out this blog: " + blogState?.title + " \n" + window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="text-[#B3D6D0] text-[22px] cursor-pointer"
                    />

                  </a>
                </Tooltip>
              </div>
            </div>
          </div>
          }
          <div className="mb-[100px]">
            <h2 className="text-[30px] text-[#B3D6D0] mb-[20px]" data-aos="zoom-in">
              Related Posts
            </h2>

            <div className="flex flex-row flex-wrap">
              {
                blogs.filter(item => item.id !== blogState?.id).map(blog => <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 border-gray-50 border p-[5px]">
                  <div className="card relative ">
                    <img
                      src={blog.cover}
                      alt={blog.title}
                      className="w-full" data-aos="zoom-in"
                      width="100%"
                      height="auto"
                      loading="lazy"
                    />

                    <div className="overlay absolute  inset-0 bg-[#9ad6ccda] opacity-30  flex justify-center align-center">
                      <Link to={`/blog/${blog.slug}`} className="text-[#fff]">DETAILS</Link>
                    </div>
                  </div>
                  <p className="text-[16px] mt-[10px] text-[#B3D6D0]" data-aos="zoom-in">
                    <Link to={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </p>
                </div>)
              }
            </div>
          </div>

        </div>
      </div>
    </>

  );
}

export default BlogDetail;
