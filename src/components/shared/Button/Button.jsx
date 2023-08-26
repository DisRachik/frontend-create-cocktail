import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ minWidth, transparent, children, onClick }) => {
  return (
    <StyledButton
      minWidth={minWidth}
      transparent={transparent}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  pretitle: PropTypes.string,
  transparent: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

// Правила використання:
//onClick - обов'язковий проп - в компоненті де викликаєте прописуєте логіку
// minWidth - необов'язковий проп - якщо вам потрібно передати свою мінімальну довжину кнопки, можна передати в процентах
// transparent - якщо кнопка прозора, проп не обов'язковий. По моєму лише в футері.

// const Main = () => {
//   const handleButtonClick = () => {
//     console.log('Button clicked!');
//   };

//   return (
//     <>
//       <Section title="Craft Your Perfect Drink with Drink Master">
//         {/* Тут вставляємо свої компоненти */}

//         {/* minWidth="100%" */}
//         <Button minWidth="100%" transparent onClick={handleButtonClick}>
//           Change color
//         </Button>
//       </Section>
//     </>
//   );
// };
