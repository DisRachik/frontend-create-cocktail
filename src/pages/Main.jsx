import { Button, Section } from 'components';

const Main = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <>
      <Section title="Craft Your Perfect Drink with Drink Master">
        {/* Тут вставляємо свої компоненти */}

        <Button minWidth="178px" minHeight="90px" onClick={handleButtonClick}>
          Change color
        </Button>
      </Section>
    </>
  );
};

export default Main;
