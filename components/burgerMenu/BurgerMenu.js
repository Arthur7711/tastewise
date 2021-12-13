import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MenuIcon from "@mui/icons-material/Menu";

export default function BurgerMenu() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            style={{ background: "#ee624d" }}
            variant="contained"
            {...bindTrigger(popupState)}
          >
            <MenuIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Solutions</MenuItem>
            <MenuItem onClick={popupState.close}>Resources</MenuItem>
            <MenuItem onClick={popupState.close}>About</MenuItem>
            <MenuItem onClick={popupState.close}>Pricing</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
