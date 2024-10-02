"use client";
import AddReview from "@/components/category/category/review/addReview";
import ReviewInfo from "@/components/category/category/review/reviewInfo";
import ReviewList from "@/components/category/category/review/reviewList";
import { useBookQuery } from "@/service/book/queries";

const BookDetail = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const { book, isLoading } = useBookQuery(id);
  console.log(book);
  return (
    <div className="flex flex-col gap-8">
      <ReviewInfo book={book} />
      <AddReview id={id} />
      <ReviewList id={id} />
    </div>
  );
};
export default BookDetail;
