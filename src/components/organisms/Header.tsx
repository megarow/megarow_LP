import Image from 'next/image';
import HamburgerButton from '@/components/atoms/HamburgerButton';
const Header = () => {
  return (
    <header className={'l-header'}>
      <div className={'l-header__wrapper'}>
        <div className={'flex items-center justify-between'}>
          <h1 className={'l-header__title'}>
            <picture className={'block w-full h-[38px]'}>
              <Image
                src='/images/white-logo.svg'
                alt='メガロのロゴ'
                width={183}
                height={38}
                className={'w-full h-full object-cover'}
              />
            </picture>
          </h1>
          <HamburgerButton />
          {/* <nav className='l-header-navigation'>
            <ul className='l-header-navigatio__inner'>
              <li className='l-header-navigation__item'>
                <a href='' className='l-header-navigation__link'>
                  メガロとは？
                </a>
              </li>
              <li className='l-header-navigation__item'>
                <a href='' className='l-header-navigation__link'>
                  メガロオークションについて
                </a>
              </li>
              <li className='l-header-navigation__item'>
                <a href='' className='l-header-navigation__link'>
                  メガロの今後
                </a>
              </li>
              <li className='l-header-navigation__item'>
                <button className='c-primary-button'>クリエイター登録</button>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
