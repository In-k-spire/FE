import BtnLayout from "@/components/share/button";
import { InputLayout } from "@/components/share/input";
import Menu from "@/components/share/menu";
import { BookReviewType } from "@/type/book";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface IReviewItem {
  review: BookReviewType;
  id: number;
  remove: (v?: number) => void;
  edit: (v: { id?: number; review: BookReviewType }) => void;
}
const ReviewItem = ({ review, id, remove, edit }: IReviewItem) => {
  const [onEdit, setOnEdit] = useState(false);
  const [newReview, setNewReview] = useState({
    oneLineReview: review.oneLineReview,
    startPage: review.startPage,
    endPage: review.endPage,
    content: review.content,
  });
  const [activeId, setActiveId] = useState(-1);

  const { content, oneLineReview, createdAt, startPage, endPage, reviewId } =
    review;
  const handleActiveId = (id: number) => {
    if (activeId == id && !onEdit) setActiveId(-1);
    else setActiveId(id);
  };

  return (
    <div className="flex flex-col">
      <div
        onClick={() => handleActiveId(id)}
        className="group flex cursor-pointer items-center justify-between gap-4  py-4"
      >
        {onEdit ? (
          <InputLayout
            placeholder="한줄평"
            onChange={(e) =>
              setNewReview({ ...newReview, oneLineReview: e.target.value })
            }
            sizes="full"
            value={newReview.oneLineReview}
            className="rounded-md border border-gray-300 bg-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
        ) : (
          <span className="group-hover:underline-primary text-lg font-semibold  group-hover:underline group-hover:underline-offset-4">
            {oneLineReview}
          </span>
        )}
        <div className="flex items-center gap-2">
          {onEdit ? (
            <div className="flex items-center gap-4">
              <InputLayout
                onChange={(e) =>
                  setNewReview({
                    ...newReview,
                    startPage: e.target.value,
                  })
                }
                value={newReview.startPage}
                type="number"
                className=" rounded-md border border-gray-300 bg-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                placeholder="시작 페이지"
              />
              ~
              <InputLayout
                onChange={(e) =>
                  setNewReview({
                    ...newReview,
                    endPage: e.target.value,
                  })
                }
                value={newReview.endPage}
                type="number"
                className=" rounded-md border border-gray-300 bg-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                placeholder="마지막 페이지"
              />
            </div>
          ) : (
            <span className="group-hover:underline-primary text-sm font-semibold text-gray-400 group-hover:underline group-hover:underline-offset-4">
              {new Date(createdAt || "").toLocaleDateString()} ({startPage}p ~{" "}
              {endPage}p)
            </span>
          )}

          <Menu
            onEdit={() => {
              setActiveId(id);
              setOnEdit(true);
            }}
            onRemove={() => remove(reviewId)}
          />
          <RiArrowDropDownLine
            size="2rem"
            className={`${
              activeId == id ? "rotate-180" : "rotate-0"
            } duration-200`}
          />
        </div>
      </div>
      {onEdit ? (
        <textarea
          onChange={(e) =>
            setNewReview({ ...newReview, content: e.target.value })
          }
          value={newReview.content}
          placeholder="독후감을 작성해주세요"
          className="h-48 rounded-md border border-gray-300 bg-white p-4 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        />
      ) : (
        <div
          className={`${
            activeId == id ? "h-32 py-2" : "h-0 py-0"
          } overflow-hidden border-b border-gray-300 duration-300`}
        >
          {content}
        </div>
      )}
      {onEdit ? (
        <div className="mt-4 flex justify-end gap-4">
          <BtnLayout
            onClick={() => setOnEdit(false)}
            className=" rounded-md border border-danger text-danger duration-200 hover:bg-danger hover:text-white"
          >
            취소
          </BtnLayout>
          <BtnLayout
            onClick={() => {
              edit({ id: reviewId, review: newReview });
              setOnEdit(false);
            }}
            className="rounded-md bg-primary text-white duration-200 hover:bg-opacity-80"
          >
            저장
          </BtnLayout>
        </div>
      ) : null}
    </div>
  );
};

export default ReviewItem;
