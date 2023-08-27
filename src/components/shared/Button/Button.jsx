import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({
  minWidth,
  minHeight,
  transparent,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      minWidth={minWidth}
      minHeight={minHeight}
      transparent={transparent}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  transparent: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

// Правила використання:
//onClick - необов'язковий проп - в компоненті де викликаєте прописуєте логіку
// minWidth - необов'язковий проп - якщо вам потрібно передати свою мінімальну довжину кнопки, можна передати в процентах, пікселях і т.д.
// minHeight - необов'язковий проп - якщо вам потрібно передати свою мінімальну висоту кнопки, можна передати в процентах, пікселях і т.д.
// transparent - якщо кнопка прозора, проп не обов'язковий. По моєму лише в футері.

// const Main = () => {
//   const handleButtonClick = () => {
//     console.log('Button clicked!');
//   };

//   return (
//     <>
//       <Section title="Craft Your Perfect Drink with Drink Master">
//         {/* Тут вставляємо свої компоненти */}

//         <Button minWidth="100%" minHeight="300px" transparent onClick={handleButtonClick}>
//           Change color
//         </Button>
//       </Section>
//     </>
//   );
// };