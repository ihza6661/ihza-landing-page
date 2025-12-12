import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Ihza Mahendra. <br /> All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
