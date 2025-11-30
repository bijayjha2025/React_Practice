
function Sidebar({items, onSelect, selected, isOpen}){

    if(!isOpen){
        return <aside> </aside>
    }

    return (
         <aside>
          <h2>Menu</h2>

            {items.map((item) => (
              <li key={item}>
                <button
                  onClick={() => onSelect(item)}>
                  {selected === item ? '>' : ""} {item}
                </button>
              </li>
            ))}
        </aside>
  );
}

export default Sidebar;