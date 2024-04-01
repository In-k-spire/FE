import { FaRegStar } from "react-icons/fa";
export const Rating = ({star} : {star : number}) => {
    const Star = [1,2,3,4,5].map((idx) => <FaRegStar />)
    return <div className="flex gap-1">{Star}</div>
}