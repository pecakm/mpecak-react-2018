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
                            &rArr; Strona internetowa <a href="http://mpecak.pl" target="_blank" rel="noopener noreferrer">mpecak.pl</a>
                        </p>
                        <p>
                            &rArr; Aplikacja internetowa <a href="http://mpecak.pl/dailynote/index.html" target="_blank" rel="noopener noreferrer">mpecak.pl/dailynote</a>
                        </p>
                        <p>
                            &rArr; Strona internetowa <a href="http://szukamodpowiedzi.pl" target="_blank" rel="noopener noreferrer">szukamodpowiedzi.pl</a>
                        </p>
                        <p>
                            &rArr; Gra przeglądarkowa <a href="http://mpecak.pl/pushthebutton/index.php" target="_blank" rel="noopener noreferrer">"Push The Button"</a>
                        </p>
                    </div>
                    <div className="section">
                        Już niedługo pojawi się tutaj kolejny projekt... ;)
                    </div>
                </div>
            </CSSTransitionGroup>
        </div>
    );
}