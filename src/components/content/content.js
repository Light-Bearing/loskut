import React,{Component} from 'react';
import Slider from "react-slick";
import data from '../data/data';
import Card from './card';

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

class Content extends Component{

    constructor (props){
        super(props);
        this.state = {
            data1: data.properties,
            properties: data.properties,
            // property: data.properties[3%data.properties.length],
        };
        this.currentIndex = 3;
    }
    render() {
        const {properties,property} = this.state;

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <div>
                <h2> Примеры товара:</h2>
                <Slider {...settings}>
                    {this.state.data1.map((property,positions)=> <div> <h3>{positions}</h3></div>)}
                </Slider>
            </div>
        )
    }
}

export default Content;