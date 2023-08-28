import { nanoid } from 'nanoid';
import {
  PreparationWrap,
  PreparationTitle,
  PreparationForeword,
  PreparationList,
  PreparationListItem,
  PreparationImg,
} from './RecipePreparation.styled';

export const RecipePreparation = ({ instructions }) => {
  return (
    <PreparationWrap>
      <PreparationTitle>{'Recipe Preparation'}</PreparationTitle>
      <PreparationForeword>
        {
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores laboriosam voluptas fugit soluta consequatur provident molestiae officiis. Eius at nihil modi expedita quaerat, repellendus ad consequuntur exercitationem eum, consectetur blanditiis.'
        }
      </PreparationForeword>
      <PreparationList>
        {instructions &&
          instructions
            .split('.')
            .map(
              instruction =>
                instruction.trim().length !== 0 && (
                  <PreparationListItem key={nanoid()}>
                    {instruction + '.'}
                  </PreparationListItem>
                )
            )}
      </PreparationList>
      <PreparationImg />
    </PreparationWrap>
  );
};
