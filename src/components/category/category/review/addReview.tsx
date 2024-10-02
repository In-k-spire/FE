import BtnLayout from "@/components/share/button";
import { InputLayout } from "@/components/share/input";
import { useBookReviewMutation } from "@/service/book/mutations";
import { useBookReview } from "@/service/book/queries";
import { BookReviewType } from "@/type/book";
import { useState } from "react";

const AddReview = ({ id }: { id: number }) => {
  const [review, setReview] = useState<BookReviewType>({
    oneLineReview: "",
    content: "",
  });
  const { reviewMutate } = useBookReviewMutation(id);
  return (
    <div className="flex flex-col gap-6">
      <span className=" text-2xl font-bold">독후감 작성</span>
      <InputLayout
        onChange={(e) =>
          setReview({ ...review, oneLineReview: e.target.value })
        }
        sizes="full"
        className=" rounded-md border border-gray-300 bg-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        placeholder="한줄평을 입력해주세요"
      />
      <textarea
        onChange={(e) => setReview({ ...review, content: e.target.value })}
        placeholder="독후감을 작성해주세요"
        className="h-48 rounded-md border border-gray-300 bg-white p-4 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      />
      <InputLayout
        sizes="full"
        className=" rounded-md border border-gray-300 bg-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        placeholder="읽은 페이지 (예: 1p ~ 50p)"
      />
      <BtnLayout
        onClick={() => reviewMutate(review)}
        sizes="sm"
        className="w-fit rounded-md bg-primary text-white hover:opacity-80"
      >
        독후감 작성
      </BtnLayout>
    </div>
  );
};

export default AddReview;
