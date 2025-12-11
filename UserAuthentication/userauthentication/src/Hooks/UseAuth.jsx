
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export function UseAuth(){
    return(useContext(AuthContext));
}