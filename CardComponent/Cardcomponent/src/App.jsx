
import Card from "./Card.jsx";
import "./app.css";
import "./index.css";

function App(){

  const troops = [
    {
      id:1,
      name: "Dragon",
      nickname: "Sky Inferno",
      description: "The Dragon is a flying beast of pure destruction, unleashing scorching fire that melts defenses in seconds while its massive health and overwhelming power dominate the skies and turn enemy bases into ashes.",
      imageUrl: "/Images/dragon.jpg",
    },
    {
      id:2,
      name: "Archer",
      nickname: "Shadow Arrow",
      description: "Swift and precise, the Archer rains down deadly arrows from a safe distance, using her unmatched accuracy and agility to chip away at defenses long before they can threaten her presence on the battlefield.",
      imageUrl: "/Images/archer.jpg"
    },
    {
      id:3,
      name: "Wizard",
      nickname: "Flame Sage",
      description: "Harnessing volatile magical energy with effortless mastery, the Wizard hurls blazing fireballs that explode on impact, obliterating groups of enemies and defenses in moments while lighting the battlefield with sheer arcane destruction.",
      imageUrl: "/Images/wizard.jpg"
    },
    {
      id:4,
      name: "Pekka",
      nickname: "Iron Reaper",
      description: "A towering machine of unmatched strength, P.E.K.K.A marches forward with unstoppable force, slicing through walls, troops, and defenses alike as her brutal power turns even the toughest enemy structures into shattered debris.",
      imageUrl: "/Images/pekka.jpg"
    }
    ];
     
    return(
    <>
      <div className="appContainer">
         <header className="appHeader">
         <h1>Our Favorites</h1>
         <p>Know these veterans</p>
         </header>
        <div className="cardContainer">
          {
            troops.map(member =>(
              <Card
              key={member.id}
              name={member.name}
              nickname={member.nickname}
              description={member.description}
              imageUrl={member.imageUrl}
              />
            ))}

        </div>
      </div>
    
    </>
  );
}

export default App