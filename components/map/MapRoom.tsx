import { Typography } from "@mui/material";
import { Room } from "../../utils/mapGenerator";

interface MapRoomProps {
  room?: Room;
}

const MapRoom = ({ room }: MapRoomProps) => {
  return (
    <span style={{ width: '120px', height: '100px', padding: '6px', border: '1px solid #ccc', display: 'inline-block' }}>
      <Typography variant="subtitle2">{room.name}</Typography>
    </span>
  )
}

export default MapRoom;
