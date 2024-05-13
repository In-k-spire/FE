import { CommonProps } from "../common";

export interface InputProps extends CommonProps {
  placeholder?: string;
  shadow?: string;
  rounded?: string;
  onChange?: (v: any) => void;
}
