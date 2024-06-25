type Props = {
  onClick: () => void;
};

export function NavContactToggleComponent(props: Props) {
  return (
    <div>
      <div
        className='relative z-[1] cursor-pointer text-[3rem] lg:hidden'
        onClick={props.onClick}
      >
        <span className="inline-block font-[normal] normal-case not-italic leading-none before:content-['\2261']" />
      </div>
      <div className='hidden lg:block'>
        <a href='mailto:abc@example.com'>
          <span className='text-xs uppercase tracking-[2px]'>
            Gavi@website.com
          </span>
        </a>
      </div>
    </div>
  );
}
