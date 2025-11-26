
import Card from "./Card.jsx";

function App(){

  const teamMembers = [
    {
      id:1,
      name: "Elon Mosque",
      position: "CEO and Founder",
      decription: "With over 20 years of experience, Mr. Mosque is leading this team beautifully. His commitments and ideas are praiseworthy and are always for our betterment.",
      imageUrl: ""
    },
    {
      id:2,
      name: "Tim Pen",
      position: "Operations Head",
      decription: "With 10 years of experience and expertise in operations, Mr. Pen is one of our best performing employees. His attention to detail and communication skills are always on point.",
      imageUrl: ""
    },
    {
      id:3,
      name: "Steve Job",
      position: "CEO and Founder",
      decription: "With over 20 years of experience, Mr. Mosque is leading this team beautifully. His commitments and ideas are praiseworthy and are always for our betterment.",
      imageUrl: ""
    },
    {
      id:1,
      name: "Elon Mosque",
      position: "CEO and Founder",
      decription: "With over 20 years of experience, Mr. Mosque is leading this team beautifully. His commitments and ideas are praiseworthy and are always for our betterment.",
      imageUrl: ""
    }
    ];
     
    return(
    <>
      <div>
         <header>
         <h1>Our Team</h1>
         <p>Know about our best players, guiding our company towards growth</p>
         </header>
        <div>
          {
            teamMembers.map(member =>(
              <Card
              key={member.id}
              name={member.name}
              position={member.position}
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