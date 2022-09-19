import axios from "axios";
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import Promo from "../layouts/Promo/Promo";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}
export class Characters extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            props,
            objectdetail: [],
        };
    }
    componentDidMount = () => {
        axios
            .get(
                `http://gateway.marvel.com/v1/public/characters/${this.state.props.params.id}?ts=1&apikey=1a0671e3d28eb43635377754f0572915&hash=a2b08b72060432c20ab8c14a82a2ad72`
            )
            .then((res) => {
                const data = res.data.data.results[0];
                this.setState(
                    {
                        props: this.state.props,
                        objectdetail: {
                            ...data,
                        },
                    },
                    () => {

                    }
                );
                //console.log(data);
            })
            .catch();
    };
    render() {
        return (
            <>
                <Header />
                <div className="Detail_Character">
                    <div className="Detail_content">
                        <div className="Detail_img">
                            <img
                                src={`${this.state.objectdetail.thumbnail?.path}.${this.state.objectdetail.thumbnail?.extension}`}
                                alt=""
                            />
                        </div>
                        <div className="Detail_text">
                            <h1 className="name">{this.state.objectdetail.name}</h1>
                            <p className="description">
                                {this.state.objectdetail.description}
                            </p>
                        </div>
                    </div>
                </div>
                <Promo />
                <Footer />
            </>
        );
    }
}

export default withParams(Characters);
