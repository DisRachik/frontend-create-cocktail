import { Section } from 'components';

const Recipe = () => {
  return (
    // В проп pretitle потрібно передати назву БОКАЛУ для коктейлю отриману з бази по Id
    // В проп title потрібно передати назву коктейлю отриману з бази по Id
    <Section pretitle={'Highball glass'} title={'Pornstar Martini'}>
      {/* Тут вставляємо свої компоненти */}
    </Section>
  );
};

export default Recipe;
