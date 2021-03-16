import React from 'react';
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading , subtitle) =>(
        <div className="widgets__article">
       <div className="widgets__articleLeft">
       <FiberManualRecordIcon/>
       </div> 
       <div className="widgets__articleRight">
    <h4>{ heading}</h4>
    <p>{ subtitle}</p>
        </div>
            
        </div>   
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
            <h2>Linkedin News</h2>
            <InfoIcon/>
            </div>
            {newsArticle("How to not make monney","Top news - 79K readers")}
            {newsArticle("The end of Coronavirus","Top news - 1.3 M readers")}
            {newsArticle("Hamid El Omari : the Bitcoin maker","Top news - 5.1 M readers")}
            {newsArticle("Taghazout : the place to live","Top news - 45K reader")}
            {newsArticle("The fishing therapy","Top news - 356K readers")}
        </div>
    )
}

export default Widgets
