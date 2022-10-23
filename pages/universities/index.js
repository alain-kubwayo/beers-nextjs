import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    "http://universities.hipolabs.com/search?country=rwanda"
  );
  const data = await res.json();

  return {
    props: {
      universities: data,
    },
  };
};

const Universities = ({ universities }) => {
  const uniqueUniversities = Array.from(
    new Set(universities.map((university) => university.name))
  ).map((name) => {
    return universities.find((university) => university.name === name);
  });
  return (
    <div>
      <h1>Universities in Rwanda - All</h1>
      {uniqueUniversities.map((university) => (
        <Link href="#" key={university.name}>
          <h2>{university.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Universities;
