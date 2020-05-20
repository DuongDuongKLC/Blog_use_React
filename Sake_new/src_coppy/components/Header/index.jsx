export const Header = (props) => {
    return(
        <header className="row">
            <nav class="nav col-9 p-2 pf-3">
                <a class="nav-link active fw(b)" href="#"> Home </a>
                <a class="nav-link fw(b)" href="#">About Us</a>
                <a class="nav-link fw(b) " href="#">Contact Us</a>
            </nav>
            <div class="nav justify-content-end col-3 p-2">
                <a href="http://" class="nav-link fw(b)"> Ke lam Chuyen</a>
            </div>
        </header>
    )
}