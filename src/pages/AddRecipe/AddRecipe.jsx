import { Section, AddRecipeForm, FollowUs, PopularRecipe } from 'components';

import { PageWrapper, Aside, FollowUsWrapper, Title } from './AddRecipe.styles';

const AddRecipe = () => {
  return (
    <Section title="Add recipe">
      <PageWrapper>
        <AddRecipeForm />
        <Aside>
          <FollowUsWrapper>
            <Title>Follow Us</Title>
            <FollowUs />
          </FollowUsWrapper>
          <Title>Popular recipe</Title>
          <PopularRecipe />
        </Aside>
      </PageWrapper>
    </Section>
  );
};

export default AddRecipe;
