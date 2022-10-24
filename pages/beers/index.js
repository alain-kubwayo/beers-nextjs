import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Beers.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://api.punkapi.com/v2/beers");
  const data = await res.json();
  return {
    props: {
      beers: data,
    },
  };
};

const Beers = ({ beers }) => {
  return (
    <div className="container">
      <h2>ALL BEERS</h2>
      <hr />
      <div className={styles.cards}>
        {beers.map((beer) => (
          <Link href={`/beers/${beer.id}`} key={beer.id}>
            <div className={styles.card}>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <Image
                src={`${beer.image_url}`}
                width={300}
                height={400}
                className={styles.image}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Beers;
