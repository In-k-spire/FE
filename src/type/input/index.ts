import { CommonProps } from "../common";

export interface InputProps extends CommonProps {
  placeholder?: string;
  shadow?: string;
  onChange?: (v: any) => void;
}
