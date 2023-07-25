function Layout(props) {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                    </div>
                </nav>
            </header>
            <main>
                <h1>Test</h1>
                <p>Test</p>
                {props.children}
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Layout
