import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export const CVContent = () => {
    return (
        <div className="container-fluid pageContent">
            <CSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
                <div className="pageHeader">
                    Curriculum Vitae
                </div>
                <hr/>
                <div className="section">
                    <span className="sectionHeader">Doświadczenie zawodowe:</span>
                    <p>
                        <b>luty 2019 - obecnie<br/>
                        Frontend Developer</b><br/>
                        MUG - Creative Software House<br/>
                        Krótki opis stanowiska:<br/>
                        Tworzenie aplikacji internetowych w oparciu o technologie frontendowe
                    </p>
                    <p>
                        <b>maj 2018 - obecnie<br/>
                        Freelancer - właściciel marki</b><br/>
                        IT Pulse<br/>
                        Krótki opis stanowiska:<br/>
                        Tworzenie rozwiązań wykorzystujących technologię internetową
                    </p>
                    <p>
                        <b>czerwiec 2017 - wrzesień 2018<br/>
                        iOS Developer</b><br/>
                        Mood Up Sp. z o.o.<br/>
                        Krótki opis stanowiska:<br/>
                        Tworzenie oraz rozwijanie aplikacji mobilnych na urządzenia z systemem iOS
                    </p>
                    <p>
                        <b>listopad 2016<br/>
                        Przedstawiciel na Międzynarodowych Targach Poznańskich</b><br/>
                        Automobilklub Leszczyński<br/>
                        Krótki opis stanowiska:<br/>
                        Przedstawicielstwo Automobilklubu Leszczyńskiego na MTP 'Retro Motor Show'
                    </p>
                    <p>
                        <b>maj 2013 - październik 2016<br/>
                        Inżynier wyścigowy</b><br/>
                        AMO Sportsystem<br/>
                        Krótki opis stanowiska:<br/>
                        Praca z młodymi zawodnikami w sporcie kartingowym, mechanik, driver's coach
                    </p>
                    <p>
                        <b>grudzień 2015 - styczeń 2016<br/>
                        Wprowadzanie asortymentu do sklepu internetowego</b><br/>
                        Eurokarting S.C.<br/>
                        Krótki opis stanowiska:<br/>
                        Wprowadzanie asortymentu firmy do sklepu internetowego oraz pomoc przy inwentaryzacji
                    </p>
                    <p>
                        <b>czerwiec 2013 - lipiec 2013<br/>
                        Student-praktykant</b><br/>
                        Interbell Sp. z o.o.<br/>
                        Krótki opis stanowiska:<br/>
                        Obsługa klienta w serwisie telefonów komórkowych, pomoc w dziale księgowości, prowadzenie profilu firmy na portalu Facebook
                    </p>
                </div>
                <div className="section">
                    <span className="sectionHeader">Znajomość technologii:</span>
                    <p>
                        ReactJS<br/>
                        Angular 6 (podstawy)<br/>
                        Node.js/Express.js (podstawy)<br/>
                        MongoDB<br/>
                        Swift, Objective-C<br/>
                        Inne: GIT, jQuery, podstawy SQL, WordPress, Jira
                    </p>
                </div>
                <div className="section">
                    <span className="sectionHeader">Znajomość języków obcych:</span>
                    <p>
                        Język angielski: poziom B2
                    </p>
                </div>
                <div className="section">
                    <span className="sectionHeader">Wykształcenie:</span>
                    <p>
                        <b>październik 2016 - obecnie<br/>
                        Collegium Da Vinci</b><br/>
                        Kierunek: informatyka, studia inżynierskie<br/>
                        Specjalizacja: Aplikacje internetowe i mobilne<br/>
                        Poziom wykształcenia: inżynier
                    </p>
                    <p>
                        <b>wrzesień 2011 - czerwiec 2016<br/>
                        Uniwersytet Ekonomiczny w Poznaniu</b><br/>
                        Kierunek: zarządzanie<br/>
                        Specjalizacja: zarządzanie przedsiębiorstwami<br/>
                        Poziom wykształcenia: licencjat
                    </p>
                </div>
                <div className="section">
                    <span className="sectionHeader">Organizacje, aktywności i stowarzyszenia:</span>
                    <p>
                        <b>wrzesień 2018 - obecnie<br/>
                        Collegium Da Vinci</b><br/>
                        Dodatkowe informacje:<br/>
                        Członek komisji dyscyplinarnej CDV
                    </p>
                    <p>
                        <b>czerwiec 2002 - obecnie<br/>
                        Automobilklub Leszczyński</b><br/>
                        Dodatkowe informacje:<br/>
                        Członek Automobilklubu Leszczyńskiego, członek Kadry Narodowej Polskiego Związku Motorowego w Sporcie Kartingowym w latach 2005 - 2010
                    </p>
                    <p>
                        <b>styczeń 2017 - czerwiec 2017<br/>
                        Collegium Da Vinci</b><br/>
                        Dodatkowe informacje:<br/>
                        Czynna pomoc przy tworzeniu start-upowego projektu aplikacji internetowej (wykorzystanie technologii Ruby on Rails oraz Angular2)
                    </p>
                </div>
                <div className="section">
                    <span className="sectionHeader">Zainteresowania:</span>
                    <p>
                        Motorsport (głównie wyścigi samochodowe, karting, żużel)
                    </p>
                </div>
            </CSSTransitionGroup>
        </div>
    );
}