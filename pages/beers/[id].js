import Image from "next/image";
import styles from "../../styles/Beer.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://api.punkapi.com/v2/beers");
  const data = await res.json();
  const paths = data.map((beer) => {
    return {
      params: { id: beer.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  const data = await res.json();
  return {
    props: { beer: data },
  };
};

const Beer = ({ beer }) => {
  return (
    <div className="container">
      <div className={styles.beer}>
        <div>
          <Image src={beer[0].image_url} width={400} height={600} />
        </div>
        <div>
          <h3>{beer[0].name}</h3>
          <p>{beer[0].description}</p>
          <h4>Year: {beer[0].first_brewed}</h4>
          <h4>Tagline: {beer[0].tagline}</h4>
          <h4>
            Volume: {beer[0].volume.value} {beer[0].volume.unit}
          </h4>
          <h4>Ingredients:</h4>
          <ul>
            {beer[0].ingredients.malt.map((ing) => (
              <li key={ing}>{ing.name}</li>
            ))}
          </ul>
          <h4>Food Pairing:</h4>
          <ul>
            {beer[0].food_pairing.map((food) => (
              <li key={food}>{food}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Beer;
