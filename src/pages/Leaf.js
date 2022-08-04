import React from "react";
import { Map, TileLayer } from "react-leaflet";
import classes from "./leaf.module.css";
import Choro from "./Choro";

const Leaf = (props) => {
    const { setRef, viewPort, geojson } = props;
    return (
        <Map
            ref={setRef}
            center={[viewPort.latitude, viewPort.longitude]}
            zoom={viewPort.zoom}
            className={classes.map}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Choro geojson={geojson} />
        </Map>
    );
}

export default Leaf;
