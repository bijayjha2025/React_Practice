
function Sidebar({items, onSelect, selected, isOpen}) {

    return (
    <aside className= {`sidebar ${isOpen ? "sideBarOpened" : "sideBarClosed"}`}>
      {isOpen && (
        <>
          <h2 className="sideBarTitle">Menu</h2>
          <ul className="menuList">
            {items.map((item) => (
              <li className="menuItem" key={item}>
                <button
                  onClick={() => onSelect(item)}
                  className={`menuItemButton ${selected === item ? 'active' : ""}`}>{item}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
    );
}

export default Sidebar;