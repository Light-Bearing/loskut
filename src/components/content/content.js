import React,{Component} from 'react';

import data from '../data/data';
import Card from './card';

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

    shiftArray (arr, cnt) {
        return arr.slice(cnt).concat(arr.slice(0,cnt));
    }

    nextProperty () {
        let arr1 = this.state.data1.slice();
        arr1 = this.shiftArray(arr1, 1) 
        this.setState({data1:arr1})
    }

    prevProperty () {
        let arr1 = this.state.data1.slice();
        arr1 = this.shiftArray(arr1, -1) 
        this.setState({data1:arr1})
    }

    render() {
        const {properties,property} = this.state;
        return (
            <div className="sliderApp">
                <button class="arrow prev"   onClick={()=>this.prevProperty()} >⇦</button>
                <button class="arrow next"onClick={()=>this.nextProperty()}>⇨</button>
                <div className="carusel">
                    <div className="col">
                        <div  className={`cards-slider active-slide-3`}>
                            <div className="cards-slider-wrapper"
                             style={{
                                'transform': `translateX(-${Math.floor(properties.length/2)*(100/properties.length)}%)`
                            }}
                            >
                                {
                                    this.state.data1.map((property,positions)=>  <Card key={property.id} property={property} center ={Math.floor(properties.length/2)} position= {positions}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Content;