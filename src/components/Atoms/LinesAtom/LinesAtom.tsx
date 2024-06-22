type Props = {
  numberOfLines: number;
};

export function LinesAtom({ numberOfLines }: Props) {
  return (
    <div className='pointer-events-none fixed left-0 top-0 flex h-screen w-full bg-[--background]'>
      {Array.from({ length: numberOfLines }).map((_, index) => {
        return (
          <span
            key={index}
            style={{ borderLeftStyle: "dashed", borderRightStyle: "solid" }}
            className='mx-[5%] my-0 h-full w-[10%] border-l border-r border-x-[--border]'
          />
        );
      })}
    </div>
  );
}
