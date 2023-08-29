import { DrinkListItem } from 'components';

export const DrinkList = () => {
  const data = [
    {
      _id: {
        $oid: '639b6de9ff77d221f190c50f',
      },
      drink: 'Quentin',
      drinkAlternate: null,
      tags: null,
      video: null,
      category: 'Ordinary Drink',
      IBA: null,
      alcoholic: 'Alcoholic',
      glass: 'Cocktail glass',
      instructions:
        'In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.',
      instructionsES:
        'En una coctelera llena hasta la mitad con cubitos de hielo, combine el ron, Kahlua y la crema. Agite bien. Colar en una copa de cóctel y decorar con la nuez moscada.',
      instructionsDE:
        'In einem Shaker, der halb mit Eiswürfeln gefüllt ist, Rum, Kahlua und Sahne mischen. Gut schütteln. In ein Cocktailglas abseihen und mit der Muskatnuss garnieren.',
      instructionsFR:
        'Dans un shaker à moitié rempli de glaçons, mélanger le rhum, le Kahlua et la crème. Bien agiter. Versez dans un verre à cocktail et décorez avec la noix de muscade.',
      instructionsIT:
        'In uno shaker riempito a metà con cubetti di ghiaccio, unire il rum, il Kahlua e la panna. Filtrare in una coppetta da cocktail e guarnire con la noce moscata. Agitare bene.',
      instructionsRU:
        'В шейкере, наполовину наполненном кубиками льда, смешайте ром, Калуа и сливки. Хорошо встряхнуть. Процедите в коктейльный бокал и украсьте мускатным орехом.',
      instructionsPL:
        'W shakerze wypełnionym do połowy kostkami lodu wymieszać rum, Kahlua i śmietanę. Dobrze wstrząsnąć. Przelej do kieliszka koktajlowego i udekoruj gałką muszkatołową.',
      instructionsUK:
        'У шейкері, наповненому наполовину кубиками льоду, змішайте ром, Калуа та вершки. Добре струсити. Процідіть у келих для коктейлю та прикрасьте мускатним горіхом.',
      drinkThumb:
        'http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Quentin.jpg',
      ingredients: [
        {
          title: 'Dark rum',
          measure: '1 1/2 oz ',
          ingredientThumb:
            'http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Dark%20rum.png',
          'thumb-medium':
            'http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Dark%20rum-Medium.png',
          'thumb-small':
            'http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Dark%20rum-Small.png',
        },
        {
          title: 'Kahlua',
          measure: '1/2 oz ',
          ingredientThumb:
            'http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Kahlua.png',
          'thumb-medium':
            'http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Kahlua-Medium.png',
          'thumb-small':
            'http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Kahlua-Small.png',
        },
        {
          title: 'Light cream',
          measure: '1 oz ',
        },
        {
          title: 'Nutmeg',
          measure: '1/8 tsp grated ',
        },
      ],
    },
  ];

  return (
    <ul>
      <DrinkListItem data={data} />
    </ul>
  );
};
