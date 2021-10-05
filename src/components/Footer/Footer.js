import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>
                <p style={{ backgroundColor: 'lightgray', margin: '0px', paddingTop: '10px', height: '50px' }}>e-School © 2021 All Rights Reserved. <Link href="#">Terms & conditions</Link> and <Link href="#">Privacy policy</Link></p>
            </footer>
        </div>
    );
};

export default Footer;