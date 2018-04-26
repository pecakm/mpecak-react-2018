import React from "react";

export class ProjectsContent extends React.Component {
    render() {
        return (
            <div className="container-fluid pageContent">
                <div className="pageHeader">
                    Wykonane projekty
                </div>
                <hr/>
                <div>
                    <div className="section">
                        <p>
                            &rArr; Strona internetowa <a href="http://mpecak.pl" target="_blank">mpecak.pl</a>
                        </p>
                        <p>
                            &rArr; Aplikacja internetowa <a href="http://mpecak.pl/dailynote" target="_blank">mpecak.pl/dailynote</a>
                        </p>
                        <p>
                            &rArr; Strona internetowa <a href="http://szukamodpowiedzi.pl" target="_blank">szukamodpowiedzi.pl</a>
                        </p>
                        <p>
                            &rArr; Gra przeglądarkowa <a href="http://mpecak.pl/pushthebutton" target="_blank">"Push The Button"</a>
                        </p>
                    </div>
                    <div className="section">
                        Już niedługo pojawi się tutaj kolejny projekt... ;)
                    </div>
                </div>
            </div>
        );
    }
}