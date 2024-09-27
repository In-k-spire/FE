"use client";
import AddReview from "@/components/report/category/review/addReview";
import ReviewInfo from "@/components/report/category/review/reviewInfo";
import ReviewList from "@/components/report/category/review/reviewList";
import useBook from "@/hooks/useBook";

const BookDetail = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const { book } = useBook(id);
  return (
    <div className="flex flex-col gap-8">
      <ReviewInfo />
      <AddReview />
      <ReviewList />
    </div>
  );
};
export default BookDetail;
