import Image from "next/image";

type Props = {
  serial: number;
  year: number;
  imageUrl: string;
  title: string;
  accolade: string;
};

export function AwardAtom(props: Props) {
  return (
    <div className='h-full rounded-xl bg-[--neutral] p-10'>
      <div className='flex justify-between'>
        <div>
          <span>{props.serial}</span>
        </div>
        <div>
          <span>{props.year}</span>
        </div>
      </div>

      <div className='mb-8 mt-20 w-24'>
        <Image
          src={props.imageUrl}
          alt=''
          width={100}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <h5>{props.title}</h5>
      <span className='mt-3 uppercase tracking-wide text-[--primary]'>
        {props.accolade}
      </span>
    </div>
  );
}
