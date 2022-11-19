import { Avatar, Box } from "@mui/material";
import React from "react";

const Platform = (props) => {
  const { platform } = props;
  const logo = {
    facebook: "https://www.facebook.com/images/fb_icon_325x325.png",
    youtube:
      "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://youtube.com&size=128",
    google:
      "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://google.com&size=128",
    instagram:
      "https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png",
  };

  return (
    <Box>
      <Avatar alt={platform} src={logo[platform]} />
    </Box>
  );
};

export default Platform;
