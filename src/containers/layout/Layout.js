import React from 'react';

import { Header } from '../../components/header/Header';

export const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            { children }
        </div>
    );
};
