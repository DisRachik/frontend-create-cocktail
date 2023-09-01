import { MainSection, CategoryRecipesPage, CategorySection,Button } from 'components';
import { ButtonContainer } from '../components/CategoryRecipesPage/CategoryRecipesPage.styled';
import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectMainError,
//   selectMainLoading,
//   selectMainRecipes,
// } from 'redux/mainRecipes/mainRecipesSelectors';
// import { useEffect } from 'react';
// import {   fetchMainRecipes } from 'redux/mainRecipes/mainRecipesOperations';

const Main = () => {
  // const dispatch = useDispatch();
  // const mainRecipes = useSelector(selectMainRecipes);
  // const isLoading = useSelector(selectMainLoading);
  // const error = useSelector(selectMainError);

  // useEffect(() => {
  //   dispatch(fetchMainRecipes());
    
  // }, [dispatch]);


  // console.log(isLoading, error, "mainRecipes============", mainRecipes);
  
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
