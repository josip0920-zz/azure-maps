import React, { useMemo, useRef, useState } from "react";
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import FilterListIcon from '@mui/icons-material/FilterList';

import { Container } from "react-bootstrap";

import Leaf from "./Leaf";
import GEOS from './data.json';
import { CInput } from "../components/Styled";

const viewPort = {
    height: "100vh",
    width: "100vw",
    latitude: -41.5275314820192,
    longitude: 173.718680632181,
    zoom: 13
};

const Home = () => {
    const ref = useRef();
    const [searchKey, setSearchKey] = useState('');
    const [checked, setChecked] = useState([]);
    const [showAll, setShowAll] = useState(true)

    const searchedItem = useMemo(() => {
        setChecked([]);

        if (!searchKey) {
            if (showAll) {
                const _item = GEOS.features.map(item => item);
                return _item;
            } else {
                return [];
            }
        }

        const _item = GEOS.features.filter(item => String(item.properties.name).toLowerCase().search(String(searchKey).toLowerCase()) != -1);
        return _item;
    }, [searchKey, showAll])

    const handleCheck = (id) => {
        setChecked(prev => {
            const index = prev.indexOf(id);
            if (index != -1) {
                prev.splice(index, 1);
                return [...prev];
            } else {
                prev.push(id);
                return [...prev];
            }
        })
    }

    return (
        <Container fluid="md" style={{ height: '100%' }}>
            <Stack direction="row" sx={{ height: '100%' }}>
                <Stack sx={{ width: 300 }}>
                    <Stack flexGrow={1}>
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
                        <List component="nav" aria-label="mailbox folders">
                            <Divider />
                            {
                                searchedItem.map((item, index) => (
                                    <Stack key={index}>
                                        <ListItem button onClick={() => handleCheck(item.properties.id)}>
                                            <Checkbox checked={Boolean(checked.indexOf(item.properties.id) != -1)} />
                                            <Typography sx={{ mt: '1px' }}>{item.properties.name}</Typography>
                                        </ListItem>
                                        <Divider />
                                    </Stack>

                                ))
                            }
                        </List>

                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent='space-between'
                        sx={{
                            p: 2,
                            '& button': {
                                color: 'green'
                            }
                        }}
                    >
                        <Button variant="text" onClick={() => setShowAll(false)}>HIDE ALL</Button>
                        <Button variant="text" onClick={() => setShowAll(true)}>SHOW ALL</Button>
                    </Stack>
                </Stack>
                {GEOS && (
                    <Leaf
                        setRef={ref}
                        viewPort={viewPort}
                        geojson={GEOS}
                        search={checked}
                    />
                )}
            </Stack>
        </Container >
    );
}

export default Home;
