import { ThreeDots } from 'react-loader-spinner';
import { theme } from 'styles';

export const Spinner = () => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color={theme.colors.errorRed}
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
);
