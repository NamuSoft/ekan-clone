import { LineAtom } from "~/components/Atoms/LineAtom/LineAtom";

type Props = {
  numberOfLines: number;
};

export function LinesComponent({ numberOfLines }: Props) {
  return (
    <div className='pointer-events-none fixed left-0 top-0 flex h-screen w-full bg-[--background]'>
      {Array.from({ length: numberOfLines }).map((_, index) => {
        return <LineAtom key={index} />;
      })}
    </div>
  );
}
