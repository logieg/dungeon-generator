import { useState } from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { generateMap, DungeonMap } from "../utils/mapGenerator";
import MapDisplay from '../components/map/MapDisplay';

const Map = () => {
  const [map, setMap] = useState<DungeonMap>();
  const [width, setWidth] = useState(8);
  const [height, setHeight] = useState(8);

  function makeMap() {
    const size = { width: width, height: height };
    const newMap = generateMap({size});
    setMap(newMap);
  }

  return (
    <Box padding={3}>
      <Typography variant="h4">
        Dungeon Map Generator
      </Typography>
      <div style={{ padding: '20px 10px' }}>
        <div>
          <TextField
            type="number"
            label="Width"
            value={width}
            onChange={e => setWidth(parseInt(e.target.value))}
            variant="standard"
          />
          {" "}
          <TextField
            type="number"
            label="Height"
            value={height}
            onChange={e => setHeight(parseInt(e.target.value))}
            variant="standard"
          />
        </div>
        <br />
        <div>
          <Button onClick={makeMap}>
            Generate New Map
          </Button>
          <Button onClick={() => setMap(undefined)}>
            Clear
          </Button>
        </div>
      </div>
      <Divider />
      <br />
      {map ? (
        <>
          <Typography>
            <b>Dungeon Name:</b> {map.name}
          </Typography>
          <Typography>
            <b>Dimensions:</b> {map.width} x {map.height}
          </Typography>
          <br />
          <MapDisplay map={map} />
        </>
      ) : (
        <Typography variant="h5" style={{ width: 'fit-content', margin: 'auto' }}>
          <i>No map data...</i>
        </Typography>
      )}
    </Box>
  )
};

export default Map;
