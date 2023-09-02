import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import defaultImageUrl from '../../../img/recipe-preparation.jpg';
import retinaImageImageUrl from '../../../img/recipe-preparation-2x.jpg';

import {
  PreparationWrap,
  PreparationTitle,
  PreparationForeword,
  PreparationList,
  PreparationListItem,
  PreparationImg,
} from './RecipePreparation.styled';

import { preparationForeward } from 'constans';

export const RecipePreparation = ({ instructions }) => {
  let instructionIsArray;
  let arrayOfInstructions;
  if (instructions) {
    instructionIsArray = Array.isArray(instructions);
    arrayOfInstructions = instructions.flatMap(instruction =>
      instruction.trim().split('.')
    );
    if (!instructionIsArray) {
      arrayOfInstructions = instructions.split('.');
    }
  }

  return (
    <>
      {instructions && (
        <PreparationWrap>
          <PreparationTitle>{'Recipe Preparation'}</PreparationTitle>
          <PreparationForeword>{preparationForeward}</PreparationForeword>
          <PreparationList>
            {arrayOfInstructions &&
              arrayOfInstructions
                .filter(instruction => instruction.trim() !== '')
                .map(instruction => (
                  <PreparationListItem key={nanoid()}>
                    {!instruction.endsWith('.') && !instruction.endsWith('!')
                      ? instruction + '.'
                      : instruction}
                  </PreparationListItem>
                ))}
          </PreparationList>
          <PreparationImg
            src={retinaImageImageUrl}
            srcSet={`${defaultImageUrl} 1x, ${retinaImageImageUrl} 2x`}
            alt="Recipe Preparation"
          />
        </PreparationWrap>
      )}
    </>
  );
};

RecipePreparation.propTypes = {
  instructions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};
