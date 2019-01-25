import React,{Component} from 'react';
import './App.less';
import Title from './title/title';
import Content from './content/content';
import Contacts from './contacts/contacts';
import Map from './map/map';

class App extends Component{
    render() {
       return <div className="App">
            <Title />
            <Content />
            {/* <Contacts /> */}
            <Map /> 
        </div>;
    }
}

export default App;