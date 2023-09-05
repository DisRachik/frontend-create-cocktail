import {
  MainSection,
  CategoryRecipesList,
  CategorySection,
  Button,
  MotivationModal,
} from 'components';
import { ButtonContainer } from '../components/CategoryRecipesList/CategoryRecipesList.styled';
import { useNavigate } from 'react-router-dom';
import { uniqueCategories } from 'constans';
import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { getMainRecipes } from 'api';
import { useAuth } from 'redux/auth/useAuth';
import { praiseModal } from 'helpers';

const Main = () => {
  const [mainRecipes, setMainRecipes] = useState([]);
  const [isModalVisible, setModalVisibility] = useState(false);
  const [modalText, setModalText] = useState(null);
  const navigate = useNavigate();
  const { tokenCount, resetCount } = useAuth();

  useEffect(() => {
    const text = praiseModal(tokenCount, 'signin');

    if (text && !isModalVisible) {
      resetCount();
      setModalText(text);
      setModalVisibility(true);
    }
  }, [tokenCount, resetCount, isModalVisible]);

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
      {isModalVisible && <MotivationModal text={modalText} signin />}
    </>
  );
};

export default Main;
