import { MainSection, CategoryRecipesPage, CategorySection,Button } from 'components';
import { ButtonContainer } from '../components/CategoryRecipesPage/CategoryRecipesPage.styled';
import { useNavigate} from 'react-router-dom';
const Main = () => {
   const navigate = useNavigate();
    const handleButtonClick = () => {
      navigate("/drinks");
  };
  return (
    <>
      <MainSection
        title="Craft Your Perfect Drink with Drink Master"
        posttitle="Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages."
      >
        {/* Тут вставляємо свої компоненти */}
      </MainSection>
      <CategorySection title="Ordinary Drink">
        <CategoryRecipesPage />
      </CategorySection>
       <CategorySection title="Cocktail">
        <CategoryRecipesPage />
      </CategorySection>
       <CategorySection title="Shake">
        <CategoryRecipesPage />
      </CategorySection>
       <CategorySection title="Other/Unknow">
        <CategoryRecipesPage />
      </CategorySection>
      <ButtonContainer>
        <Button onClick={handleButtonClick}>Other drinks</Button>
      </ButtonContainer>
    </>
  );
};

export default Main;
