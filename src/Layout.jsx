import logo from './assets/KCG_Logo.png'

function Layout(props) {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                            Klipper Config Generator
                        </a>
                    </div>
                </nav>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
            </footer>
        </>
    )
}

export default Layout
