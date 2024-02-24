import { Input, Button } from "@mantine/core";
import style from "./style.module.scss";
import { IconSearch } from "@tabler/icons-react";
import Vacancies from "../../components/Vacancies/Vacancies";

function Home() {
  return (
    <div className={style.wrapper}>
      <Input
        leftSection={<IconSearch size={16} />}
        rightSectionWidth="80px"
        rightSection={<Button variant="filled">Поиск</Button>}
        placeholder="Введите название компании"
      />
      <Vacancies />
    </div>
  );
}

export default Home;
