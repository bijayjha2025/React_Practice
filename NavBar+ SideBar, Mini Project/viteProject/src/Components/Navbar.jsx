
function Navbar({title, onToggleSidebar, sidebarOpen}){
    return(
        <>
        <div className="mainNavBar">
            <div className="navBarContent">
                <div className="navBarModes">
                    <button onClick={onToggleSidebar} className="menuButtons">
                        {sidebarOpen ? "✕" : "☰"}
                    </button>
                    <h1 className="navBarTitle">{title}</h1>
                </div>
                <div className="navBarRight">
                    <span className="textMessage">Welcome, Guest!</span>
                    <button className="loginButton">Login</button>
                </div>
            </div>
        </div>
        </>

    );
}

export default Navbar