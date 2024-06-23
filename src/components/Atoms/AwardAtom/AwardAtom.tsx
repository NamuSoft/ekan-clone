import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  awards: Array<{
    serial: number;
    year: number;
    imageUrl: string;
    title: string;
    accolade: string;
  }>;
};

export function AwardAtom({ awards }: Props) {
  return (
    <div className='mt-24 grid gap-4 lg:auto-cols-[1fr] lg:grid-flow-col'>
      {awards.map((award) => {
        const { serial, year, imageUrl, title, accolade } = award;

        return (
          <motion.div
            key={serial}
            className='h-full rounded-xl bg-[--neutral] p-10'
            initial={{ opacity: 0, transform: "translate3d(0, 100%, 0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
            transition={{ ease: "linear", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className='flex justify-between'>
              <div>
                <span>{serial}</span>
              </div>
              <div className=''>
                <span>{year}</span>
              </div>
            </div>

            <div className='mb-8 mt-20 w-24'>
              <Image
                src={imageUrl}
                alt=''
                width={100}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <h5>{title}</h5>
            <span className='mt-3 uppercase tracking-wide text-[--primary]'>
              {accolade}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
