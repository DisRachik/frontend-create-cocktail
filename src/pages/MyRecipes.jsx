import { Section } from 'components';
import { MyRecipesPage } from '../components/MyRecipes/MyRecipesPage';

const MyRecipes = () => {
  return (
    <>
      <Section title="My recipes">
        <MyRecipesPage />
      </Section>
    </>
  );
};

export default MyRecipes;
