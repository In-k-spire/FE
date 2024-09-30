import { ReactNode } from "react";
import { CommonProps } from "../common";

export interface DropDownProps extends CommonProps {
  children: ReactNode;
  title: string;
}
