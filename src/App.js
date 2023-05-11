import SearchInput from "./components/SearchInput";
import "./App.css";
import CardList from "./components/CardList";
import { useState } from "react";
import CardInfo from "./components/CardInfo";
import  Axios  from "axios";

export const API_KEY = "AIzaSyCbSOAxjFzBCcNyFzJAKz_bp1aHDsF5m2c";

function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [selectedBook, onBookSelect] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [bookList, updateBookList] = useState([]);

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchString}&key=${API_KEY}`,
    );
    updateBookList(response.data.items);
  };

  const onTextChange = (e) => {
    onBookSelect("");
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 1000);
    updateTimeoutId(timeout); 
  };

  return (
    <div className="App">
      <h1 className="app-title">Book Store</h1>

       <SearchInput onTextChange={onTextChange} />
 
       {selectedBook && (
        <CardInfo selectedBook={selectedBook} onBookSelect={onBookSelect} />
      )}

      <CardList bookList={bookList}  onBookSelect={onBookSelect}/> 
    </div>
  );
}

export default App;
