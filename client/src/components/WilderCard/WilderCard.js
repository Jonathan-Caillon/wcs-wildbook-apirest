import blank_profile from "../../assets/blank_profile.png";
import "./WilderCard.css";
import { deleteWilder } from "../../wildersData";

const WilderCard = ({ data, fetchData }) => {
  const deleteData = async () => {
    const Wilder = await deleteWilder(data.id);
    console.log(Wilder.data);
    fetchData();
  };

  return (
    <article className="card">
      <img src={blank_profile} alt={`${data.name} Profile`} />
      <h3>{data.name}</h3>
      <h4>{data.city}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {data.skills.map((skill, index) => (
          <li key={index}>
            {skill.name}
            {/* <span className="votes">{skill.votes}</span> */}
          </li>
        ))}
      </ul>
      <h4>Actions</h4>
      <button
        title={`Delete ${data.name}`}
        className="btn"
        onClick={deleteData}
      >
        Delete
      </button>
    </article>
  );
};

export default WilderCard;
