import { BookReviewType } from "@/type/book";
import ReviewItem from "./reviewItem";
import { useReviewEdit, useReviewRemove } from "@/service/book/mutations";
import { useBookReviews } from "@/service/book/queries";
const ReviewList = ({ id }: { id: number }) => {
  const { review } = useBookReviews(id);
  const { remove } = useReviewRemove(id);
  const { edit } = useReviewEdit(id);
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
