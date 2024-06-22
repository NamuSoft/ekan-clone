import { MainHeroComponent } from "~/components/Components/MainHeroComponent/MainHeroComponent";

type Props = {
  preferredTheme: "light" | "dark";
};

export const MainContentModules = ({ preferredTheme }: Props) => {
  return (
    <div>
      <MainHeroComponent />
    </div>
  );
};
