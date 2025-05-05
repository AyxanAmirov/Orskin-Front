import { Tooltip } from "@chakra-ui/react";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../../../data/data";
import { Helmet } from "react-helmet-async";

function BlogDetail() {
  const { title } = useParams()
  const [blogState, setBlogState] = useState({})
  useEffect(() => {

    setBlogState(blogs.find(item => item.title.includes(title)));
  }, [title])


  return (
    <>
      <Helmet>
        <title>{blogState.title}</title>
        <meta name="description" content={blogState.introduction} />
        <link rel="canonical" href={`https://orskin.ae/blog/${blogState.title}`} />
        <script type="application/ld+json"></script>
      </Helmet>
      <div className="container ">
        <div className="mt-[230px] flex flex-col gap-[30px]">
          <h2 className="text-[#B3D6D0] text-[30px] font-[900]" data-aos="zoom-in">
            {blogState.title}
          </h2>
          <img
            src={blogState.cover}
            alt={blogState.title}
            className="self-center"
            data-aos="zoom-in"
          />
          <div dangerouslySetInnerHTML={{ __html: blogState.description }} ></div>
          <div className="flex flex-row flex-wrap">
            {
              blogState.products?.map(product =>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 px-[20px]" key={product.id} >
                  <div className="flex flex-col gap-[10px] mb-[50px]">
                    <div>
                      <img
                        src={product.imgSrc}
                        alt="blog"
                        className="h-[300px] w-100 object-cover"
                        data-aos="zoom-in"
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
          <div>
            <div className="bg-[#FFFCFC] px-[15px] py-[20px] flex items-center justify-between">
              <p className="text-[14px] text-[#C3DED9]" data-aos="zoom-in">
                Share This Story, Choose Your Platform!
              </p>
              <div className="flex gap-[15px]" data-aos="zoom-in">
                <Tooltip hasArrow label="Facebook" bg="black" color="#D3D3D3">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-[#B3D6D0] text-[22px]"
                  />
                </Tooltip>
                <Tooltip hasArrow label="Instagram" bg="black" color="#D3D3D3">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[#B3D6D0] text-[22px]"
                  />
                </Tooltip>

                <Tooltip hasArrow label="Email" bg="black" color="#D3D3D3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[#B3D6D0] text-[22px]"
                  />
                </Tooltip>

                <Tooltip hasArrow label="Contact" bg="black" color="#D3D3D3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-[#B3D6D0] text-[22px]"
                  />
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="mb-[100px]">
            <h2 className="text-[30px] text-[#B3D6D0] mb-[20px]" data-aos="zoom-in">
              Related Posts
            </h2>

            <div className="flex flex-row flex-wrap">
              {
                blogs.filter(item => item.id !== blogState.id).map(blog => <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 border-gray-50 border p-[5px]">
                  <div className="card relative ">
                    <img
                      src={blog.cover}
                      alt="product"
                      className="w-full" data-aos="zoom-in"
                    />

                    <div className="overlay absolute  inset-0 bg-[#9ad6ccda] opacity-30  flex justify-center align-center">
                      <Link to={`/blog/${blog.title}`} className="text-[#fff]">DETAILS</Link>
                    </div>
                  </div>
                  <p className="text-[16px] mt-[10px] text-[#B3D6D0]" data-aos="zoom-in">
                    <Link to={`/blog/${blog.title}`}>
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
