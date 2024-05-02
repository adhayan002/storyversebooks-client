import { useState,useEffect } from "react"
import BookList from "./BookList"
import { UserContext } from "../UserContext";
import { useContext } from "react";

function FavoriteBooks() {
    const [books,setBooks]=useState([])
    const{search,setSearch}=useContext(UserContext)
    useEffect(()=>{
        if(search==''){
          fetch("https://svbooks-api.vercel.app/all-books").then(res=>res.json()).then(data=>setBooks(data))
        }else{
          fetch(`https://storyversebooks-api.vercel.app/books/${search}`)
          .then(res => res.json())
          .then(data => setBooks(data))
          .catch(error => console.error('Error fetching data:', error));
        }
    },[search])

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
