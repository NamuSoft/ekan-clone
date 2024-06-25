import { CustomCursorComponent } from "~/components/Components/CustomCursorComponent/CustomCursorComponent";
import { LinesComponent } from "~/components/Components/LinesComponent/LinesComponent";
import { LoaderComponent } from "~/components/Components/LoaderComponent/LoaderComponent";
import { ProgressComponent } from "~/components/Components/ProgressComponent/ProgressComponent";
import { SideFixedButton } from "~/components/Components/SideFixedButton/SideFixedButton";

type Props = {
  linesComponentProps: React.ComponentProps<typeof LinesComponent>;
};

export function UtilityModules(props: Props) {
  return (
    <>
      <LoaderComponent />
      <CustomCursorComponent />
      <LinesComponent {...props.linesComponentProps} />
      <ProgressComponent />
      <SideFixedButton />
    </>
  );
}
