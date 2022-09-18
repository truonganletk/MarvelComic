import React from "react";
import MuIcon from "../../assets/images/mu-icon-dark-bg.png";

const CardA = ({ data }) => {
  return (
    <>
      <div className="cardA-content">
        <div className="cardA-image">
          <img
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            alt=""
            className="thumbnail"
          />
          <img src={MuIcon} alt="" className="mu-icon-dark-bg" />
        </div>
        <div className="cardA-text">
          <h5 className="cardA-title">{data.title}</h5>
          <p className="creators">
            {
              data.creators.available >= 2
                ? data.creators.items.map((item, key) => {
                    if (key >= 2) {
                      return "";
                    } else {
                      return item.name + (key === 0 ? ", " : "");
                    }
                  })
                : data.creators.items[0]?.name //"?" ignore undefined case
            }
          </p>
        </div>
      </div>
    </>
  );
};

export default CardA;
