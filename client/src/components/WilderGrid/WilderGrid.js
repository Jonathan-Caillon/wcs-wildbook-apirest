import { WilderCard } from "../index";
import "./WilderGrid.css";
import { useState, useEffect } from "react";
import { getWilder } from "../../wildersData";

const WilderGrid = () => {
  const [wildersData, setWildersData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const getWilders = await getWilder();
      setWildersData(getWilders.data);
    };
    fetchData();
  }, []);
  return (
    <main className="container">
      <h2>Wilders</h2>
      {!wildersData ? (
        <>
          <div>No wilders yet</div>
        </>
      ) : (
        <>
          <section className="card-row">
            {wildersData.map((wilder, index) => (
              <WilderCard data={wilder} key={index} />
            ))}
          </section>
        </>
      )}
    </main>
  );
};

export default WilderGrid;
