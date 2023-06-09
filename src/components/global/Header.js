



const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-transparent navbar-dark">
                <div class="container">
                    <a class="navbar-brand" href="#"><img class="logo" src={"images/logo.png"} alt="logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse nav-adjust" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Why Devsy</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">AI</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Partner and Perks</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Jobs</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Apply as Talent</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#"><b>Login</b></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link hire-btn" href="#"><b>Hire Remotely!</b></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;