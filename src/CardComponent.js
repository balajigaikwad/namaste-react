const CardComponent = ( {restaurant} ) => {
  const { img, name, cuisine, stars } = restaurant;
  return (
    <div>
      <img src={img} />
      <h2>{name}</h2>
      <h3>{cuisine}</h3>
      <h4>{stars}</h4>
    </div>
  );
};

export default CardComponent;
