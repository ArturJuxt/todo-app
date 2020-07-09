import React, { useState } from "react";
import "./AddButtonList.scss";
import addSvg from "../../assets/img/add.svg";
import closeSvg from "../../assets/img/close.svg";
import List from "../list/List";
import Badge from "../Badge/Badge";

const AddButtonList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectColor, setSelectColor] = useState(colors[0].id);

  return (
    <div className="add_list">
      <List
        onClick={() => setVisiblePopup(true)}
        items={[
          {
            icon: (
              <img width="12px" height="12px" src={addSvg} alt="add icon" />
            ),
            name: "Добавить папку",
            className: "list_add_button",
          },
        ]}
      />
      {visiblePopup && (
        <div className="add_list__popup">
          <img
            src={closeSvg}
            alt="close icon"
            className="add_list__popup_close_btn"
            onClick={() => setVisiblePopup(false)}
          />
          <input className="field" type="text" placeholder="Название папки" />
          <div className="add_list__popup_colors">
            {colors.map((color) => (
              <Badge
                click={() => setSelectColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectColor === color.id && "active"}
              />
            ))}
          </div>
          <button className="button">Добавить</button>
        </div>
      )}
    </div>
  );
};

export default AddButtonList;
