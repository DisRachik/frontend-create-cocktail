import {
  MainSection,
  CategoryRecipesList,
  CategorySection,
  Button,
  // MotivationModal,
} from 'components';
import { ButtonContainer } from '../components/CategoryRecipesList/CategoryRecipesList.styled';
import { useNavigate } from 'react-router-dom';
import { uniqueCategories } from 'constans';
import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { getMainRecipes } from 'api';
import { useSelector } from 'react-redux';
import { selectTokenCount } from 'redux/auth/selectors';
// import { useSelector } from 'react-redux';
// import { selectUser } from 'redux/auth/selectors';
// import { praiseModal } from 'helpers';

const Main = () => {
  const [mainRecipes, setMainRecipes] = useState([]);
  const navigate = useNavigate();
  // const [showModal, setShowModal] = useState(0);
  // const { tokenCount } = useSelector(selectUser);
  const tokenCount = useSelector(selectTokenCount);
  // const messagePraise = praiseModal(tokenCount, 'signin');
  console.log(tokenCount);

  // useEffect(() => {
  //   if (messagePraise) {
  //     setShowModal(prevState => prevState + 1);
  //   }
  // }, [messagePraise]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getMainRecipes();
        setMainRecipes(results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleButtonClick = () => {
    navigate('/drinks');
  };
  return (
    <>
      <MainSection
        title="Craft Your Perfect Drink with Drink Master"
        posttitle="Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages."
      ></MainSection>

      {uniqueCategories.map(category => (
        <CategorySection key={nanoid()} title={category}>
          <CategoryRecipesList
            key={nanoid()}
            category={category}
            mainRecipes={mainRecipes}
          />
        </CategorySection>
      ))}
      <ButtonContainer>
        <Button onClick={handleButtonClick}>Other drinks</Button>
      </ButtonContainer>
      {/* {showModal === 1 && <MotivationModal text={messagePraise} signin />} */}
    </>
  );
};

export default Main;
