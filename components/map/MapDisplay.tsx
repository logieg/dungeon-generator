import { DungeonMap } from "../../utils/mapGenerator";
import MapRoom from '../map/MapRoom';
import { v4 as uuidv4 } from 'uuid';

interface MapDisplayProps {
  map: DungeonMap;
}

const MapDisplay = ({ map }: MapDisplayProps) => {
  return (
    <div style={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap' }}>
      {map.rooms.map(room => (
        <span key={uuidv4()}>
          <MapRoom room={room} />
          {room.end.x >= map.width && <br />}
        </span>
      ))}
    </div>
  )
}

export default MapDisplay;
