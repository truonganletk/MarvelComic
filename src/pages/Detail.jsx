// import React from 'react';



// const Detail = ({ keyword }) => {
//   console.log(params);
//   return (
//     <div>
//       <Header />
//       <h1>{keyword} {params.id}</h1>
//       <Footer />
//     </div>
//   )
// }

// export default Detail

import React, { Component } from 'react'
import { useParams , Link } from 'react-router-dom';
import Overlay from '../components/Overlay/Overlay';
import Title1 from '../components/Title/Title1';
import Footer from '../layouts/Footer/Footer';
import Header from '../layouts/Header/Header';


function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export class Detail extends Component {
  state = {
    objectdetail:
    {
      "id": 1011334,
      "name": "3-D Man",
      "description": "",
      "modified": "2014-04-29T14:18:17-0400",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
        "extension": "jpg"
      },
      "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
      "comics": {
        "available": 12,
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/comics",
        "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
            "name": "Avengers: The Initiative (2007) #14"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24571",
            "name": "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/21546",
            "name": "Avengers: The Initiative (2007) #15"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/21741",
            "name": "Avengers: The Initiative (2007) #16"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/21975",
            "name": "Avengers: The Initiative (2007) #17"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22299",
            "name": "Avengers: The Initiative (2007) #18"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22300",
            "name": "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22506",
            "name": "Avengers: The Initiative (2007) #19"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8500",
            "name": "Deadpool (1997) #44"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/10223",
            "name": "Marvel Premiere (1972) #35"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/10224",
            "name": "Marvel Premiere (1972) #36"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/10225",
            "name": "Marvel Premiere (1972) #37"
          }
        ],
        "returned": 12
      },
      "series": {
        "available": 3,
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/series",
        "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
            "name": "Avengers: The Initiative (2007 - 2010)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
            "name": "Deadpool (1997 - 2002)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
            "name": "Marvel Premiere (1972 - 1981)"
          }
        ],
        "returned": 3
      },
      "stories": {
        "available": 21,
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/stories",
        "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/19947",
            "name": "Cover #19947",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/19948",
            "name": "The 3-D Man!",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/19949",
            "name": "Cover #19949",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/19950",
            "name": "The Devil's Music!",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/19951",
            "name": "Cover #19951",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/19952",
            "name": "Code-Name:  The Cold Warrior!",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/47184",
            "name": "AVENGERS: THE INITIATIVE (2007) #14",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/47185",
            "name": "Avengers: The Initiative (2007) #14 - Int",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/47498",
            "name": "AVENGERS: THE INITIATIVE (2007) #15",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/47499",
            "name": "Avengers: The Initiative (2007) #15 - Int",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/47792",
            "name": "AVENGERS: THE INITIATIVE (2007) #16",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/47793",
            "name": "Avengers: The Initiative (2007) #16 - Int",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/48361",
            "name": "AVENGERS: THE INITIATIVE (2007) #17",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/48362",
            "name": "Avengers: The Initiative (2007) #17 - Int",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/49103",
            "name": "AVENGERS: THE INITIATIVE (2007) #18",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/49104",
            "name": "Avengers: The Initiative (2007) #18 - Int",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/49106",
            "name": "Avengers: The Initiative (2007) #18, Zombie Variant - Int",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/49888",
            "name": "AVENGERS: THE INITIATIVE (2007) #19",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/49889",
            "name": "Avengers: The Initiative (2007) #19 - Int",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/54371",
            "name": "Avengers: The Initiative (2007) #14, Spotlight Variant - Int",
            "type": "interiorStory"
          }
        ],
        "returned": 20
      },
      "events": {
        "available": 1,
        "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/events",
        "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
            "name": "Secret Invasion"
          }
        ],
        "returned": 1
      },
      "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=10360233aad651367dc25e4f9973a1d3"
        },
        {
          "type": "wiki",
          "url": "http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=10360233aad651367dc25e4f9973a1d3"
        },
        {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=10360233aad651367dc25e4f9973a1d3"
        }
      ]
    },
  };
  render() {

    // const { keyword } = this.props;
    // console.log(this.props);
    return (
      <div>
        <Header />
        {/* <h1>{keyword} {this.props.params.id}</h1> */}
        <div className='Detailcard'>
          <Overlay img={`${this.state.objectdetail.thumbnail.path}.${this.state.objectdetail.thumbnail.extension}`} />
          <div className='Detailcard-content'>
            <div className='Detailcard-img'>
              <img src={`${this.state.objectdetail.thumbnail.path}.${this.state.objectdetail.thumbnail.extension}`} alt="" width={100} />
            </div>
            <div className='Detailcard-text'>
              <h3 className='Detailcard-text-title Detailcard-text-flex2'>
                {this.state.objectdetail.name}
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


export default withParams(Detail)