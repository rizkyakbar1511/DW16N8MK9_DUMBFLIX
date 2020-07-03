import React, { Component } from 'react';
import textlogo from './assets/img/thewitcher.png';
import {Link} from 'react-router-dom';
import {tvSeriesData} from './assets/data-source';
import './assets/css/Jumbotron.css';

export class Jumbotron extends Component {
    constructor(){
        super();
        this.state = {
            isLogin: true
        }
    }
    
    render() {
        let watchBtn;
        if(this.state.isLogin){
            watchBtn = (
                <Link to={"detail-tv-series/"+tvSeriesData[0].id}>
                    <button className="btn-watch">WATCH NOW !</button>
                </Link>
            )
        }else{
            watchBtn = (
                <button type="button" className="btn-watch" data-toggle="modal" data-target="#modal-login">WATCH NOW !</button>
            )
        }
        return (
            <div className="jumbotron jumbotron-fluid jumbotron-main">
                <div className="container-jumbotron">
                    <img className="lead" src={textlogo} alt="text-witcher"/>
                    <p className="lead">Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beast</p>
                    <div className="second">
                        <p className="p-year">2019</p>
                        <p className="p-category">TV Series</p>
                    </div>
                    {watchBtn}
                </div>
            </div>
        )
    }
}

export default Jumbotron
