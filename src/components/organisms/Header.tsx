import Image from 'next/image';

const Header = () => {
  return (
    <header className='l-header'>
      <div className='l-header__wrapper'>
        <div className='l-header__container'>
          <h1 className='l-header__title'>
            <picture className='l-header__image-inner'>
              <Image
                src='/images/white-logo.svg'
                alt='メガロのロゴ'
                width={183}
                height={38}
                className='c-image-fluid'
              />
            </picture>
          </h1>
          <button className='c-hamburger-button'>
            <div className='c-hamburger-button__wrapper'>
              <span className='c-hamburger-button__border'></span>
            </div>
          </button>
          {/* <nav className="l-header-navigation">
            <ul className="l-header-navigatio__inner">
              <li className="l-header-navigation__item">
                <a href="" className="l-header-navigation__link">
                  メガロとは？
                </a>
              </li>
              <li className="l-header-navigation__item">
                <a href="" className="l-header-navigation__link">
                  メガロオークションについて
                </a>
              </li>
              <li className="l-header-navigation__item">
                <a href="" className="l-header-navigation__link">
                  メガロの今後
                </a>
              </li>
              <li className="l-header-navigation__item">
                <button className="c-primary-button">クリエイター登録</button>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
