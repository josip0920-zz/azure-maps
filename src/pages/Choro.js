import { useEffect } from "react";
import { useLeaflet } from "react-leaflet";
import L from "leaflet";
import "leaflet-choropleth";

function Choro(props) {
    const { map } = useLeaflet();

    useEffect(() => {
        if (Object.keys(props.geojson).length > 0) {
            L.choropleth(props.geojson, {
                valueProperty: "DIFF", // which property in the features to use
                scale: ["white", "red"], // chroma.js scale - include as many as you like
                steps: 5, // number of breaks or steps in range
                mode: "q", // q for quantile, e for equidistant, k for k-means
                //style,
                onEachFeature: function (feature, layer) {
                    layer.bindPopup(
                        `Total ${feature.properties.DIFF}`
                        // feature.properties.incidents.toLocaleString() +
                        // " incidents"
                    );
                }
            }).addTo(map);
        }
    }, [props.geojson]);

    return null;
}

export default Choro;
