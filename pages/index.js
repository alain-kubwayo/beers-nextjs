import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeSection}>
      <div className="container">
        <Image src="/beer-banner.jpeg" width={1280} height={400} />
        <div className={styles.main}>
          <div className={styles.mainDesc}>
            <h2>
              Finding the right beer <br /> doesn't have to be complicated
            </h2>
            <p>
              We provide reliable information about beers to make your next trip
              to the bar an enjoyable one.
            </p>
          </div>
          <div>
            <Image src="/bar.jpeg" width={600} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
}
