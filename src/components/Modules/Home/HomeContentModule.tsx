import { DarkLightPreviewComponent } from "~/components/Components/DarkLightPreviewComponent/DarkLightPreviewComponent";
import { ThemeSwitchComponent } from "~/components/Components/ThemeSwitchComponent/ThemeSwitchComponent";

type Props = {
  darkLightProps: Array<{
    imageUrl: string;
    title: string;
    route: string;
  }>;
  preferredTheme: "light" | "dark";
};

export const HomeContentModule = ({
  darkLightProps,
  preferredTheme,
}: Props) => {
  return (
    <div className='flex flex-col gap-[4.75rem] text-center text-black dark:text-white'>
      <div>
        <h1 className='mb-[1rem] text-[4.375rem]'>GAVI</h1>
        <h4 className='text-3xl'>
          Creative Personal
          <span className='ml-[0.25rem] text-main dark:text-mainDark'>
            Portfolio
          </span>
          Template
        </h4>
      </div>

      <div className='flex flex-col gap-[1.5rem] lg:flex-row'>
        {darkLightProps.map((content) => (
          <DarkLightPreviewComponent key={content.title} {...content} />
        ))}
      </div>

      <ThemeSwitchComponent preferredTheme={preferredTheme} />
    </div>
  );
};
