type Props = {
  numberOfLines: number;
};

export function LinesAtom({ numberOfLines }: Props) {
  return (
    <div className='pointer-events-none fixed left-0 top-0 flex h-screen w-full bg-[--secondary-color]'>
      {Array.from({ length: numberOfLines }).map((_, index) => {
        return (
          <span
            key={index}
            style={{ borderLeftStyle: "dashed", borderRightStyle: "solid" }}
            className='border-x-[rgba(0, 0, 0, 0.05)] mx-[5%] my-0 h-full w-[10%] border-l border-r dark:border-x-[rgba(255,255,255,0.05)]'
          />
        );
      })}
    </div>
  );
}
