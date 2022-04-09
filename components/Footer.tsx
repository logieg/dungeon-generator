import { Divider, Typography } from "@mui/material"

const Footer = () => {
  return (
    <div style={{ position: "relative", bottom: 0, left: 0, right: 0 }}>
      <Divider />
      <div style={{ width: "fit-content", margin: "auto", padding: "20px" }}>
        <Typography variant="subtitle2">
          Created by Incredible Catfish
        </Typography>
      </div>
    </div>
  )
}

export default Footer;
