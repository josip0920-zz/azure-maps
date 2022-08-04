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
                        `Total ${feature.properties.DIFF} <br>`
                    );
                }
            }).addTo(map);
        }
    }, [props.geojson]);

    return null;
}

export default Choro;
