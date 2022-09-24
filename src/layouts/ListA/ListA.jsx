import React, { Component } from "react";
import axios from "axios";
import CardA from "../../components/Card/CardA";

export class ListA extends Component {
  state = {
    listA: [],
  };
  componentDidMount = () => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1a0671e3d28eb43635377754f0572915&hash=a2b08b72060432c20ab8c14a82a2ad72`
      )
      .then((res) => {
        this.setState({ listA: [...res.data.data.results] });
        //console.log(res);
      })
      .catch();
  };

  render() {
    return (
      <>
        <h2 className="listA-header">
          read for free
          <a href="/#" className="see-all">
            See All
          </a>
        </h2>
        <div className="carousel">
          <div className="outer">
            <ul className="listA">
              {this.state.listA.map((item, index) => {
                if (index >= 20) {
                  return "";
                } else {
                  return (
                    <li key={index} className="cardA">
                      {/* <a href="/character/:id">
                        <CardA data={item.id} />
                      </a> */}
                      <CardA data={item} />
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default ListA;
