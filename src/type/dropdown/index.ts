import { ReactNode } from "react";
import { CommonProps } from "../common";

export interface DropDownProps extends CommonProps {
  color: string;
  children: ReactNode;
  title: string;
}
