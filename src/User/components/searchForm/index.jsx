import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchForm() {
    const [searchValue, setSearchValue] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate();
    const goSearch = (e) => {
        e.preventDefault()
        if (searchValue.length) {
            navigate(`/search/${searchValue}`);
            setError(false)
        } else {
            setError(true)
        }
    };
    return (
        <form className="flex" onSubmit={goSearch}>
            <input
                type="text"
                className={`rounded-l-[7px] rounded-bl-[7px] p-[10px] h-[50px]   border-[#E2E2E2] border-[1px] border-solid ${error ? "border-[#df0707]" : "border-[#E2E2E2]"} w-full`}
                placeholder="Search..."
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="bg-black hover:bg-[#9AD6CC] transition-all duration-500 px-[20px] rounded-r-[7px] rounded-br-[7px] flex items-center">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-white"
                />
            </button>
        </form>
    )
}

export default SearchForm