import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export const ProjectsContent = () => {
    return (
        <div className="container-fluid pageContent">
            <CSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
                <div className="pageHeader">
                    Wykonane projekty
                </div>
                <hr/>
                <div>
                    <div className="section">
                        <p>
                            &rArr; Aplikacja rozrywkowa (w fazie developerskiej) Angular 6 / Express.js <a href="https://pulcito.com" target="_blank" rel="noopener noreferrer">Pulcito!</a>
                        </p>
                        <p>
                            &rArr; Aplikacja dla przedsiębiorstwa Angular 6 / Express.js <a href="https://ib-raport.pl" target="_blank" rel="noopener noreferrer">IB-Raport</a>
                        </p>
                        <p>
                            &rArr; Aplikacja internetowa ReactJS / Symfony 4 <a href="http://itpulse.pl/ek" target="_blank" rel="noopener noreferrer">Ekspresowa Kawa</a>
                        </p>
                        <p>
                            &rArr; Gra przeglądarkowa Angular 6 (w fazie rozwoju) <a href="https://bitbucket.org/pecakm/ang-game" target="_blank" rel="noopener noreferrer">Ang-Game</a>
                        </p>
                        <p>
                            &rArr; Aplikacja internetowa JS / Firebase <a href="http://mpecak.pl/dailynote/index.html" target="_blank" rel="noopener noreferrer">mpecak.pl/dailynote</a>
                        </p>
                        <p>
                            &rArr; Gra przeglądarkowa PHP <a href="http://mpecak.pl/pushthebutton/index.php" target="_blank" rel="noopener noreferrer">"Push The Button"</a>
                        </p>
                        <p>
                            &rArr; Aplikacja mobilna Swift / Firebase <a href="https://bitbucket.org/pecakm/dailynote-ios" target="_blank" rel="noopener noreferrer">DailyNote</a>
                        </p>
                    </div>
                    <div className="section">
                        Już niedługo pojawi się tutaj kolejny projekt... ;)
                    </div>
                    <div className="section">
                        &rArr; Kody źródłowe niektórych aplikacji udostępniam na moim <a href="https://bitbucket.org/pecakm/" target="_blank" rel="noopener noreferrer">koncie BitBucket</a>
                    </div>
                </div>
                <div className="pageHeader">
                    Projekty WordPress
                </div>
                <hr/>
                <div className="section">
                    <p>
                        &rArr; Strona internetowa <a href="https://mpecak.pl" target="_blank" rel="noopener noreferrer">mpecak.pl</a>
                    </p>
                    <p>
                        &rArr; Strona internetowa kierowcy wyścigowego <a href="http://www.bernacik.pl" target="_blank" rel="noopener noreferrer">www.bernacik.pl</a>
                    </p>
                    <p>
                        &rArr; Strona internetowa <a href="https://dynamech.pl" target="_blank" rel="noopener noreferrer">www.dynamech.pl</a>
                    </p>
                    <p>
                        &rArr; Strona internetowa <a href="http://gabinetpsychologicznyleszno.pl" target="_blank" rel="noopener noreferrer">Gabinet Psychologiczny Leszno</a>
                    </p>
                    <p>
                        &rArr; Strona internetowa <a href="http://wtr.com.pl" target="_blank" rel="noopener noreferrer">WTR Motorsport</a>
                    </p>
                    <p>
                        &rArr; Strona internetowa <a href="http://apartamentynowoczesne.pl" target="_blank" rel="noopener noreferrer">Apartamenty Nowoczesne</a>
                    </p>
                </div>
            </CSSTransitionGroup>
        </div>
    );
}