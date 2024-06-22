import { MainTopNavigationComponent } from "~/components/Components/MainTopNavigationComponent/MainTopNavigationComponent";

type Props = {
  preferredTheme: "light" | "dark";
};

export const MainContentModules = ({ preferredTheme }: Props) => {
  return (
    <div>
      <MainTopNavigationComponent />
    </div>
  );
};
