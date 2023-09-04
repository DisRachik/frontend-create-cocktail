import { Section, AddRecipeForm, FollowUs, PopularRecipe } from 'components';

import { PageWrapper, FollowUsWrapper, Title } from './AddRecipe.styles';

const AddRecipe = () => {
  return (
    <Section title="Add recipe">
      <PageWrapper>
        <AddRecipeForm />
        <aside>
          <FollowUsWrapper>
            <Title>Follow Us</Title>
            <FollowUs />
          </FollowUsWrapper>
          <Title>Popular recipe</Title>
          <PopularRecipe />
        </aside>
      </PageWrapper>
    </Section>
  );
};

export default AddRecipe;
