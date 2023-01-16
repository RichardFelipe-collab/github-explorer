import { useEffect, useState } from "react";
import { Item } from "./Item";

const listOfTasks = {
  tarefaA: "revisar react",
  tarefaB: "avançar no ignite",
  tarefaC: "praticar",
};

export function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/RichardFelipe-collab/repos")
      .then((response) => response.json())
      .then((data) => setList(data));
  },[]);
  return (
    <>
      {list.map((value) => {
        return <Item list={value}/>;
      })}
    </>
  );
}
