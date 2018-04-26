import React from "react";

export class HobbyContent extends React.Component {
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
                                <img className="d-block w-100" src="../../img/slider1.jpg" alt="karting1"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../../img/slider2.jpg" alt="karting2"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../../img/slider3.jpg" alt="karting3"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../../img/slider4.jpg" alt="karting4"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../../img/slider5.jpg" alt="karting5"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../../img/slider6.jpg" alt="karting6"/>
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