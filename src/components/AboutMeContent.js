import React from 'react';
import me from '../img/me.JPG';

export const AboutMeContent = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md imageDiv">
                    <img src={me} className="img-fluid" alt="Me" />
                </div>
                <div className="col-md aboutMeText justified">
                    <p>
                        Cześć, nazywam się Mikołaj Pęcak i jestem studentem informatyki na poznańskiej uczelni Collegium Da Vinci. Jestem początkującym programistą, z wielką pasją spełniam się w moich zainteresowaniach, z którymi wiążę plany na przyszłość. Najbardziej chciałbym rozwijać się w kierunku programowania <b>aplikacji internetowych oraz mobilnych</b>.
                    </p>
                    <p>
                        Dzięki pracowitości oraz determinacji nabytej podczas wielu lat kariery sportowej bardzo szybko czynię postępy w trudnej dziedzinie programowania. Osiągając kolejne kamienie milowe, które sobie wyznaczam, z każdym dniem jestem coraz lepszym programistą. Wierzę, że ciężka praca nad sobą popłaca, a małymi krokami dochodzi się do spektakularnych efektów.
                    </p>
                    <p>
                        Zapraszam do zapoznania się z moją osobą na tej stronie oraz na profilu <a href="https://pl.linkedin.com/in/miko%C5%82aj-p%C4%99cak-1649a612b" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}