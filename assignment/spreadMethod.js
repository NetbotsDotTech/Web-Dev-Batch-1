
const teams = [
    {
      name: "Team A",
      members: ["Alice", "Bob", "Charlie"]
    },
    {
      name: "Team B",
      members: ["Dave", "Eve", "Frank"]
    },
    {
      name: "Team C",
      members: ["Grace", "Hank", "Ivy"]
    }
  ];
  
  const [teamA, ...otherTeams] = teams;
  console.log("teamA",teamA)
  console.log("others :",...otherTeams)
  const { name, members: [...restMembers] } = teamA;
  
  console.log(name); 
  console.log('RestMember',...restMembers); 
 
 
