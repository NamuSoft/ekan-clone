import { ToggleAtom } from "~/components/Atoms/ToggleAtom/ToggleAtom";

type Props = {
  onClick: () => void;
};

export function NavContactToggleComponent(props: Props) {
  return (
    <div>
      <div className='lg:hidden'>
        <ToggleAtom onClick={props.onClick} />
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
