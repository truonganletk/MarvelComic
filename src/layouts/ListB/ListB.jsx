import axios from "axios";
import React, { Component } from "react";
import CardB from "../../components/Card/CardB";

export class ListB extends Component {
  state = {
    listB: [],
  };

  componentDidMount = () => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1a0671e3d28eb43635377754f0572915&hash=a2b08b72060432c20ab8c14a82a2ad72`
      ) /*1+private+public */
      .then((res) => {
        //console.log(res)
        this.setState({ listB: [...res.data.data.results] });
      })
      .catch();
  };
  render() {
    return (
      <>
        <ul className="listB">
          {this.state.listB.map((item, index) => {
            if (index >= 18) {
              return "";
            } else {
              return (
                <li key={index} className="cardB">

                  <CardB data={item} />

                </li>
              );
            }
          })}
        </ul>
      </>
    );
  }
}

export default ListB;
