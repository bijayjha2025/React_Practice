

function Content({ selected }) {
  return (
    <main>
      <div>
        <h2>{selected}</h2>
        
        <div>
          <h3>Welcome to {selected}!</h3>
          <p>
            You're currently viewing the <strong>{selected}</strong> section.
            Click on different menu items in the sidebar to switch between sections.
          </p>
        </div>

        <div>
          <div>
            <h4>Card 1</h4>
            <p>
              This is some sample content in the {selected} section.
            </p>
          </div>
          <div>
            <h4>Card 2</h4>
            <p>
              More components can be fit
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;