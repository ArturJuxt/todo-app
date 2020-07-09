import React from "react";
import "./App.scss";
import listSvg from "./assets/img/list.svg";
import List from "./components/list/List";
import AddButtonList from './components/addButtonList/AddButtonList';
import DB from './assets/db.json';

function App() {
  return (
    <div className="todo">
      <div className="todo_sidebar">
        <List
          items={[
            {
              icon: <img src={listSvg} alt="list icon" />,
              name: "Все задачи",
              active: true,
            },
          ]}
          isRemovable
        />
        <List
          items={[
            {
              color: "green",
              name: "Покупки",
            },
            {
              color: "blue",
              name: "Фронтенд",
            },
            {
              color: "pink",
              name: "Фильмы и сериалы",
            },
            {
              color: "lime",
              name: "Книги",
            },
            {
              color: "purple",
              name: "Личное",
            },
          ]}
        />
        <AddButtonList colors={DB.colors} />
      </div>
      <div className="todo_tasks"></div>
    </div>
  );
}

export default App;
