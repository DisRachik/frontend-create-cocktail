import { Section, AddRecipeForm, FollowUs, PopularRecipe } from 'components';

const AddRecipe = () => {
  return (
    <>
      <Section title="Add recipe">
        <AddRecipeForm />
        <FollowUs />
        <PopularRecipe />
      </Section>
    </>
  );
};

export default AddRecipe;
