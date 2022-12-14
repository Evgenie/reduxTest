import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TRootState } from "../store/types";

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
