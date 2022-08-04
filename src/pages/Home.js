//LIBRARIES
import React, { useEffect, useRef, useState } from "react";
import Leaf from "./Leaf";
//import classes from "./app.module.css";
import { Container } from "react-bootstrap";
import GEOS from './data.json';
//UTIL IMPORTS
//import { compare } from './util';

const Home = () => {

    const viewPort = {
        height: "100vh",
        width: "100vw",
        latitude: -41.5275314820192,
        longitude: 173.718680632181,
        zoom: 11
    };

    // const [loaded, setLoaded] = useState(1)
    // const [geojson, setGeojson] = useState(geos)
    // const [data, setData] = useState([])

    const ref = useRef();

    // useEffect(() => {
    //     fetchData()
    // }, [])


    // const fetchData = () => {

    //     if (loaded === 1) {
    //         fetch(
    //             "https://raw.githack.com/datafaust/raw/main/cruise-prototype/hh_2020112300_2020120623_Saturday_02.geojson"
    //         )
    //             .then((response) => response.json())
    //             .then((geojson) => {
    //                 setGeojson(geos);
    //                 setLoaded(2);
    //             });
    //     } else {
    //         fetch(
    //             "https://raw.githack.com/datafaust/raw/main/cruise-prototype/hh_2020112300_2020120623_Saturday_03.geojson"
    //         )
    //             .then((response) => response.json())
    //             .then((geojson) => {
    //                 setGeojson(geojson);
    //                 setLoaded(1);
    //             });
    //     }
    // };

    // const geoFilter = (feature) => {
    //     let ids = [0, 1, 5, 6];
    //     return ids.includes(feature.properties.index_right);
    // };

    // sliceGeo = async (geojson) => {
    //   let res = await L.geoJson(geojson, { filter: this.geoFilter }).addTo(map);
    //   console.log('res', res)
    // }

    return (
        <Container fluid="md" style={{ height: '100%' }}>
            {GEOS && (
                <Leaf
                    setRef={ref}
                    // data={data}
                    // fetchData={fetchData}
                    viewPort={viewPort}
                    geojson={GEOS}
                />
            )}
        </Container>
    );
}

export default Home;
