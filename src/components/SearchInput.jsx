import "./SearchInput.css";
import { GoSearch } from "react-icons/go";

function SearchInput({onTextChange}) {
  
  return (
    <div className="search-box">
      <GoSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search Book"
        onChange={onTextChange}
      />
    </div>
  );
}

export default SearchInput;
