import { useState,useEffect } from "react"
import BookList from "./BookList"

function FavoriteBooks() {
    const [books,setBooks]=useState([])

    useEffect(()=>{
        fetch("https://storyversebooks-api.onrender.com/all-books").then(res=>res.json()).then(data=>setBooks(data))
    },[])

  return (
    <div className="mt-12 ">
        <div className="flex flex-wrap">
      {books.map((book, index) => (
        <BookList key={index} data={book} />
      ))}
    </div>
    </div>
  )
}

export default FavoriteBooks