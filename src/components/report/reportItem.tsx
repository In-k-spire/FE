import { ReportType } from "@/type/report";
import { useState } from "react";

export const ReportItem = ({title, date, page, desc} : ReportType ) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
    return (
      <>
        <div
          className="h-16 w-full rounded-md border border-grayscale/30"
          onClick={() => setIsOpen((prev) => !prev)}
        ></div>
        <div
          className={`mt-2 w-full overflow-hidden rounded-md  duration-300   ${
            isOpen ? "h-32 border border-grayscale/30" : "h-0 border-none"
          }`}
        >
          HIHI
        </div>
      </>
    );
    
}