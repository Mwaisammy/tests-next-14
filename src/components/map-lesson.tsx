const numberArry = [2, 3, 4, 5, 6];

const doubleArray = numberArry.map((numItem) => {
  return numItem * 2;
});
console.log(doubleArray);

type Props = {
  name: string;
  likes: string;
};

const names: Props[] = [
  { name: "sonny", likes: "Coding" },
  { name: "Jay", likes: "Gaming" },
  { name: "Elon", likes: "Tesla" },
];

const namesByLikes = names.map((name) => ({
  ...name,
  person: name.name,
  likedBy: name.likes,
}));

console.log(namesByLikes);

const players = [
  { name: "Sonny", score: 10 },
  { name: "Bob", score: 20 },
  { name: "Charlie", score: 40 },
];

const formated = players.map((player) => ({
  [player.name]: player.score,
}));

const formated2 = players.map(({ name, score }) => ({
  [name]: score,
}));

console.log(formated);
console.log(formated2);
// // import React from "react";

// function MapLesson() {
//   const names = ["Sonny", "Jay", "Elon", "Jay", "Bill"];
//   return (
//     <div>
//       <ul>
//         {names.map((name, i) => (
//           <li key={name}>
//             The #{i} in name in the list is {name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MapLesson;
