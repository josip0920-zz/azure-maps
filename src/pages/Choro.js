import { useEffect, useState } from "react";
import { useLeaflet } from "react-leaflet";
import L from "leaflet";
import "leaflet-choropleth";

function Choro(props) {
    const { map } = useLeaflet();
    const [choropleth, setChoropleth] = useState(null)
    const { search, geojson } = props;

    useEffect(() => {
        if (Object.keys(geojson).length > 0) {
            if (choropleth) choropleth.clearLayers();
            const _chorop = L.choropleth(geojson, {
                valueProperty: "DIFF",
                scale: ["black", "red"],
                steps: 5,
                mode: "q",
                style: function (feature) { // Style option
                    console.log(search, feature.properties.name)
                    if (search && String(feature.properties.name).toLowerCase().search(String(search).toLowerCase()) != -1) {
                        return {
                            'weight': 1.5,
                            'color': 'red',
                            'fillColor': 'blue',
                            'fillOpacity': 0.4
                        }
                    } else {
                        return {
                            'weight': 1,
                            'color': 'black',
                            'fillColor': 'green',
                            'fillOpacity': 0.3
                        }
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
            setChoropleth(_chorop);
        }
    }, [geojson, search]);

    return null;
}

export default Choro;
