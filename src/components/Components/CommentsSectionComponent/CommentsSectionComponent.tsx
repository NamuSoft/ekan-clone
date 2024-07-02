import { CommentAtom } from "~/components/Atoms/CommentAtom/CommentAtom";

import styles from "./CommentsSectionComponent.module.css";

type Props = {
  commentAtomProps: Array<React.ComponentProps<typeof CommentAtom>>;
};

export function CommentsSectionComponent(props: Props) {
  return (
    <div className='py-24'>
      <div className='mb-14'>
        <h3>Comments (2)</h3>
      </div>
      <div className={styles.flowRight}>
        {props.commentAtomProps.map((comment, index) => (
          <CommentAtom
            {...comment}
            key={comment.comment}
            className={
              index !== props.commentAtomProps.length - 1
                ? "border-b border-b-[--border2]"
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
