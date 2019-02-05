import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import me from '../img/me.JPG';

export const AboutMeContent = () => {
    return (
        <div className="container-fluid">
            <CSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
                <div className="row">
                    <div className="col-md imageDiv">
                        <img src={me} className="img-fluid" alt="Me" />
                    </div>
                    <div className="col-md aboutMeText justified">
                        <p>
                            Cześć, nazywam się Mikołaj Pęcak i jestem studentem informatyki na poznańskiej uczelni Collegium Da Vinci. Jestem programistą, rozwijam się przede wszystkim w kierunku tworzenia <b>aplikacji internetowych oraz mobilnych</b>. Z wielką pasją spełniam się w moich zainteresowaniach, będąc jednocześnie <b>właścicielem marki <a href="http://itpulse.pl" target="_blank" rel="noopener noreferrer">IT Pulse</a></b>.
                        </p>
                        <p>
                            Dzięki pracowitości oraz determinacji nabytej podczas wielu lat kariery sportowej bardzo szybko czynię postępy w <b>każdej działalności, której się podejmuję</b>. Osiągając kolejne kamienie milowe, które sobie wyznaczam, z każdym dniem jestem coraz lepszym programistą oraz <b>godnym zaufania przedsiębiorcą</b>. Wierzę, że ciężka praca nad sobą popłaca, a małymi krokami dochodzi się do spektakularnych efektów.
                        </p>
                        <p>
                            Zapraszam do zapoznania się z moją osobą na tej stronie oraz na profilu <a href="https://pl.linkedin.com/in/miko%C5%82aj-p%C4%99cak-1649a612b" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                        </p>
                    </div>
                </div>
            </CSSTransitionGroup>
        </div>
    );
}