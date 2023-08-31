export const DrinkListItem = ({ currentDrinks }) => {
  return (
    <>
      {currentDrinks.map(({ drinkThumb, drink, _id }) => (
        <li key={_id}>
          <img src={drinkThumb} alt={drink} width="335px" />
          <div>
            <p>{drink}</p>
            {/* <a href="#"> ingridients</a>  */}
          </div>
        </li>
      ))}
    </>
  );
};
