import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/organisms/Header';

export default function Home() {
  return (
    <div className='wrap bg-[url("/images/bg.png")] bg-fixed '>
      <Head>
        <title>meGarow|招待制画廊SNS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='w-screen m-auto  md:w-[550px] md:overflow-hidden'>
        <Header />
        <main className={'l-main'} >
          <section
            className={
              'h-[812px] pt-[90px]'
            }
          >
            <div className='px-[14px]'>
              <div className='relative flex flex-col items-center justify-center '>
                <picture className='inline-block first-of-type:w-[352px]'>
                  <Image
                    src='/images/fv-main.png'
                    alt='制作過程を投稿'
                    width={352}
                    height={462}
                    className='c-image-fluid'
                  />
                </picture>
                <picture className='absolute top-0 right-0 inline-block w-[237px]'>
                  <Image
                    src='/images/fv-message01.png'
                    alt='制作過程を投稿'
                    width={237}
                    height={101}
                    className='c-image-fluid'
                  />
                </picture>
                <picture className='absolute left-0 inline-block w-[237px]'>
                  <Image
                    src='/images/fv-message02.png'
                    alt='制作過程を投稿'
                    width={237}
                    height={101}
                    className='c-image-fluid'
                  />
                </picture>
                <picture className='absolute right-0 bottom-0 inline-block w-[237px]'>
                  <Image
                    src='/images/fv-message03.png'
                    alt='制作過程を投稿'
                    width={237}
                    height={101}
                    className='c-image-fluid'
                  />
                </picture>
              </div>
              <div className='p-fv__title-inner'>
                <h2 className='text-[34px] font-thin tracking-[0.1em] text-white'>
                  あなたの
                  <br />
                  クリエイティブが
                  <br />
                  誰かの価値になる。
                </h2>
              </div>
              <div className='mt-[31px] text-center'>
                <a
                  href=''
                  className='shadow-[0px_4px_12px_rgba(0, 0, 0, 0.1)] inline-block rounded-[5px] bg-[#F06500] px-[32px] py-[16px] font-body text-[18px] font-bold text-white'
                >
                  クリエイター登録はこちら
                </a>
              </div>
            </div>
          </section>
          <section className=' bg-slate-200 '>
            <section className='p-introduction bg-slate-200'>
              <div className='px-[14px]'>
                <div className='mt-[64px]'>
                  <h2 className='p-introduction__title'>
                    <picture className='mx-auto block w-[302px]'>
                      <Image
                        src='/images/what-megarow.svg'
                        alt='メガロとは？'
                        width={302}
                        height={101}
                        className='c-image-fluid'
                      />
                    </picture>
                  </h2>
                </div>
                <div className='mt-[32px]'>
                  <p className='text-[19px] leading-[2.3] text-[#0B2442]'>
                    メガロは制作活動する、
                    <br />
                    クリエイター・アーティストのための画廊
                    <br />
                    を持つことができるサービスです。
                  </p>
                </div>
              </div>
            </section>
            <section className='p-use mt-[97px] bg-slate-200'>
              <div className='px-[14px]'>
                <div className='relative text-center before:inline-block before:h-[55px] before:w-[66px] before:bg-[url("/images/logo-symbol.svg")] before:bg-cover before:bg-no-repeat before:content-[""]'>
                  <h2 className='c-section-title'>メガロでできること</h2>
                </div>
                <div className='mt-[32px] flex flex-col items-center gap-[32px]'>
                  <div className='p-use-card'>
                    <picture className='p-use-card__image-inner relative block w-[375px] p-[0rem_2rem_0rem_2rem]'>
                      <Image
                        src='/images/used-image01.png'
                        alt='制作過程を投稿'
                        width={420}
                        height={420}
                        className='c-image-fluid'
                      />
                    </picture>
                    <div className='p-use-card__title-inner relative mt-[16px] text-center'>
                      <h3 className='text-[28px] leading-[1] text-[#0B2442]'>
                        アートを好きな人 <br />
                        クリエイターを招待
                      </h3>
                      <span className='leading[1.5] text-[14px] text-[#0B2442]'>
                        ＊クリエイターは審査制
                      </span>
                    </div>
                  </div>
                  <div className='p-use-card'>
                    <picture className='p-use-card__image-inner relative block w-[375px] p-[0rem_2rem_0rem_2rem]'>
                      <Image
                        src='/images/used-image02.png'
                        alt='制作過程を投稿'
                        width={420}
                        height={420}
                        className='c-image-fluid'
                      />
                    </picture>
                    <div className='p-use-card__title-inner relative mt-[16px] text-center'>
                      <h3 className='text-[28px] leading-[1] text-[#0B2442]'>
                        ポートフォリオとして<br />
                        作品を公開
                      </h3>
                    </div>
                  </div>
                  <div className='p-use-card'>
                    <picture className='p-use-card__image-inner relative block w-[375px] p-[0rem_2rem_0rem_2rem]'>
                      <Image
                        src='/images/used-image03.png'
                        alt='制作過程を投稿'
                        width={420}
                        height={420}
                        className='c-image-fluid'
                      />
                    </picture>
                    <div className='p-use-card__title-inner relative mt-[16px] text-center'>
                      <h3 className='text-[28px] leading-[1] text-[#0B2442]'>
                        作品の価値を <br />
                        オークション
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='mt-[69px] bg-slate-200'>
              <div className='px-[14px]'>
                <div className='p-auction__title-inner relative text-center'>
                  <h2 className='c-section-title auction-icon'>
                    メガロオークションとは？
                  </h2>
                </div>
                <div className='mt-[32px]'>
                  <picture className='w-[522px]'>
                    <Image
                      src='/images/auction-image01.png'
                      alt='制作過程を投稿'
                      width={522}
                      height={399}
                      className='c-image-fluid'
                    />
                  </picture>
                  <ul className='p-auction__list mt-[31px] flex flex-col justify-center gap-[36px]'>
                    <li className='p-auction__item flex items-center  gap-[23px] rounded-[10px] bg-white'>
                      <h3 className='text-[17px] font-thin leading-[1.5] text-[#0B2442]'>
                        投稿した作品を、
                        <br />
                        オークションに出品♪
                      </h3>
                    </li>
                    <li className='p-auction__item flex items-center gap-[23px] rounded-[10px] bg-white'>
                      <h3 className='text-[17px] font-thin leading-[1.5] text-[#0B2442]'>
                        あとは入札を待つだけ
                      </h3>
                    </li>
                    <li className='p-auction__item flex items-center gap-[23px] rounded-[10px] bg-white'>
                      <h3 className='text-[17px] font-thin leading-[1.5] text-[#0B2442]'>
                        入札価格はあなただけに公開
                      </h3>
                    </li>
                    <li className='p-auction__item flex items-center gap-[23px] rounded-[10px] bg-white'>
                      <h3 className='text-[17px] font-thin leading-[1.5] text-[#0B2442]'>
                        落札者はクリエイターが決定
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className='p-white-paper bg-slate-200'>
              <div className='px-[14px]'>
                <div className='p-white-paper__title-inner relative text-center'>
                  <h2
                    className='c-section-title'
                    data-english-title='white paper'
                  >
                    メガロの今後
                  </h2>
                </div>
                <div className='mt-[32px] flex flex-col justify-center gap-[32px]'>
                  <div className='rounded-[10px] bg-white p-[37px_20px] text-center'>
                    <h3 className='text-[22px] font-thin text-[#0B2442]'>
                      ポートフォリオ機能
                    </h3>
                  </div>
                  <div className='rounded-[10px] bg-white p-[37px_20px] text-center'>
                    <h3 className='text-[22px] font-thin text-[#0B2442]'>
                      企業マッチング
                    </h3>
                  </div>
                </div>
                <div className='mt-[32px] text-center'>
                  <a
                    href=''
                    className='shadow-[0px_4px_12px_rgba(0, 0, 0, 0.1)] inline-block rounded-[5px] bg-[#F06500] px-[32px] py-[16px] font-body text-[18px] font-bold text-white'
                  >
                    クリエイター登録
                  </a>
                </div>
              </div>
            </section>
          </section>
        </main>
        <footer className='mt-[32px] bg-[#0B2442] pb-[12px] pt-[26px]'>
          <div className='px-[14px]'>
            <picture className='inline-block w-[223px]'>
              <Image
                src='/images/white-logo.svg'
                alt='メガロロゴ'
                width={223}
                height={46}
                className='l-footer__logo'
              />
            </picture>
            <div className='l-footer__container'>
              <nav className='l-footer-nav'>
                <ul className='mt-[21px] flex flex-col gap-[21px]'>
                  <li className='l-footer-nav__item'>
                    <a href='' className='text-[18px] font-thin text-white'>
                      お問い合わせ
                    </a>
                  </li>
                  <li className='l-footer-nav__item'>
                    <a href='' className='text-[18px] font-thin text-white'>
                      プライバシーポリシー
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='mt-[57px] text-center'>
              <p className='text-[14px] font-thin text-white'>
                Copyright © megarow All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
