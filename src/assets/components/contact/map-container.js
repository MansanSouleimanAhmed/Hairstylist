import React, {Component} from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import ImageIcon from "../../img/salon-map-icon.png";
import L from "leaflet";

let myIcon = L.icon({
    iconUrl: ImageIcon,
    iconSize: [20, 30],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
});

export class MapContainer extends Component {
    state = {
        lat: 51.51354,
        lng: -0.11966,
        zoom: 70,
    };

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <Map
                    className={"map-item"}
                    center={position}
                    zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={myIcon}>
                        <Popup>
                            {"Come to us, you won't regret it."} <br />
                            {
                                "159 Drury Ln, Holborn, London WC2B 5QG, United Kingdom"
                            }
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}

export default MapContainer;
