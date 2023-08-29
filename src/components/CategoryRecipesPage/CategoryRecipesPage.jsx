import { CategoryRecipesList, Button } from 'components';
import { ButtonContainer } from './CategoryRecipesPage.styled';

export const CategoryRecipesPage = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
    // return(
    //   <Link to="/my">My recipes</Link>
    //   );
  };
  return (
    <>
      <CategoryRecipesList />
      <ButtonContainer>
        <Button onClick={handleButtonClick}>Other drinks</Button>
      </ButtonContainer>
    </>
  );
};
