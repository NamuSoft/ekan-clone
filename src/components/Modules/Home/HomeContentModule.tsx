import { DarkLightPreviewComponent } from "~/components/Components/DarkLightPreviewComponent/DarkLightPreviewComponent";

type Props = {
  darkLightPreviewComponentProps: React.ComponentProps<
    typeof DarkLightPreviewComponent
  >;
};

export const HomeContentModule = (props: Props) => {
  return (
    <div className='flex flex-col gap-[4.75rem] text-center text-[--text]'>
      <div>
        <h1 className='mb-[1rem] text-[4.375rem]'>GAVI</h1>
        <h4 className='text-3xl'>
          Creative Personal
          <span className='ml-[0.25rem] text-[--primary]'>Portfolio</span>
          Template
        </h4>
      </div>
      <DarkLightPreviewComponent {...props.darkLightPreviewComponentProps} />
    </div>
  );
};
