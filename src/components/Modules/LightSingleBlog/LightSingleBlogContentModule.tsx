import Image from "next/image";
import Link from "next/link";

import { AddCommentComponent } from "~/components/Components/AddCommentComponent/AddCommentComponent";
import { BlogsComponent } from "~/components/Components/BlogsComponent/BlogsComponent";
import { CommentsSectionComponent } from "~/components/Components/CommentsSectionComponent/CommentsSectionComponent";
import { SocialIconsComponent } from "~/components/Components/SocialIconsComponent/SocialIconsComponent";
import { SVGAtom } from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  socialIconsComponentProps: React.ComponentProps<typeof SocialIconsComponent>;
  commentsSectionComponentProps: React.ComponentProps<
    typeof CommentsSectionComponent
  >;
  addCommentComponentProps: React.ComponentProps<typeof AddCommentComponent>;
  blogsComponentProps: React.ComponentProps<typeof BlogsComponent>;
};

export const LightSingleBlogContentModule = (props: Props) => {
  return (
    <div className='grid gap-10 rounded-[1rem] bg-[--background3] px-4 py-24 lg:px-24'>
      <div>
        <div className='flow text-center'>
          <div>
            <Link
              className='mx-0.5 my-0 rounded-[1.875rem] border border-solid border-[--border3] bg-[--background6] px-6 py-2 text-xs uppercase tracking-wide backdrop-blur-sm'
              href='#'
            >
              <span>Web Design</span>
            </Link>
            <Link
              className='mx-0.5 my-0 rounded-[1.875rem] border border-solid border-[--border3] bg-[--background6] px-6 py-2 text-xs uppercase tracking-wide backdrop-blur-sm'
              href='#'
            >
              <span>Envato</span>
            </Link>
          </div>
          <h1>Network of wormholes colonies extraordinary claims require.</h1>
          <p className='uppercase tracking-wide'>6 , August 2022 - By Admin</p>
        </div>

        <div className='mb-20 mt-10'>
          <Image
            src='/assets/m.jpg'
            alt=''
            className='h-full w-full rounded-md'
            width={1000}
            height={0}
          />
        </div>
      </div>

      <div className='px-10'>
        <div className='flow'>
          <div className='flow flex items-center'>
            <span className='hidden md:mr-3 md:inline-block md:text-6xl md:font-medium md:text-[--primary]'>
              A
            </span>
            <p>
              new report said earlier this week that Apple is working on a brand
              new laptop. A trusted Apple insider with a proven track record
              confirmed that Apple is working on the larger MacBook Air.
            </p>
          </div>
          <p>
            new report said earlier this week that Apple is working on a brand
            new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a
            first for the Air series. A trusted Apple insider with a proven
            track record confirmed that Apple is working on the larger MacBook
            Air.
          </p>
          <p>
            However, Apple might not include it in the Air series when it
            launches it. As for the notebook’s release date, the 15-inch MacBook
            isn’t coming soon. It’ll get a late 2023 release at best, according
            to the new claims.
          </p>
        </div>

        <div className='flow mt-8'>
          <h3 className='fw-500'>What sizes do MacBook Airs come in?</h3>
          <p>
            Apple currently sells only one MacBook Air size. The laptop comes in
            a 13-inch version that matches the pre-2021 13-inch MacBook Pro
            size. Previously, Apple sold an 11-inch MacBook Air, but the company
            discontinued that model in 2017.
          </p>
        </div>

        <div className='mt-12 flex flex-col items-center border border-[--border2] px-4 py-8 md:flex-row md:gap-4 lg:p-10'>
          <span className='text-9xl leading-[3rem]'>&#x275D;</span>
          <h3 className='text-xl'>
            <span className='inline-block'>
              Increase your site traffic and gain new customers with a beautiful
              and functional blog.
            </span>
            <span className='mb-0 mt-5 inline-block text-sm uppercase tracking-wide text-[--primary]'>
              Ui-ThemeZ Code
            </span>
          </h3>
        </div>

        <div className='my-12 grid gap-4 lg:auto-cols-[1fr] lg:grid-flow-col'>
          <div>
            <Image src='/assets/b1.jpg' alt='' width={500} height={0} />
          </div>

          <div>
            <Image src='/assets/b2.jpg' alt='' width={500} height={0} />
          </div>
        </div>

        <div className='flow'>
          <h3>Apple currently sells only one MacBook Air size.</h3>
          <p>
            A new report said earlier this week that Apple is working on a brand
            new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a
            first for the Air series. A trusted Apple insider with a proven
            track record confirmed that Apple is working on the larger MacBook
            Air.
          </p>
        </div>

        <div className='flow my-8'>
          <h3>Ordered &amp; Unordered Lists.</h3>
          <ul className='ml-4 list-disc'>
            <li className='relative mt-2.5 opacity-70'>
              Yet this above sewed flirted opened ouch
            </li>
            <li className='relative mt-2.5 opacity-70'>
              Goldfinch realistic sporadic ingenuous
            </li>
            <li className='relative mt-2.5 opacity-70'>
              Abominable this abidin far successfully then like piquan
            </li>
          </ul>
        </div>

        <div className='flow mb-8'>
          <h3>Ordered &amp; Unordered Lists.</h3>
          <ul>
            <li className='relative mt-2.5 opacity-70'>
              <span>01 -</span> Yet this above sewed flirted opened ouch
            </li>
            <li className='relative mt-2.5 opacity-70'>
              <span>02 -</span> Goldfinch realistic sporadic ingenuous
            </li>
            <li className='relative mt-2.5 opacity-70'>
              <span>03 -</span> Abominable this abidin far successfully then
              like piquan
            </li>
          </ul>
        </div>

        <div>
          <p>
            However, Apple might not include it in the Air series when it
            launches it. As for the notebook’s release date, the 15-inch MacBook
            isn’t coming soon. It’ll get a late 2023 release at best, according
            to the new claims.
          </p>
        </div>

        <div className='mt-5 flex flex-col gap-12 border-b border-t border-solid border-y-[--border2] py-5 md:flex-row md:items-center md:justify-between'>
          <div>
            <div className='flex gap-2'>
              <div className='flex items-center'>
                <span className='mr-1 inline-block text-sm opacity-70'>
                  Tags :
                </span>
              </div>
              <div>
                <a
                  href='#'
                  className='mr-1 rounded-[1.875rem] bg-[--background6] px-5 py-2 text-sm transition-all duration-[0.4s] hover:bg-[--primary]'
                >
                  Tech
                </a>
                <a
                  href='#'
                  className='mr-1 rounded-[1.875rem] bg-[--background6] px-5 py-2 text-sm transition-all duration-[0.4s] hover:bg-[--primary]'
                >
                  Gavi
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className='flex gap-2'>
              <div className='flex items-center'>
                <span>Share :</span>
              </div>
              <SocialIconsComponent
                className='mr-2 bg-[--background6] py-2 transition-all duration-[0.4s] hover:bg-[--primary]'
                {...props.socialIconsComponentProps}
              />
            </div>
          </div>
        </div>

        <div className='mt-12 bg-[--background6] p-10 backdrop-blur-sm'>
          <div className='flex flex-col gap-8 md:flex-row'>
            <div>
              <Image
                src='/assets/author1.jpg'
                alt=''
                width={100}
                height={0}
                className='h-24 w-24 rounded-xl'
              />
            </div>

            <div className='flow flex-1'>
              <h3>Chris Smith</h3>
              <p>
                Nulla eleifend, lectus eu gravida facilisis, ipsum metus
                faucibus eros, vitae vulputate nibh libero ac metus.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-12 grid gap-4 bg-[--background6] p-10 backdrop-blur-sm lg:auto-cols-[1fr] lg:grid-flow-col'>
          <div className='bg-black p-10 text-white opacity-50'>
            <a href='#' className='flow'>
              <span className='inline-flex items-center gap-2 text-xs uppercase tracking-wide text-[--primary]'>
                <SVGAtom
                  width={12}
                  height={12}
                  iconName='arrowRight'
                  className='inline-block -scale-x-100'
                />
                Prev Post
              </span>
              <h6 className='text-base font-medium'>
                Ways to quickly traffic to <br /> your website.
              </h6>
            </a>
          </div>

          <div className='bg-black p-10 text-white opacity-50'>
            <a href='#' className='flow'>
              <span className='inline-flex items-center gap-2 text-xs uppercase tracking-wide text-[--primary]'>
                Next Post{" "}
                <SVGAtom
                  width={12}
                  height={12}
                  iconName='arrowRight'
                  className='inline-block'
                />
              </span>
              <h6 className='text-base font-medium'>
                How to Handle Your Good Employee.
              </h6>
            </a>
          </div>
        </div>

        <CommentsSectionComponent {...props.commentsSectionComponentProps} />

        <div>
          <div className='mb-14'>
            <h3>Leave a comment</h3>
          </div>
          <AddCommentComponent {...props.addCommentComponentProps} />
        </div>
      </div>

      <div className='mt-12'>
        <div className='border-b border-b-[--border2] pb-5'>
          <h3 className='uppercase tracking-wide'>related posts</h3>
        </div>

        <div className='mt-12'>
          <BlogsComponent {...props.blogsComponentProps} />
        </div>
      </div>
    </div>
  );
};
