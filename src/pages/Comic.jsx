import React, { Component } from 'react'
import { useParams, Link } from 'react-router-dom';
import Overlay from '../components/Overlay/Overlay';
import Title1 from '../components/Title/Title1';
import Footer from '../layouts/Footer/Footer';
import Header from '../layouts/Header/Header';
import axios from 'axios';


function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export class Comic extends Component {

  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      props,
      objectdetail: []
    };
    // console.log(this.state);
    // this.componentDidMount();

  }

  componentDidMount = () => {
    // const { keyword } = this.props;
    // console.log(keyword);
    // console.log(this.state.props.keyword);
    axios.get(`http://gateway.marvel.com/v1/public/comics/${this.state.props.params.id}?ts=1&apikey=1a0671e3d28eb43635377754f0572915&hash=a2b08b72060432c20ab8c14a82a2ad72`)
      .then(res => {
        const data = res.data.data.results[0];
        this.setState({
          props: this.state.props, objectdetail: {
            ...data,
          }
        }, () => {
          // console.log(this.state.objectdetail);
        })
        // console.log(data);
        // console.log(this.state);
      })
      .catch()
    //  console.log(this.state);

  }


  render() {
    // console.log(this.props);
    // console.log(this.state);
    // console.log(this.state.objectdetail);
    // console.log(this.state.objectdetail.thumbnail);
    // const a = this.state.objectdetail.thumbnail;
    // const {path} = this.state.objectdetail.thumbnail;
    // console.log(path);

    // console.log(this.state.objectdetail.thumbnail.path);

    return (
      <div>
        <Header />
        {/* <h1>{keyword} {this.props.params.id}</h1> */}
        {/* <h1>{this.state.objectdetail.thumbnail?.path}</h1> */}
        <div className='Detailcard'>
          <Overlay img={`${this.state.objectdetail.thumbnail?.path}.${this.state.objectdetail.thumbnail?.extension}`} />
          <div className='Detailcard-content'>
            <div className='Detailcard-img'>
              <img src={`${this.state.objectdetail.thumbnail?.path}.${this.state.objectdetail.thumbnail?.extension}`} alt="" />
            </div>
            <div className='Detailcard-text'>
              <h3 className='Detailcard-text-title Detailcard-text-flex2'>
                {this.state.objectdetail.title}
              </h3>
              <div className='Detailcard-text-flex2'>
                <Title1 title="Published:" subtitle={this.state.objectdetail.modified} />
              </div>
              <div className='Detailcard-text-flex1'>
                <Title1 title="Writer:" subtitle="Name 1" />
              </div>
              <div className='Detailcard-text-flex1'>
                <Title1 title="Penciler:" subtitle="Name 1" />
              </div>
              <div className='Detailcard-text-flex1'>
                <Title1 title="Cover Artist:" subtitle="Name 1" />
              </div>
              <p className='Detailcard-text-description Detailcard-text-flex2'>
                {(this.state.objectdetail.description !== '' ? this.state.objectdetail.description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")}
              </p>
              <Link to="/#"><span className='Detailcard-text-button'>See Variant Covers</span></Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


export default withParams(Comic)