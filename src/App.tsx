import { Counter } from "./components/Counter";
import { RepositoryList } from "./components/RepositoryList";
import { List } from "./revisão/List";
import "./styles/global.scss";

export function App() {
  
  return (
    <>
      <RepositoryList />
      <Counter />
      <List/>
    </>
  );
}
