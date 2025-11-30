
function Navbar({title, onToggleSidebar, sidebarOpen}){
    return(
        <>
        <div className="mainNavBar">
            <div className="navBarContent">
                <div>
                    <button onClick={onToggleSidebar}>
                        {sidebarOpen ? "✕" : "☰"}
                    </button>
                    <h1>{title}</h1>
                </div>
                <div>
                    <span>Welcome, User!</span>
                    <button>Login</button>
                </div>
            </div>
        </div>
        </>

    );
}

export default Navbar