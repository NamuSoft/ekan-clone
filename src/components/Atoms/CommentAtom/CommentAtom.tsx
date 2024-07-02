import clsx from "clsx";
import Image from "next/image";

type Props = {
  imageUrl: string;
  commentorName: string;
  comment: string;
  className?: string;
};

export function CommentAtom(props: Props) {
  return (
    <div
      className={clsx(
        "relative mb-8 flex items-center gap-3 pb-8",
        props.className
      )}
    >
      <div className='flex flex-col gap-4 md:flex-row'>
        <div className='h-16 w-16 overflow-hidden rounded-[50%] leading-none'>
          <Image
            src={props.imageUrl}
            alt=''
            width={60}
            height={60}
            objectFit='cover'
            objectPosition='center'
            className='h-full w-full object-cover object-center'
          />
        </div>

        <div className='flow flex-1'>
          <h4>{props.commentorName}</h4>
          <p>{props.comment}</p>
        </div>
      </div>

      <div>
        <a
          href='#'
          className='rounded-[1.875rem] border border-solid border-[--border3] px-5 py-2 text-sm transition-all duration-[0.4s] hover:bg-[--primary]'
        >
          <span>Reply</span>
        </a>
      </div>
    </div>
  );
}
