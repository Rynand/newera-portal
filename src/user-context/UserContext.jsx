import React, { createContext, Fragment, useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const UserContext = createContext({ session: null, user: {} });

const UserProvider = (props) => {
    const [contextDoneLoading, setContextDoneLoading] = useState(false);

    const [session, setSession] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        setContextDoneLoading(false);

        // Fetch the session from the server

        //Testing
        setUser(true);

        setTimeout(() => {
            setContextDoneLoading(true);
        }, 3000);

        return () => {
            setContextDoneLoading(false);
            setSession();
            setUser();
        };
    }, []);

    const getProviders = () => {
        return {
            session,
            user
        }
    }

    return (
        <UserContext.Provider value={getProviders()}>
            {!contextDoneLoading && <Backdrop
                sx={{ color: '#000', zIndex: 9999 }}
                open={!contextDoneLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>}
            {contextDoneLoading && <Fragment>
                {props?.children}
            </Fragment>}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };