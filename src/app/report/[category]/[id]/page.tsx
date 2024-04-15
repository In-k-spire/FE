"use client";
import BookLayout from "@/components/book/bookLayout";
import { ReportItem } from "@/components/report/reportItem";
import { useRandomBg } from "@/hooks/useRandomBg";
import { motion, AnimatePresence } from "framer-motion";

const BookDetail = ({
  params
}: {
  params: { slug: string };
}) => {
  const { bg } = useRandomBg();
  console.log(params)
  return (
    <motion.div
      key={"키(책 타이틀)"}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`absolute left-0 top-0 h-full w-full ${bg} `}
    >
      <div className="relative flex h-full w-full justify-center py-10 ">
        <div className="absolute right-16 top-10"></div>
        <div className="flex w-[45rem] flex-col bg-white p-8 shadow-2xl">
          <span className="text-4xl font-light">떨림과 울림</span>
          <span className="text-grayscale/40">김상욱 / 동아시아</span>
          <div className="mt-8 flex gap-4">
            <BookLayout
              image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg"
              size="lg"
            />
            <div className="flex-1">
              <span>
                떨림과 울림 떨림과 울림 떨림과 울림 떨림과 울림 떨림과 울림
                떨림과 울림 떨림과 울림 떨림과 울림 떨림과 울림 떨림과 울림
                떨림과 울림 떨림과 울림 떨림과 울림 떨림과 울림 떨림과 울림
                떨림과 울림 떨림과 울림
              </span>
              <div></div>
            </div>
          </div>
          <ReportItem
            title="독후감 1"
            date={new Date()}
            page="1"
            desc="독후감 본문"
          />
        </div>
      </div>
    </motion.div>
  );
};
export default BookDetail;
