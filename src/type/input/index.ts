import { InputHTMLAttributes } from "react";
import { CommonProps } from "../common";

export interface InputProps
  extends CommonProps,
    InputHTMLAttributes<HTMLInputElement> {}
