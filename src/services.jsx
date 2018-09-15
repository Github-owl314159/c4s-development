import React from 'react';
import Service from './service';
import './styles/services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from './Modal';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class Services extends React.Component {

    render() {

        const styles = {
            root: {
                backgroundColor: 'rgb(206,206,206)',
                boxShadow: 'none',
            },
            expandIcon: {
                top: "18%",
                right: "5%",
            }
        }
        return (
            <div className='services' id='services'>

                <Service>
                    <div className='services-it_umzug'>
                        <ExpansionPanel style={{
                            boxShadow: 'none',
                            backgroundColor: 'rgb(226,226,226)',
                        }}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <a className='services-trigger_area_umzug'>
                                    <h2 id='services-h2_umzug'>
                                        Unser Service für IT-Umzug:<hr></hr>
                                    </h2>
                                    <FontAwesomeIcon icon="people-carry" className='peoplecarry' />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo assumenda a deleniti dolorem eaque. Repudiandae?
                            </p>
                                </a>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div id="services-umzug_sub">
                                    <h2>Wir wissen worauf es bei einem IT-Umzug ankommt!</h2>
                                    <p>Ein IT-Umzug, ob der eines Rechenzentrums oder der von Arbeitsplatzrechnern, ist in erster Linie
                                        eine IT-technische
                                        aber auch eine speditionstechnische und organisatorische Herausforderung. Damit Sie sich zu 100
                                        Prozent darauf
                                        verlassen können, dass nach dem Umzug alles genauso gut läuft wie vorher, sollten Sie für Ihr
                                        Projekt einen
                                        erfahrenen Partner engagieren – ob Sie das gesamte Umzugsprojekt outsourcen wollen oder lediglich
                                        qualifizierte
                    Beratung zur Umzugsorganisation benötigen.</p>
                                    <h2>Wir sorgen für geringstmögliche Ausfallzeiten und exakte Termineinhaltung.</h2>
                                    <p>Von Beratung über Planung, Durchführung und Nacharbeiten bis hin zur Abnahme können Sie sich Ihr
                                        individuelles
                                        Servicepaket zusammenstellen. Es spielt dabei keine Rolle, wie Ihre IT-Lösung aussieht, welche
                                        Hard- und
                                        Software Sie einsetzen, zu welcher Branche Ihr Unternehmen gehört. Wir sind international tätig,
                                        branchen-
                    und herstellerunabhängig.</p>
                                    <h2>Wir sind da, wenn Sie uns brauchen.</h2>
                                    <p>Ein IT-Umzug birgt erhebliche Risiken: Datenverluste, Beschädigung wertvoller Hardware,
                                        Ausfallzeiten und Zusatzkosten
                                        könnten Ihr Unternehmen gefährden. Bei uns ist Ihre IT-Landschaft in besten Händen: die Sicherheit
                                        Ihrer
                                        Daten, Hard- und Software wird in allen Phasen des Projektes sichergestellt. Wir überprüfen
                                        beispielsweise
                                        Ihre Backuplösungen, konzipieren die Netzwerkintegration und übernehmen Versicherungs- und
                                        Haftungsleistungen
                    bei Transportschäden.</p>
                                    <h2>Am Ende ist alles wie vorher. Oder besser.</h2>
                                    <p>Und wenn Sie im Rahmen des Umzugs Ihre IT-Landschaft ausbauen oder modernisieren wollen – wir
                                        analysieren Ihre
                    IT bis ins Detail und zeigen Verbesserungspotentiale auf.</p>
                                    <p>Gerne beraten wir Sie hinsichtlich Ihres Umzugs, besichtigen Ihr Rechenzentrum, klären im Vorfeld
                                        den Projektumfang
                    sowie mögliche Vorgehensweisen und erstellen Ihnen ein Angebot.</p>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </Service>

                <Service >
                    <div className='services-it_outsourcing'>
                        <ExpansionPanel style={{
                            boxShadow: 'none',
                            backgroundColor: 'rgb(206,206,206)',
                        }}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <a id='services-trigger_area'>
                                    <h2 id='services-h2_outsourcing'>
                                        Unser Service für IT-Outsourcing:<hr></hr>
                                    </h2>
                                    <FontAwesomeIcon icon="globe" className='globe' />
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit aliquam, deleniti et obcaecati ipsa veniam, odio rem in aut non exercitationem tempore, sint ex eius! Magnam architecto in debitis ad.
                                    </p>
                                </a>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Modal>
                                    <div className='services-it_outsourcing_sub'>
                                        <div className="services-analyse">
                                            <FontAwesomeIcon icon="chart-bar" className='chart-bar' />
                                            <h3>Outsourcing-Analyse
                                        </h3>
                                            <p>Um eine fundierte Entscheidung für oder gegen Outsourcing treffen zu können, müssen alle
                                                Beteiligten
                                                die Chancen, Risiken..
                                        </p>
                                        </div>
                                        <div className="services-bewertung">
                                            <FontAwesomeIcon icon="tasks" className='tasks' />
                                            <h3>Analyse und Bewertung
                                </h3>
                                            <p>Durch systematische Detailanalyse der Outsourcing-Angebote stellen wir objektiv fest, welcher
                        Anbieter...</p>
                                        </div>
                                        <div className="services-überwachung">
                                            <FontAwesomeIcon icon="lock" className='lock' />
                                            <h3>
                                                Planung und Überwachung</h3>
                                            <p>Die Transition ist ein umfassendes Projekt, das die Überführung der bestehenden Services zum
                                                Dienstleister
                                                sicherstellt...
                    </p>
                                        </div>
                                        <div className="services-relationship">
                                            <FontAwesomeIcon icon="users" className='users' />
                                            <h3>Relationship Management</h3>
                                            <p>In der Praxis hat es sich bewährt, uns für eine Übergangszeit von meist einigen Monaten mit der
                                                Aufgabe
                        des “Relationship Management” zu betrauen.</p>
                                        </div>
                                        <div className="services-vertragsende">
                                            <FontAwesomeIcon icon="calendar-times" className='calendar-times' />
                                            <h3>Vertragsende</h3>
                                            <p>Nur in wenigen Fällen ist es ratsam, den bestehenden Outsourcing-Vertrag einfach zu
                        verlängern...</p>
                                        </div>
                                        <div className="services-vertrag">
                                            <FontAwesomeIcon icon="handshake" className='handshake' />
                                            <h3>Outsourcing und Vertrag</h3>
                                            <p>Outsourcing ist eine komplexe Materie, die voller Details steckt. Ein Outsourcing-Vertrag...</p>
                                        </div>
                                    </div>
                                </Modal>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </Service >

                <Service>
                    <div className='services-it_konsolidierung'>
                        <ExpansionPanel style={{
                            boxShadow: 'none',
                            backgroundColor: 'rgb(226,226,226)',
                        }}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <a className='services-trigger_area_konsolidierung'>
                                    <h2 id='services-h2_konsolidierung'>
                                        Unser Service für IT-Konsolidierung:<hr></hr>
                                    </h2>
                                    <FontAwesomeIcon icon="cubes" className='cubes' />
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo assumenda a deleniti dolorem eaque. Repudiandae?
                            </p>
                                </a>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div id="services-konsolidierung_sub">
                                    <h2>Unterstützung bei Konsolidierungsmaßnahmen</h2>
                                    <p>Wir analysieren Ihre IT und stellen dar, welche Ihrer bestehenden Systeme sich zur Konsolidierung
                                        eignen.
                                        Wir planen und realisieren mit Ihnen Konsolidierungsprojekte und helfen Ihnen bei der Auswahl der
                                        geeigneten Maßnahmen, wie Zentralisierung, physische Konsolidierung und Virtualisierung.
                                        Wir beraten Sie bei Auswahl und Gestaltung Ihrer zukünftigen virtuellen und physischen Umgebung.
                                        Wir helfen Ihnen beim Aufbau virtueller Infrastrukturen.
                    Wir unterstützen Sie im Betrieb und Management von virtuellen Serverfarmen.</p>
                                    <h2>Migrationen in virtuelle Umgebungen</h2>
                                    <p>Wir kümmern uns um die sichere und risikofreie Migration von physischen Servern in leistungsfähige
                                        virtuelle Maschinen, inklusive Test und Inbetriebnahme der Transformationsumgebung.
                    Wir schulen und trainieren Ihre Mitarbeiter im Umgang mit der neuen Umgebung.</p>
                                    <h2>Hochverfügbarkeitslösungen</h2>
                                    <p>Ob einfache Redundanz oder High-End-Cluster, wir unterstützen Sie bei Planung, Design und Umsetzung
                    von Hochverfügbarkeitslösungen.</p>
                                    <h2>Virtuelle Infrastrukturen</h2>
                                    <p>Wir planen, designen und realisieren virtuelle Infrastrukturen, wie virtuelle Netze, virtuelle
                    Switche, virtuelle Server und virtueller Storage.</p>
                                    <h2>Komplexität und Kosten reduzieren: IT-Virtualisierung</h2>
                                    <p>Durch Einsatz von Virtualisierungstechnologie können Sie vorhandene IT-Investitionen effektiver
                                        nutzen und schneller auf geänderte Geschäftsanforderungen reagieren.
                                        War sie bisher auf die Mainframe-Welt beschränkt, ist die Virtualisierungstechnologie heute auf
                                        Ihre heterogene Intel-Serverlandschaft anwendbar. Neue Server oder Server-Konfigurationen können in
                                        wenigen Minuten bereit gestellt werden. Ausfallzeiten durch Wartungsarbeiten an Servern werden
                                        praktisch eliminiert. Selbst komplexe Konsolidierungsprojekte können risikofrei und ohne lange
                                        Ausfallzeiten realisiert werden.
                                        Der Hauptvorteil der Server-Virtualisierung ist die enorme Kostensenkung, die mit
                                        Flexibilitätssteigerung, Skalierbarkeit und erhöhter Reaktionsfähigkeit einhergeht. Nachweislich
                                        reduzieren Sie durch Server-Virtualisierung Ihre IT-Gesamtkosten.
                                        Virtualisierungstechnologie ist in vielen Bereichen Ihrer IT-Organisation einsetzbar und kann große
                                        Erfolge erzielen – bei minimalen Investitionen.
                                        Wir erarbeiten mit Ihnen kostengünstige und zukunftsfähige Virtualisierungsszenarien, die den
                    Bedürfnissen Ihrer IT-Situation entsprechen.</p>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </Service>
            </div>
        );
    }
}

export default Services;