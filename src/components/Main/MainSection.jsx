import PropTypes from 'prop-types';
import { MainSectionWrap, MainSectionTitle, MainSectionSubtitle,BackgroundImageWrap } from './MainSection.styled';
import { Button } from 'components';
import {  Link } from '../Nav/Nav.styled';
export const MainSection = ({ title, posttitle, children }) =>

{
    const handleButtonClick = () => {
      console.log('Button clicked!');
      // return(
      //   <Link to="/my">My recipes</Link>
      //   );
  };
  return (
     <BackgroundImageWrap  >
  <MainSectionWrap>
    {title && <MainSectionTitle>{title}</MainSectionTitle>}
    {posttitle && <MainSectionSubtitle>{posttitle}</MainSectionSubtitle>}
    <Button minWidth ="170px"
        minHeight ="54px"
          onClick={handleButtonClick}>
         
        Add recipe</Button>
    {children}
  </MainSectionWrap>
     </ BackgroundImageWrap  >
);
}
MainSection.propTypes = {
  posttitle: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};
