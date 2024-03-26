
import { CommonProps } from "../common";

export interface InputProps extends CommonProps {
    placeholder? : string;
    onChange? : (v : any) => void;    
}