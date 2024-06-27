import clsx from "clsx";
import { LineAtom } from "~/components/Atoms/LineAtom/LineAtom";

type Props = {
  numberOfLines: number;
  className?: string;
};

export function LinesComponent(props: Props) {
  return (
    <div
      className={clsx(
        "pointer-events-none fixed left-0 top-0 flex h-screen w-full",
        props.className
      )}
    >
      {Array.from({ length: props.numberOfLines }).map((_, index) => {
        return <LineAtom key={index} />;
      })}
    </div>
  );
}
