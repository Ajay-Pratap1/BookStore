import { Link } from "react-router-dom"
import { AiFillBackward } from "react-icons/ai";
export const Backbutton = ({destination='/'}) => {
  return (
    <div>
        <Link to={destination}>
            <AiFillBackward className="text-2xl"></AiFillBackward>
        </Link>
    </div>
  )
}
