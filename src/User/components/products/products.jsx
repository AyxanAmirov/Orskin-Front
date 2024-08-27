import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./product.css";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function Products({ product }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex flex-col items-center">
      <div className="card relative ">
        <img src={product.imgSrc} alt="product" className="w-full" />

        <div className="overlay absolute inset-0 bg-[#B3D6D0]"></div>
        <div className="icons absolute right-[30px] top-[20px] flex flex-col gap-[14px]">
          <Link to="/details">
            <FontAwesomeIcon
              icon={faEye}
              className="text-[#ffff] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] cursor-pointer hover:text-[#9AD6CC] duration-[.3s]"
            />
          </Link>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-[#ffff] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] cursor-pointer hover:text-[#9AD6CC] duration-[.3s]"
            onClick={onOpen}
          />
          <FontAwesomeIcon
            icon={faHeart}
            className="text-[#ffff] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[18px] cursor-pointer hover:text-[#9AD6CC] duration-[.3s]"
          />
        </div>
      </div>

      <p className="font-[400] mt-2 text-center xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[10px]">
        {product.title}
      </p>
      <p className="text-[#a5a7aa] xl:text-[13px] lg:text-[13px] md:text-[13px] sm:text-[13px] text-[8px]">
        {product.price}
      </p>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Added to Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{product.title} has been added to your cart!</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Link to="/cart">
              <Button variant="ghost">Go to Cart</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Products;

