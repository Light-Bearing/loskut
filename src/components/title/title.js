import React,{Component} from 'react';
import Contacts from '../contacts/contacts'
import './title.less'
class Title extends Component{
    render() {
        return (
            <nav class="container">
      <a class="logo" href="">
        <span>М</span>
        <span>Е</span>
        <span>Р</span>
        <span>Н</span>
        <span>Ы</span>
        <span>Й</span>
        <span> </span>
        <span>Л</span>
        <span>О</span>
        <span>С</span>
        <span>К</span>
        <span>У</span>
        <span>Т</span>
      </a>
      <div class="nav-toggle">
            <Contacts />
      </div>
      
    </nav>

        )
    }
}

export default Title;