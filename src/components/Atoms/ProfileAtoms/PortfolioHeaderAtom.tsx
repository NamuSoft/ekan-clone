import Link from "next/link";

export function PortfolioHeaderAtom() {
  return (
    <div className='flex flex-col justify-between gap-8 lg:flex-row'>
      <div>
        <h6 className='mb-4 uppercase tracking-wide opacity-70'>
          Our Portfolio
        </h6>
        <h3>
          Look at my work &amp; <br /> give us{" "}
          <span className='text-[--primary]'>your feedback</span>
        </h3>
      </div>
      <div className='lg:self-center'>
        <Link href=''>View All Works</Link>
      </div>
    </div>
  );
}
