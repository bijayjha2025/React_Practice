
function Navbar({title, onToggleSidebar, sidebarOpen, darkMode, onToggleDarkMode}){
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

                <div clasName="navBarRight">
                    <span className="textMessage">Welcome, Guest!</span>
                    <button className="loginButton">Login</button>

                    <button className="darkModeToggle" onClick={onToggleDarkMode}>
                    {darkMode ? "🌙" : "☀"}
                    </button>
                </div>
            </div>
        </div>
        </>

    );
}

export default Navbar