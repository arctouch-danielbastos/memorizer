import createContextHooks from "utils/createContextHooks";

type Screen = "main" | "book" | "verse" | "chapter";

export const {
  Provider: NavigationProvider,
  useValue: useCurrentScreen,
  useSetValue: useNavigate,
} = createContextHooks<Screen>("main");

const screenOrder: Screen[] = ["book", "chapter", "verse"];
export function useNavigateForward({ current }: { current: Screen }) {
  const navigate = useNavigate();
  const currentIndex = screenOrder.indexOf(current);
  if (currentIndex < 0) return;
  navigate(screenOrder[currentIndex + 1]);
}

export function withNavigation<T extends {}>(
  Component: React.FunctionComponent<T>
) {
  return function WithNavigation(props: T) {
    return (
      <NavigationProvider>
        <Component {...props} />
      </NavigationProvider>
    );
  };
}
