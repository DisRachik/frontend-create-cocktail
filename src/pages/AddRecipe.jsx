import { Section, AddRecipeForm, FollowUs, PopularRecipe } from 'components';

const AddRecipe = () => {
  return (
    <>
      <Section title="Add recipe">
        <AddRecipeForm />
        <h2>Follow Us</h2>
        <FollowUs />
        <h2>Popular recipe</h2>
        <PopularRecipe />
      </Section>
    </>
  );
};

export default AddRecipe;
