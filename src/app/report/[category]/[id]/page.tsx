"use client";
import BookLayout from "@/components/book/bookLayout";
import { ReportItem } from "@/components/report/reportItem";
import { useRandomBg } from "@/hooks/useRandomBg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MdOutlineCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import BtnLayout from "@/components/button";
import { InputLayout } from "@/components/input";
import { useModal } from "@/hooks/useModal";
import AddReport from "@/components/bookDetail/addReport";
const BookDetail = ({ params }: { params: { slug: string } }) => {
  const { bg } = useRandomBg();
  const router = useRouter();
  return (
    <motion.div
      key={"키(책 타이틀)"}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
      }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      className={`absolute left-0 top-0 h-full w-full  ${bg} `}
    >
      <div className="relative flex h-full w-full justify-center overflow-auto py-10 ">
        <div
          className="fixed right-16 top-10 flex h-6 cursor-pointer gap-2 text-white opacity-0  duration-300 lg:opacity-100"
          onClick={() => router.back()}
        >
          <MdOutlineCancel className="h-full w-full" />
          <span className="font-bold">CLOSE</span>
        </div>
        <motion.div
          key="content"
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 0.5,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          className="flex h-fit min-h-full w-[90%]  flex-col bg-white  p-8 shadow-2xl lg:w-1/2"
        >
          <span className="text-4xl font-light">떨림과 울림</span>
          <span className="text-grayscale/40">김상욱 / 동아시아</span>
          <div className="my-8 flex flex-col gap-4 md:flex-row">
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
          <div className="mb-2 flex justify-between"></div>
          <AddReport />
          <ReportItem
            title="독후감 1"
            date={new Date()}
            page="1"
            desc="독후감 본문"
          />
          <ReportItem
            title="독후감 1"
            date={new Date()}
            page="1"
            desc="독후감 본문"
          />
          <ReportItem
            title="독후감 1"
            date={new Date()}
            page="1"
            desc="독후감 본문"
          />
          <ReportItem
            title="독후감 1"
            date={new Date()}
            page="1"
            desc="독후감 본문"
          />
          <ReportItem
            title="독후감 1"
            date={new Date()}
            page="1"
            desc="독후감 본문"
          />
          <ReportItem
            title="독후감 1"
            date={new Date()}
            page="1"
            desc="독후감 본문"
          />
          <ReportItem
            title="독후감 1"
            date={new Date()}
            page="1"
            desc="독후감 본문"
          />
          <ReportItem
            title="독후감 1"
            date={new Date()}
            page="1"
            desc="독후감 본문"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
export default BookDetail;
