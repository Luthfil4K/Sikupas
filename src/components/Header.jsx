import React from "react";
import { Grid, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = ({ title }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-gray-800 bg-opacity-35 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="bg-gray-700 mx-auto py-4 px-4 sm:px-8 lg:px-8">
        <Grid container spacing={4} sx={{ display: "flex" }}>
          <Grid item xs={6}>
            <h1 className="text mt-2 font-semibold text-gray-200 uppercase">{title}</h1>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", alignItems: "end", justifyContent: "end" }}
          >
            <Avatar
              alt="Profile"
              src="/Asset-2.png"
              sx={{
                width: 36,
                height: 36,
                backgroundColor: "white",
                cursor: "pointer",
              }}
              onClick={handleClick}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                sx: {
                  width: 300,
                },
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default Header;
