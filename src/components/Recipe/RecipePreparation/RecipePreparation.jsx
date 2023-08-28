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
          <PreparationImg />
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
