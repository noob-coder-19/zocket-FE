import {
  AppBar,
  Badge,
  Button,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import RedeemIcon from "@mui/icons-material/Redeem";
import UserAvatar from "./UserAvatar";

const TopBar = () => {
  const [notifications, setNotifications] = useState(0);
  const [gift, setGift] = useState(0);

  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar disableGutters>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ px: 4 }}
            gap={2}
          >
            <Grid item>
              <Typography variant="caption" sx={{ color: "black" }}>
                Free Trial ends in 2 days
              </Typography>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgba(242, 154, 46, 0.1)",
                  color: "rgba(255, 140, 0, 1)",
                  fontSize: "0.75rem",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "rgba(242, 154, 46, 0.1)",
                  },
                }}
                disableElevation
                disableRipple
                disableFocusRipple
                size="small"
              >
                Buy Plan
              </Button>
            </Grid>

            <Grid item>
              <Badge color="error" variant="dot" invisible={notifications}>
                <NotificationsNoneIcon
                  sx={{ color: "black" }}
                ></NotificationsNoneIcon>
              </Badge>
            </Grid>

            <Grid item>
              <Badge color="error" variant="dot" invisible={gift}>
                <RedeemIcon sx={{ color: "black" }}></RedeemIcon>
              </Badge>
            </Grid>

            <Grid item>
              <UserAvatar></UserAvatar>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
