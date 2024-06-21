import { ThemeSwitchComponent } from "~/components/Components/ThemeSwitchComponent/ThemeSwitchComponent";

type Props = {
  preferredTheme: "light" | "dark";
};

export const MainContentModules = ({ preferredTheme }: Props) => {
  return (
    <div className='flex flex-col gap-[4.75rem] text-center text-black dark:text-white'>
      <ThemeSwitchComponent preferredTheme={preferredTheme} />
    </div>
  );
};
