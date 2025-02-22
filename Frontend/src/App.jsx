import { Route,Routes } from "react-router-dom"
import Home from "./components/Home";
import AppBook from "./components/AppBook";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
import ShowBook from "./components/ShowBook";

function App() {
  
  return (
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/books/create" element={<AppBook/>}></Route>
    <Route path="books/edit/:id" element={<EditBook/>}></Route>
    <Route path="/books/delete/:id" element={<DeleteBook/>}></Route>
    <Route path="/books/:id" element={<ShowBook/>}></Route>

    </Routes> 
  );
}

export default App
