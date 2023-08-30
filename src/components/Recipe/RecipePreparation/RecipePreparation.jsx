import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import {
  PreparationWrap,
  PreparationTitle,
  PreparationForeword,
  PreparationList,
  PreparationListItem,
  PreparationImg,
} from './RecipePreparation.styled';

import { preparationForeward } from 'constans';

const defaultImageUrl = require('../../../img/recipe-preparation.jpg');
const retinaImageImageUrl = require('../../../img/recipe-preparation-2x.jpg');

export const RecipePreparation = ({ instructions }) => {
  let instructionIsArray;
  let arrayOfInstructions;
  if (instructions) {
    instructionIsArray = Array.isArray(instructions);
    arrayOfInstructions = instructions;
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
              arrayOfInstructions.map(
                instruction =>
                  instruction.trim().length !== 0 && (
                    <PreparationListItem key={nanoid()}>
                      {instruction.indexOf('.') === -1
                        ? instruction + '.'
                        : instruction}
                    </PreparationListItem>
                  )
              )}
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
