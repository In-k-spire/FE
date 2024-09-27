import BookLayout from "@/components/share/book";

const ReviewInfo = () => {
  return (
    <div className="flex flex-col rounded-md border border-gray-300 p-6 shadow-sm">
      <span className="text-2xl font-bold">떨림과 울림</span>
      <span className="mt-2 text-sm text-gray-400">김상욱/동아시아</span>
      <div className="mt-12 flex gap-8">
        <BookLayout image="" sizes="lg" />
        <span>
          떨림과 울림 떨림과 울림 떨림과 울림 떨림과 울림 떨림과 울림 떨림과
          울림 떨림과 울림 떨림과 울림 떨림과 울림 떨림과 울림 떨림과 울림
          떨림과 울림 떨림과 울림 떨림과 울림 떨림과 울림 떨림과 울림 떨림과
          울림 떨림과 울림
        </span>
      </div>
    </div>
  );
};

export default ReviewInfo;
