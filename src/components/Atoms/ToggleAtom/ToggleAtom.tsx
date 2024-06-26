type Props = {
  onClick: () => void;
};

export function ToggleAtom(props: Props) {
  return (
    <div
      className='relative z-[1] cursor-pointer text-[3rem]'
      onClick={props.onClick}
    >
      <span className="inline-block font-[normal] normal-case not-italic leading-none before:content-['\2261']" />
    </div>
  );
}
