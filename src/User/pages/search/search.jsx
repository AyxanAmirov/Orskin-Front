import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchCards from "../../components/sercchCards/searchCards";

function Search() {
  const Navigate = useNavigate();
  const goSearch = () => {
    Navigate("/search");
  };
  return (
    <div className="mt-[230px] mb-[80px]">
      <div className="container">
        <div className="pb-[60px] border-b-solid border-b-[1px] border-b-[#E2E2E2]">
          <h2 className="text-[20px] text-[#9AD6CC]">Need a new search?</h2>
          <p className="text-[#555555] text-[14px] mt-[25px] mb-[20px]">
            If you didn't find what you were looking for, try a new search!
          </p>
          <form className="flex" onSubmit={goSearch}>
            <input
              type="text"
              className="rounded-l-[7px] rounded-bl-[7px] p-[10px] border-[1px] border-solid border-[#E2E2E2] w-full"
              placeholder="Search..."
            />
            <button className="bg-black hover:bg-[#9AD6CC] transition-all duration-500 px-[20px] rounded-r-[7px] rounded-br-[7px] flex items-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white"
              />
            </button>
          </form>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[20px] mt-[50px]">
          <SearchCards />
          <SearchCards />
          <SearchCards />
          <SearchCards />
          <SearchCards />
          <SearchCards />
        </div>
        <button className="uppercase w-full  text-center mt-[40px] bg-[#B3D6D0] py-[8px]   text-[white] duration-[.4s] hover:bg-black hover:text-[#9ad6cc]">
          Load more results{" "}
        </button>
      </div>
    </div>
  );
}

export default Search;
