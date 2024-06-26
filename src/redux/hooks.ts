import { rootReducer } from "./reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as TasksActionCreator from "./actionCreators";

type RootState = ReturnType<typeof rootReducer>;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...TasksActionCreator,
    },
    dispatch,
  );
};

export { useAppSelector, useAppActions };
