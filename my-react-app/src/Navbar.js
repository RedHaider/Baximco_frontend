import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Baximco</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" >Tag</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/alarm" >Alarm</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/audit" >Audit</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/charts" >Charts</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
