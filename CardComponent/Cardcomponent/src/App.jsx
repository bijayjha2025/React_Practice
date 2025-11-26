
import Card from "./Card.jsx";
import "./App.css";
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
    },
    {
      id:5,
      name: "Goblin",
      nickname: "Loot Whisperer",
      description: "Driven by an insatiable hunger for treasure, the Goblin dashes toward resources with blistering speed, ignoring every threat that stands in his way. His razor-sharp instincts and unmatched agility make him the most relentless plunderer to ever set foot on the battlefield.",
      imageUrl: "/Images/goblin.jpg"
    },
    {
      id:6,
      name: "Witch",
      nickname: "Soulbinder",
      description: "Shrouded in eerie dark magic, the Witch summons waves of restless skeletons that overwhelm defenses with chilling persistence. Her supernatural command of the dead turns ordinary raids into haunting assaults fueled by relentless undead swarms.",
      imageUrl: "/Images/witch.jpg"
    },
    {
      id:7,
      name: "Miner",
      nickname: "Dust Dweller",
      description: "The Miner slips beneath the ground with silent precision, bypassing traps and walls as if they never existed. Emerging only to strike with swift, targeted blows before vanishing again, he dismantles bases with ghost-like unpredictability.",
      imageUrl: "/Images/miner.jpg"
    },
    {
      id:8,
      name: "Bowler",
      nickname: "Stone Cyclone",
      description: "With colossal strength and unshakable confidence, the Bowler hurls massive boulders that smash through defenses in devastating arcs. Each rolling strike crushes buildings in sequence, turning the battlefield into a path of violent, ricocheting destruction.",
      imageUrl: "/Images/bowler.jpg"
    },
    {
      id:9,
      name: "Balloon",
      nickname: "Sky Bomber",
      description: "Lumbering through the air with grim determination, the Balloon drops explosive payloads that obliterate defenses in thunderous bursts. Every bomb it releases leaves behind smoking wreckage, marking its unstoppable dominance from high above the battlefield.",
      imageUrl: "/Images/balloon.jpg"
    },
    {
      id:10,
      name: "Valkyrie",
      nickname: "Whirlwind Marauder",
      description: "Armed with her massive axe, the Valkyrie charges into enemy clusters and unleashes a spinning fury that carves through everything around her. Her whirlwind attacks turn tight defenses into shattered fragments, leaving only echoes of her unstoppable momentum.",
      imageUrl: "/Images/valkyrie.jpg"
    },
    {
      id:11,
      name: "Barbarian",
      nickname: "Blade Brute",
      description: "Fueled by raw fury and fearless determination, the Barbarian storms into battle with his sword raised high, ready to tear through anything standing before him. His unbreakable spirit and relentless aggression make him the frontline warrior who turns the tide of battle through sheer force and courage.",
      imageUrl: "/Images/barbarian.jpg"
    },
    {
      id:12,
      name: "Giant",
      nickname: "Mountain Strider",
      description: "Slow but unstoppable, the Giant marches forward with thunderous steps, absorbing blow after blow without ever losing momentum. His immense strength crushes walls and defenses alike, making him the massive shield that protects entire armies as they tear through enemy bases.",
      imageUrl: "/Images/giant.jpg"
    },
    {
      id:13,
      name: "Lava Hound",
      nickname: "Molten Guardian",
      description: "A blazing titan of the skies, the Lava Hound soars toward air defenses with unwavering loyalty, shielding allies with its burning, rock-forged body. Upon defeat, it bursts into swarms of fiery pups that continue the assault, turning the battlefield into an inferno of relentless chaos.",
      imageUrl: "/Images/lavahound.jpg"
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