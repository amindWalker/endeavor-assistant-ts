// node_modules imports
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// local imports
import { AppDispatch, RootState, } from "./store";

// aliases for TypeScript knows about redux hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
