import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { selectView } from '../../Services/Actions/actions';

const YourComponent = () => {
  const dispatch = useDispatch();
  const selectedView = useSelector((state) => state.auth.selectedView); // Get the selected view from Redux
  const [selectedButton, setSelectedButton] = useState('Dashboard');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    dispatch(selectView(buttonName));
  };

  return (
    <div>
      <List>
        <ListItemButton
          selected={selectedButton === 'Dashboard'} // Apply selected styling if 'Dashboard' is selected
          onClick={() => handleButtonClick('Dashboard')}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          selected={selectedButton === 'Orders'} // Apply selected styling if 'Orders' is selected
          onClick={() => handleButtonClick('Orders')}
        >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton
          selected={selectedButton === 'Customers'} // Apply selected styling if 'Customers' is selected
          onClick={() => handleButtonClick('Customers')}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>
        <ListItemButton
          selected={selectedButton === 'Reports'} // Apply selected styling if 'Reports' is selected
          onClick={() => handleButtonClick('Reports')}
        >
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
        <ListItemButton
          selected={selectedButton === 'Integrations'} // Apply selected styling if 'Integrations' is selected
          onClick={() => handleButtonClick('Integrations')}
        >
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Integrations" />
        </ListItemButton>
      </List>
      {/* Rest of your component content here */}
    </div>
  );
};

export default YourComponent;
