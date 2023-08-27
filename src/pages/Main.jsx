import { MainSection, CategoryRecipesPage, Section } from 'components';

const Main = () => {
  
  return (
    <>
    
      <MainSection title="Craft Your Perfect Drink with Drink Master"
      posttitle="Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages.">
        {/* Тут вставляємо свої компоненти */}
        
      </MainSection>
      <Section title=" Categories" >
       <CategoryRecipesPage />
      </Section> 
      
    </>
  );
};

export default Main;
