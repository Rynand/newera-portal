import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import ExamplePage from '../pages/ExamplePage';

const PublicRoutes = () => {
    return (
        <Routes>
            <Route exact={true} path="/" element={<HomePage />} />
            <Route exact={true} path="/profile" element={<ProfilePage />} />
            <Route exact={true} path="/example" element={<ExamplePage />} />
            <Route exact={true} path="*"
                element={<HomePage />}
            />
        </Routes>
    );
}

export default PublicRoutes;
