import createContextHooks from "utils/createContextHooks";

type Screen = "main" | "book" | "verse" | "chapter";

export const {
  Provider: NavigationProvider,
  useValue: useCurrentScreen,
  useSetValue: useNavigate,
} = createContextHooks<Screen>("main");

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
