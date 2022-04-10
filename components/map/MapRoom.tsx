import { Tooltip, Typography } from "@mui/material";
import { Room } from "../../utils/mapGenerator";
import { v4 as uuidv4 } from 'uuid';

interface MapRoomProps {
  room?: Room;
}

const MapRoom = ({ room }: MapRoomProps) => {
  return (
    <div style={{ width: '120px', height: '100px', padding: '6px', border: '1px solid #ccc', display: 'inline-block' }}>
      <Typography variant="subtitle2">{room.name}</Typography>
      {room.contents.map(content => (
        <Tooltip title={content.description} key={uuidv4()}>
          <Typography variant="caption">{content.type}<br /></Typography>
        </Tooltip>
      ))}
    </div>
  );
}

export default MapRoom;
