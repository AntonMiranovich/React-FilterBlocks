import { useParams } from "react-router-dom";
import arrObj from "../../Storage/Storage.json";
import { useEffect, useState } from "react";
import { IconMapPin } from "@tabler/icons-react";
import style from "./style.module.scss";

function Vacansy() {
  const [filterVacansy, setFilterVacansy] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setFilterVacansy(arrObj.filter((el) => el.id === +id)[0]);
  }, []);

  return (
    <>
      <div className={style.header}>
        <h1>{filterVacansy?.title}</h1>
        <div className={style.flex}>
          <p>{filterVacansy?.salary}</p>
          <p>{filterVacansy?.time}</p>
        </div>
        <div className={style.flex}>
          <IconMapPin />
          <p>{filterVacansy?.location}</p>
        </div>
      </div>

      <div className={style.content}>
        <h2>Обязанности:</h2>
        <ul>
          {filterVacansy.responsibilities?.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>

        <h2>Требования:</h2>
        <ul>
          {filterVacansy.requirements?.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>

        <h2>Условия:</h2>
        <ul>
          {filterVacansy.conditions?.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Vacansy;
