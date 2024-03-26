import BookLayout from "../book/bookLayout";
import { Shelf } from "../share/shelf";
export const RecentItem = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between p-12">
        <div className="flex flex-col">
          <span className="text-shelfTextColor text-[60px] font-bold leading-[1.1]">
            Book of<br></br> the week
          </span>
          <span className="mt-8 text-lg text-grayscale/40">
            원하는 카테고리가 있으신가요?
          </span>
          <input className="mt-2 h-[4rem] w-[20rem] rounded-xl p-4 text-lg shadow-md outline-none" />
        </div>
        <div className="flex items-center gap-24">
          <BookLayout
            image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg"

            size = "xl"
          />
          <BookLayout
            image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg"

           
          />
          <BookLayout
            image="https://shopping-phinf.pstatic.net/main_3248059/32480599469.20230927071226.jpg"
            
            
          />
        </div>
      </div>
      <Shelf />
    </div>
  );
};
