import { DungeonMap } from "../../utils/mapGenerator";
import MapRoom from '../map/MapRoom';

interface MapDisplayProps {
  map: DungeonMap;
}

const MapDisplay = ({ map }: MapDisplayProps) => {
  return (
    <div style={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap' }}>
      {map.rooms.map(room => (
        <>
          <MapRoom room={room} />
          {room.end.x >= map.width && <br />}
        </>
      ))}
    </div>
  )
}

export default MapDisplay;
