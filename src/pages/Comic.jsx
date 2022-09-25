import React, { Component } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../layouts/Footer/Footer';
import Header from '../layouts/Header/Header';
import axios from 'axios';
import ComicDetail from '../layouts/Comic/ComicDetail';


function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export class Comic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
      objectdetail: [],
    };
  }

  componentDidMount = () => {
    // const { keyword } = this.props;
    // console.log(keyword);
    // console.log(this.state.props.keyword);
    axios
      .get(
        `http://gateway.marvel.com/v1/public/comics/${this.state.props.params.id}?ts=1&apikey=1a0671e3d28eb43635377754f0572915&hash=a2b08b72060432c20ab8c14a82a2ad72`
      )
      .then((res) => {
        const data = res.data.data.results[0];
        this.setState({
          props: this.state.props, 
          objectdetail: {
            ...data,
          }
        }, () => {
          // console.log(this.state.objectdetail);
        })
      })
      .catch()
  }


  render() {
    // console.log(this.state);
    return (
      <div>
        <Header />
        <ComicDetail data={this.state.objectdetail}/>
        <Footer />
      </div>
    );
  }
}

export default withParams(Comic);
