import { useEffect } from 'react';
import { NavigationWrrapStyled } from './NavigationWrrap.styled';

export const NavigationWrrap = ({ children }) => {
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = 'unset';
    };
  }, []);

  //   useEffect(() => {
  //     const disableScroll = nav => {
  //       if (nav) {
  //         return (document.documentElement.style.overflow = ' hidden');
  //       }
  //     };
  //     const enableScroll = nav => {
  //       if (nav === !nav) {
  //         document.documentElement.style.overflow = 'visible';
  //       }
  //     };

  //     document.addEventListener('click', disableScroll);
  //     document.addEventListener('click', enableScroll);

  //     return () => {
  //       document.removeEventListener('click', disableScroll);
  //       document.removeEventListener('click', enableScroll);
  //     };
  //   }, [nav]);

  return <NavigationWrrapStyled>{children}</NavigationWrrapStyled>;
};
