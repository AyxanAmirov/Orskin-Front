import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Pagination from "../../components/pagination/pagination";
import Products from "../../components/products/products";
const productData = [
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
  {
    imgSrc:
      "https://orskin.ae/wp-content/uploads/2024/06/Silk-radience-3-in-1-cleansing-oil-400x400.webp",
    title: "Epicuren – Silk Radience 3-in-1 Cleansing Oil",
    price: "AED 496.32 + VAT",
  },
];
function Fav() {
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 12;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = productData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="mt-[230px] mb-[50px]">
      <div className="container">
        <h2 className="text-center font-[500] xl:text-[40px] lg:text-[40px] text-[30px] mb-[20px]">
          Favorite
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pb-[50px] gap-[30px]">
          {currentProduct.map((product, index) => (
            <Products key={index} product={product} />
          ))}
        </div>
        <div className="flex justify-end gap-[5px]">
          <Pagination
            productPerPage={productPerPage}
            totalProducts={productData.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Fav;
