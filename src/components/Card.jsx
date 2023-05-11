import './Card.css';


function Card({book,onBookSelect}) {
  let src;
  if(book.volumeInfo?.imageLinks){
    src=book.volumeInfo.imageLinks.thumbnail;
  }
  
  return (
    <div 

      className="card"
      onClick={() => {
        onBookSelect(book.id);
        window.scrollTo({ top: 250, behavior: "smooth" });
      }}
      
    >
    
        <img 
        src={src} 
        alt={book.volumeInfo.title} className='cover-image'/>

        <span className='movie-name'>{book.volumeInfo.title}</span>

        <div className="info-column">
            <span className="movie-info">Authors: {book.volumeInfo.authors}</span>
        </div>
    </div>
  )
}

export default Card