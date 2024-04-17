import { Routes,Route } from "react-router-dom"
import Home from "./home/Home"
import Layout from "./Layout/Layout"
import About from "./about/About"
import Shop from "./shop/Shop"
import Blog from "./components/Blog"
import Book from "./book/Book"
import Sell from "./sell/Sell"
import Error from "./book/Error"
import Login from "./Login/Login"
import Register from "../Register/Register"
import {UserContextProvider} from "./UserContext"
import EditBook from "./book/EditBook"


export default function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="sell" element={<Sell/>}/>
        <Route path="book/:id" element={<Book/>}/>
        <Route path="editbook/:id" element={<EditBook/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
    </UserContextProvider>
  )
}