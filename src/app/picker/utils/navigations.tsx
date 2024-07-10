import createContextHooks from "utils/createContextHooks";

export type Screen = "main" | "book" | "verse" | "chapter";

export const {
  Provider: NavigationProvider,
  useValue: useCurrentScreen,
  useSetValue: useNavigate,
} = createContextHooks<Screen>("main");

const screenOrder: Screen[] = ["book", "chapter", "verse"];

export function useNavigateForward() {
  const navigate = useNavigate();
  return (current: Screen) => {
    const currentIndex = screenOrder.indexOf(current);
    if (currentIndex < 0) return;
    navigate(screenOrder[currentIndex + 1]);
  };
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
