import React from "react";

const Book = ({image,title,author}) => {
    return (
        <>
        <img src="" alt={image} />
        <h2>{title}</h2>
        <h3>{author} </h3>
        </>
      );
}

function Book() {
  const books = [
    {
      title:'Intresting facts for curious minds',
      author:'Jordan Moore',
      image: 'https://th.bing.com/th/id/R.2822361b9f2b7ccdaddcb04f8bf0306f?rik=Oz0tGXEYOtRQcw&pid=ImgRaw&r=0',

    },

    {
      title:'Atomic habits',
      author:'James Clear',
      image:'https://th.bing.com/th/id/R.e3461d535951d8441d1517d2c674c445?rik=V4TPF%2bSGxHT75g&pid=ImgRaw&r=0'
    },

    {
      title:'Fairy tale',
      author:'Stephan king',
      image:'https://th.bing.com/th/id/OIP.EiXC8jOJQnL1bkoQrFRetgHaLZ?rs=1&pid=ImgDetMain',

    }


  ];

  return(
    <div className="book-list">
      {books.map((book, index) =>( 
        <Book key={index} {...book}/>
      )
      )}
    </div>
  );
}
 
export default Book;