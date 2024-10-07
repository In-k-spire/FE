"use client";
import AddReview from "@/components/category/category/review/addReview";
import ReviewInfo from "@/components/category/category/review/reviewInfo";
import ReviewList from "@/components/category/category/review/reviewList";
import { useBook } from "@/service/book/queries";

const BookDetail = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const { book, isLoading } = useBook(id);
  return (
    <div className="flex flex-col gap-8">
      <ReviewInfo book={book} />
      <AddReview id={id} />
      <ReviewList id={id} />
    </div>
  );
};
export default BookDetail;
