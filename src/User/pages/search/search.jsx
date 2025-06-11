import { useParams } from "react-router-dom";
// import SearchCards from "../../components/searchCards/searchCards";
import SearchForm from "../../components/searchForm";

function Search() {
  const { query } = useParams()

  return (
    <div className="mt-[230px] mb-[80px]">
      <div className="container">
        <div className="pb-[60px] border-b-solid border-b-[1px] border-b-[#E2E2E2]">
          <h2 className="text-[20px] text-[#9AD6CC]">Need a new search?</h2>
          <p className="text-[#555555] text-[14px] mt-[25px] mb-[20px]">
            If you didn't find what you were looking for, try a new search!
          </p>
          <SearchForm />
        </div>
        <div>
          <h2 className="text-[35px] text-[#7eb1a8] mt-[50px]">No Search Result</h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[20px] mt-[50px]">
            {/* <SearchCards />
            <SearchCards />
            <SearchCards />
            <SearchCards />
            <SearchCards />
            <SearchCards /> */}
          </div>
          {/* <button className="uppercase w-full  text-center mt-[40px] bg-[#B3D6D0] py-[8px]   text-[white] duration-[.4s] hover:bg-black hover:text-[#9ad6cc]">
            Load more results{" "}
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Search;
