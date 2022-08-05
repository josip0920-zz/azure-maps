import { useEffect } from "react";
import { useLeaflet } from "react-leaflet";
import L from "leaflet";
import "leaflet-choropleth";

function Choro(props) {
    const { map } = useLeaflet();

    useEffect(() => {
        if (Object.keys(props.geojson).length > 0) {
            L.choropleth(props.geojson, {
                valueProperty: "DIFF",
                scale: ["white", "red"],
                steps: 5,
                mode: "q",
                onEachFeature: function (feature, layer) {
                    layer.bindPopup(
                        `<div>` +
                        `<img src="${require(`../assets/img/${feature.properties.img}`).default}" width="250" height="160">` +
                        `<div class="contents">` +
                        `<h4>${feature.properties.name}</h4>` +
                        `<p>TOTAL : ${feature.properties.TOTAL}km<sup>2</sup></p>` +
                        `</div>` +
                        `</div>`
                    );
                }
            }).addTo(map);
        }
    }, [props.geojson]);

    return null;
}

export default Choro;
