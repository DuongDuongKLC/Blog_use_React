export const Name = (props) => {
    return(
        <div className="bg-success py(150) text-center ff(Pacifico)">
            <h1 class="fz(7) c(Blue)"> Rizwan Khan </h1>
        </div>
    )
}
export const Intro = (props) => {
    return(
        <div class="bg-warning d-flex flex-row">
            <nav class="nav col-9">
                <a href="http://" class="nav-link fw(b)"> Home </a>
                <a href="http://" class="nav-link fw(b)"> About US</a>
                <a href="http://" class="nav-link fw(b)"> Post</a>
                <a href="http://" class="nav-link fw(b)"> Contact Us</a>
            </nav>
            <form class="form-inline">
                <input class="form-control form-control-sm mr-3" type="text" placeholder="Search" aria-label="Search" />
                <i class="fas fa-search" aria-hidden="true"></i>
            </form>
        </div>
    )
}