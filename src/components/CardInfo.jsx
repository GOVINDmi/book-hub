import { useEffect, useState } from 'react';
import './CardInfo.css';
import  Axios from 'axios';
import { API_KEY } from "../App"; 

function CardInfo({selectedBook,onBookSelect}) {
    const [bookInfo, setBookInfo] = useState();
     let src;
  if(bookInfo?.imageLinks){
    src=bookInfo.imageLinks.thumbnail;
  } 

     useEffect(() => {
        Axios.get(
          `https://www.googleapis.com/books/v1/volumes/${selectedBook}?key=${API_KEY}`,
        ).then((response) => setBookInfo(response.data.volumeInfo));
    }, [selectedBook]); 

  return (
   <div className='info-box1'>
        {bookInfo ? (
            <>
            <img src={src} alt={bookInfo.title} className='cover-image1'/>

<div className="info-column1">
    <span className="movie-name1">
        Book: <span>{bookInfo.title}</span>
    </span>
    <span className="movie-info1">
        Authors: <span>{bookInfo.authors}</span>
    </span>
    <span className="movie-info1">
        Publishing Date: <span>{bookInfo.publishedDate}</span>
    </span> 
    <span className="movie-info1">
        Publisher: <span>{bookInfo.publisher}</span>
    </span>
    <span className="movie-info1">
        Categories: <span>{bookInfo.categories}</span>
    </span>
    <span className="movie-info1">
        Page Count: <span>{bookInfo.pageCount}</span>
    </span>
    
    <span className="close"
    onClick={() => onBookSelect()}>X</span>
</div>
            </>
        ): (
        "Loading..."
      )} 
    </div>
  )
}

export default CardInfo;