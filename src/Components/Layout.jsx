import React, { useState, useEffect } from 'react'; 
import classNames from 'classnames';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children}) => (
    <div className="App">
        
        {children}
        

    </div>

);

export default Layout;