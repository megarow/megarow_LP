import { useState } from 'react';
const hamburgerButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // isOpen state を反転させる関数
  const handleMenuClick = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    // <div className='l-header__button-inner'>
    <button
      className={
        'shadow[ 0px_4px_12px_rgba(0, 0, 0, 0.1)] h-[62px] w-[62px] rounded-[45px] bg-white'
      }
      onClick={handleMenuClick}
    >
      <div className={'relative flex flex-col items-center justify-center'}>
        <span
          className={
            'hamburger-button__border inline-block h-[4px] w-[22px] rounded-[10px] bg-[#0B2442]'
          }
        ></span>
      </div>
    </button>
    // </div>
  );
};

export default hamburgerButton;
