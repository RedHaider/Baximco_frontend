const Navbar = () => {
    return ( 
        <div>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Baximco</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Tag</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link white" href="#">Alarm</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Audit</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Charts</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
     );
}
 
export default Navbar;