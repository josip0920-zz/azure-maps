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
                scale: ["black", "red"],
                steps: 5,
                mode: "q",
                style: function (feature) { // Style option
                    console.log(feature)
                    return {
                        'weight': 1,
                        'color': 'black',
                        'fillColor': 'green',
                        'fillOpacity': 0.3
                    }
                },
                onEachFeature: function (feature, layer) {
                    layer.bindPopup(
                        `<div>` +
                        `<img src="${require(`../assets/img/${feature.properties.img}`).default}" width="250" height="160">` +
                        `<div class="contents">` +
                        `<h2>${feature.properties.name}</h2>` +
                        `<p>TOTAL : ${feature.properties.TOTAL}km<sup>2</sup></p>` +
                        `</div>` +
                        `</div>`
                    );
                },
            }).addTo(map);
        }
    }, [props.geojson]);

    return null;
}

export default Choro;
