import { MainSection, CategoryRecipesPage, CategorySection,Button } from 'components';
import { ButtonContainer } from '../components/CategoryRecipesPage/CategoryRecipesPage.styled';
import { useNavigate } from 'react-router-dom';

const Main = () => {
 const uniqueCategories = [
    "Cocktail",
    "Ordinary Drink",
    "Shake",
    "Other/Unknown",
  ];
   const navigate = useNavigate();
    const handleButtonClick = () => {
      navigate("/drinks");
  };
  // const isMainRecipes = mainRecipes.length > 0;
  return (
    <>
      <MainSection
        title="Craft Your Perfect Drink with Drink Master"
        posttitle="Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages."
      >
        {/* Тут вставляємо свої компоненти */}
      </MainSection>
      
      {uniqueCategories.map(category => (
        <CategorySection title={category}>
          <CategoryRecipesPage category={category}  />
      </CategorySection>
      ))}
      <ButtonContainer>
        <Button onClick={handleButtonClick}>Other drinks</Button>
      </ButtonContainer>
    </>
  );
};

export default Main;
