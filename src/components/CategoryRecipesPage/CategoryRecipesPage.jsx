import { CategoryRecipesList, Button,   } from 'components';
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
        <Button minWidth ="170px"
        minHeight ="54px"
          onClick={handleButtonClick}>
         
                Other drinks</Button>
            </ButtonContainer>
      </> 
    );
};
