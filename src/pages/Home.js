import React, { useRef, useState } from "react";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import FilterListIcon from '@mui/icons-material/FilterList';

import { Container } from "react-bootstrap";

import Leaf from "./Leaf";
import GEOS from './data.json';
import { CInput } from "../components/Styled";

const Home = () => {
    const [searchKey, setSearchKey] = useState('')

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
            <Stack direction="row" sx={{ height: '100%' }}>
                <Stack sx={{ width: 300 }}>
                    <Stack sx={{ p: 2 }} spacing={2}>
                        <Typography fontWeight={500}>
                            Block Search
                        </Typography>
                        <CInput placeholder="Search" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
                        <Stack direction='row' justifyContent="space-between">
                            <IconButton>
                                <FilterListIcon />
                            </IconButton>
                            <IconButton>
                                <BlurOnIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Stack>
                {GEOS && (
                    <Leaf
                        setRef={ref}
                        viewPort={viewPort}
                        geojson={GEOS}
                        search={searchKey}
                    />
                )}
            </Stack>
        </Container>
    );
}

export default Home;
