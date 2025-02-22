import axios from "axios";  //for hitting the server API call
import { useEffect, useState } from "react";
import { SERVER_URL } from "../Server_URL";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import BooksCard from "./home/BooksCard";
import BooksTable from "./home/BooksTable";



const Home = () => {
    const [books,setBooks]=useState([]); //array object for books
    const [loading,setLoading]=useState(false); //to show loading until data is fetched from server
    const [showBooksCard, setShowBooksCard] = useState(false);
    const [showBooksTable, setShowBookTable] = useState(false);
    
    const fetchBook=async()=>{
        try {
            setLoading(true);
            const resp=await axios.get(`${SERVER_URL}/book`);
            console.log(resp.data);
            setBooks(resp.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchBook();
    },[])
    const toggleBooksCard = () => {
      setShowBooksCard(!showBooksCard);
  };
  const toggleBooksTable = () => {
    setShowBookTable(!showBooksTable);
};
  
    
    
  return (
    <>
    <h2 className="text-3xl bg-sky-700 text-white p-4 text-center"> Welcome to Book Store</h2>
    <div className="p-4">
         <Link to="/books/create">
          <MdOutlineAddBox className="text-4xl text-blue-800" />
        </Link>
        <button onClick={toggleBooksCard} className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Card
                </button>
                {showBooksCard && <BooksCard books={books} />} 
                <button onClick={toggleBooksTable} className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Table
                </button>

                {showBooksTable && <BooksTable books={books} />}
       

    </div>
    </>
  )
}
export default Home