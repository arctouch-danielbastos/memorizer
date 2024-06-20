import nullthrows from "nullthrows";
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type Provider,
  type SetStateAction,
} from "react";

type ContextValue<T> = [T, Dispatch<SetStateAction<T>>];

export default function createContextHooks<T>(initialValue: T) {
  const Context = createContext<ContextValue<T> | null>(null);
  return {
    Provider({ children }: { children: React.ReactNode }) {
      const [state, setState] = useState(initialValue);
      return (
        <Context.Provider value={[state, setState]}>
          {children}
        </Context.Provider>
      );
    },
    useValue() {
      const [value] = nullthrows(useContext(Context));
      return value;
    },
    useSetValue() {
      const [, setValue] = nullthrows(useContext(Context));
      return setValue;
    },
  };
}
