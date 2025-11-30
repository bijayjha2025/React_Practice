

function Content({ selected }) {
  return (
    <main className="content">
      <div className="innerContent">
        <h2 className="pageTitle">{selected}</h2>
        
        <div className="card">
          <h3 className="cardTitle">Welcome to {selected}!</h3>
          <p className="cardText">
            You're currently viewing the <strong>{selected}</strong> section.
            Click on different menu items in the sidebar to switch between sections.
          </p>
        </div>

        <div className="cardGrid">
          <div className="card">
            <h4 className="cardSubtitle">Card 1</h4>
            <p className="cardText">This is some sample content in the {selected} section.</p>
          </div>

          <div className="card">
            <h4 className="cardSubtitle">Card 2</h4>
            <p>More components can be fit</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;