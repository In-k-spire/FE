import { ButtonHTMLAttributes } from "react";

export default interface BtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
