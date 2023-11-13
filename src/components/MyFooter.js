// MyFooter.js
import React from 'react';

function MyFooter() {
    return (
        <footer className="text-center text-white" style={{ backgroundColor: '#21081a', position: 'fixed', bottom: 0, width: '100%' }}>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright =>
                <a className="text-white text-decoration-none" href="https://furkanyildirim.be/">
                    <span
                        className="hover-text"
                        style={{ cursor: 'pointer', color: 'white', transition: 'color 0.3s ease-in-out' }}
                        onMouseOver={(e) => e.target.style.color = 'yellow'}
                        onMouseOut={(e) => e.target.style.color = 'white'}
                    >
                        MyPage
                    </span>
                </a>
            </div>
        </footer>
    );
}

export default MyFooter;
