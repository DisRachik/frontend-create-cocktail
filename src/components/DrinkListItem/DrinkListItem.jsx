export const DrinkListItem = ({ data }) => {
  return (
    <>
      {data.map(({ drinkThumb, drink, _id }) => (
        <li key={_id.$oid}>
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
