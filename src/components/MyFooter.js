import React from 'react';
import { Container} from 'react-bootstrap';

function MyFooter() {
    return (
        <footer className="text-center text-white" style={{ backgroundColor: '#21081a' }}>
            <Container className="p-4">
                NBA APP
            </Container>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright =>
                <a className="text-white text-decoration-none" href="https://furkanyildirim.be/">
                     MyPage
                </a>
            </div>
        </footer>
    );
}

export default MyFooter;
