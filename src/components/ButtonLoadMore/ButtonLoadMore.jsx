import { StyledButton } from 'components/shared/Button/Button.styled';
import { LoadMoreContainer } from './ButtonLoadMore.styled';

export const ButtonLoadMore = props => {
  return (
    <LoadMoreContainer>
      <StyledButton type="button" onClick={() => props.onClick()}>
        see other
      </StyledButton>
    </LoadMoreContainer>
  );
};
