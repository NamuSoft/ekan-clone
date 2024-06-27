import { CustomCursorComponent } from "~/components/Components/CustomCursorComponent/CustomCursorComponent";
import { LinesComponent } from "~/components/Components/LinesComponent/LinesComponent";
import { LoaderComponent } from "~/components/Components/LoaderComponent/LoaderComponent";
import { ProgressComponent } from "~/components/Components/ProgressComponent/ProgressComponent";

type Props = {
  linesComponentProps: React.ComponentProps<typeof LinesComponent>;
};

export function HomeUtilityModules(props: Props) {
  return (
    <>
      <LoaderComponent />
      <CustomCursorComponent />
      <LinesComponent {...props.linesComponentProps} />
      <ProgressComponent />
    </>
  );
}
