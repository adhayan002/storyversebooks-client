import { UserContext } from "../UserContext";
import { useContext } from "react";

function SearchBar() {
    const{search,setSearch}=useContext(UserContext)
    const handleInputChange = (event) => {
       
        setSearch(event.target.value);
      };
  return (
    <input
    type="text"
    className="block mt-8 mx-auto md:w-[25%] w-[60%] px-4 py-2 text-black bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
    placeholder="Search..."
    value={search}
    onChange={handleInputChange}
    />

  )
}

export default SearchBar