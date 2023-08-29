import { Section, AddRecipeForm, FollowUs, PopularRecipe } from 'components';

const AddRecipe = () => {
  return (
    <>
      <Section title="Add recipe">
        <AddRecipeForm />
        <h2>Follow Us</h2>
        <FollowUs />
        <PopularRecipe />
      </Section>
    </>
  );
};

export default AddRecipe;
