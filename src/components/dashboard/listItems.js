import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { useDispatch, useSelector } from "react-redux";
import { selectView } from "../../Services/Actions/actions";
import { tabvalues } from "../../constants";

const YourComponent = () => {
  const dispatch = useDispatch();
  const [selectedButton, setSelectedButton] = useState(tabvalues.dashboard);

  const handleButtonClick = (selectedTab) => {
    setSelectedButton(selectedTab);
    dispatch(selectView(selectedTab));
  };

  return (
    <div>
      <List>
        <ListItemButton
          selected={selectedButton === tabvalues.dashboard}
          onClick={() => handleButtonClick(tabvalues.dashboard)}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={tabvalues.dashboard} />
        </ListItemButton>
        <ListItemButton
          selected={selectedButton === tabvalues.orders}
          onClick={() => handleButtonClick(tabvalues.orders)}
        >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary={tabvalues.orders} />
        </ListItemButton>
        <ListItemButton
          selected={selectedButton === tabvalues.customer}
          onClick={() => handleButtonClick(tabvalues.customer)}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={tabvalues.customer} />
        </ListItemButton>
        <ListItemButton
          selected={selectedButton === tabvalues.reports}
          onClick={() => handleButtonClick(tabvalues.reports)}
        >
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary={tabvalues.reports} />
        </ListItemButton>
        <ListItemButton
          selected={selectedButton === tabvalues.integrations}
          onClick={() => handleButtonClick(tabvalues.integrations)}
        >
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary={tabvalues.integrations} />
        </ListItemButton>
      </List>
    </div>
  );
};

export default YourComponent;
