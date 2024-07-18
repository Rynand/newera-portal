import React, { useContext, Fragment } from 'react';
import './App.scss';
import Logo from './logo.png';
import { UserContext } from './user-context/UserContext';
import CssBaseline from '@mui/material/CssBaseline';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import Navigation from './navigation/Navigation';


import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

const topNavItems =[
  {
    icon: <AccountCircleRoundedIcon />,
    label: 'Profile',
    link: '/profile'
  }
];

const navItems = [
  {
    icon: <CodeRoundedIcon />,
    label: 'Example',
    link: '/example',

  },
]

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="app-container">
      <CssBaseline />
      {!user && <Fragment>
        <PublicRoutes />
      </Fragment>}
      {user && <Fragment>
        <Navigation logo={Logo} title={"New Era"} topNavItems={topNavItems} navItems={navItems} >

          <PrivateRoutes />
        </Navigation>
      </Fragment>}
    </div>
  );
}

export default App;
