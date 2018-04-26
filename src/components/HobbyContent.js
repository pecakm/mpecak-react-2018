import React, { Component } from 'react';
import slider1 from '../img/slider1.jpg';
import slider2 from '../img/slider2.jpg';
import slider3 from '../img/slider3.jpg';
import slider4 from '../img/slider4.jpg';
import slider5 from '../img/slider5.jpg';
import slider6 from '../img/slider6.jpg';

export class HobbyContent extends Component {
    render() {
        return (
            <div className="container-fluid pageContent">
                <div className="pageHeader">
                    Hobby
                </div>
                <hr/>
                <div>
                    <div className="section">
                        <span className="sectionHeader">Karting</span>
                        <p>
                            Moją największą pasją i jedynym uzależnieniem jest karting. Zacząłem rozwijać się w tej dyscyplinie w wieku 9 lat. Przez prawie 10 lat czynnie uprawiałem sport kartingowy na poziomie ogólnopolskim, europejskim oraz światowym. Po zakończonej karierze sportowej rozwijałem się dalej jako inżynier wyścigowy, mechanik, trener.
                        </p>
                    </div>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={slider1} alt="karting1"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slider2} alt="karting2"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slider3} alt="karting3"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slider4} alt="karting4"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slider5} alt="karting5"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slider6} alt="karting6"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}