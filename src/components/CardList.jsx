import Card from './Card';
import './CardList.css';


function CardList({bookList,onBookSelect}) {
  return (
    <div className='card-list'>
                 {bookList?.length ? (
          bookList.map((book, index) => (
            <Card
              key={index}
              book={book}
              onBookSelect={onBookSelect}
            />
          ))
        ) : (
            <div>Search something to display</div>
        )}
            </div>
  )
}

export default CardList;