import React from "react";
import { Component } from "react";
import '../styles/sidebar.css';
import { SidebarData } from './SidebarData';
import { Link } from "react-router-dom";
import icons from '../components/Images/icons.png';

class Sidebar extends Component {
    render (){
        return (
            <div className= "Sidebar">
            <div  className="logoContainer"  >
                <img src={icons} alt="icon" className="logo" />
                Udemy Inter.school
               
                </div> 

                 <div className="space"></div> 
                 
             {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.className}>
                        <Link to={item.path}>
                        {item.icons}
                        <span>{item.title}</span>
                        </Link>
                    </li>
                )
             })}
            </div>
                
                
        )
    }
}

export default Sidebar