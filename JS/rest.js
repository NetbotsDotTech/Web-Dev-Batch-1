let a =['5','5','10']
let b=['4','5','6']

c = [...a, ...b];

console.log(c)

function multiply(multiplier, ...numbers) {
    let mul= numbers.map(num => num * multiplier);
    return mul;
  }
  
  const result = multiply(2,4,5,7,8); 
  console.log(result);
  

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
  console.log("others :",otherTeams)
  const { name, members: [firstMember, ...restMembers] } = teamA;
  
  console.log(name); 
  console.log('FirstMember',firstMember);
  console.log('RestMember',restMembers); 
  console.log('OtherMember',otherTeams); 
  