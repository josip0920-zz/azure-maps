import React, { useRef } from "react";
import Leaf from "./Leaf";
import { Container } from "react-bootstrap";
import GEOS from './data.json';

const Home = () => {

    const viewPort = {
        height: "100vh",
        width: "100vw",
        latitude: -41.5275314820192,
        longitude: 173.718680632181,
        zoom: 11
    };

    const ref = useRef();

    return (
        <Container fluid="md" style={{ height: '100%' }}>
            {GEOS && (
                <Leaf
                    setRef={ref}
                    viewPort={viewPort}
                    geojson={GEOS}
                />
            )}
        </Container>
    );
}

export default Home;
