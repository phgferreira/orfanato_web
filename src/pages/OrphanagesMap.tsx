import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import MapMarker from '../img/map_marker.svg';
import '../css/pages/orphanages-map.css'

function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={MapMarker} alt="Happy"/>

                    <h2>Escolha um organato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Rio de Janeiro</strong>
                    <span>Petrópolis</span>
                </footer>
            </aside>

            <Map center={[-22.507995,-43.1720587]} zoom={17} style={{ width: '100%', height: '100%' }}>
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>
            
            <Link to="/app" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;