import { ButtonHTMLAttributes } from "react";
import { CommonProps } from "../common";

export default interface BtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    CommonProps {
  filled?: "ghost" | "filled";
  rounded?: string;
  color: string;
  href?: string;
}
