import style from "./style.module.scss";
import { IconMapPin } from "@tabler/icons-react";
import { Pagination } from "@mantine/core";
import arrObj from "../../Storage/Storage.json";
import { Link } from "react-router-dom";

function Vacancies() {
  return (
    <div className={style.vacancies}>
      <div className={style.list}>
        {arrObj.map((el) => (
          <Link key={el.id} to={`/${el.id}`}>
            <div className={style.wrapper}>
              <h1>{el.title}</h1>
              <div className={style.text}>
                <p>{el.salary}</p>
                <p className={style.work}>{el.time}</p>
              </div>
              <div className={style.flexLocation}>
                <IconMapPin />
                <p>{el.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination total={10} />;
    </div>
  );
}

export default Vacancies;
