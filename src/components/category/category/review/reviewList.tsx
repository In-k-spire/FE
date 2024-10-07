import { BookReviewType } from "@/type/book";
import ReviewItem from "./reviewItem";
import { useReviews } from "@/service/book/queries";
import { useEditReview, useRemoveReview } from "@/service/book/mutations";
const ReviewList = ({ id }: { id: number }) => {
  const { review } = useReviews(id);
  const { remove } = useRemoveReview(id);
  const { edit } = useEditReview(id);
  const ListItem = review?.map((item: BookReviewType, id: number) => (
    <ReviewItem edit={edit} id={id} key={id} remove={remove} review={item} />
  ));
  return (
    <div className="flex flex-col gap-2">
      <span className="text-2xl font-bold">독후감</span>
      {ListItem}
    </div>
  );
};

export default ReviewList;
