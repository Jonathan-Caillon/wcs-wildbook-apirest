import { WilderCard, AddWilderForm } from "../../components/index";
import style from "./WilderGrid.module.css";
import { useState, useEffect } from "react";
import { getWilder } from "../../wildersData";

const WilderGrid = () => {
  const [wildersData, setWildersData] = useState(null);
  const fetchData = async () => {
    const Wilders = await getWilder();
    setWildersData(Wilders.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="container">
      <AddWilderForm fetchData={fetchData} />
      <h2>Wilders</h2>
      {wildersData ? (
        <>
          <section className={style.cardRow}>
            {wildersData.map((wilder, index) => (
              <WilderCard fetchData={fetchData} data={wilder} key={index} />
            ))}
          </section>
        </>
      ) : (
        <>
          <div>No wilders yet</div>
        </>
      )}
    </main>
  );
};

export default WilderGrid;
