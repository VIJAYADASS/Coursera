import React from 'react';
import './App.css';

const data = [
  {
  id: "1",
  title: "Lemon Ice cream",
  description: "Mind blowing taste ",
  image: " https://www.freepik.com/free-photo/close-up-shot-natural-appetizing-creamy-lemon-ice-cream-decorated-with-mint-served-smoke-dark-stone-slate-black-background-metal-scoop-is-laying-nearby_27212363.htm#query=Lemon%20ice%20cream&position=0&from_view=search&track=ais",
  price: "$4.54",

  },
  {
    id: "2",
    title: "Chocolate mouses ",
    description: "Unexplored flavour",
    image: " https://www.freepik.com/free-photo/chocolate-brownie-served-with-vanilla-icecream-ball-strawberries_5536627htm#query=Chocolate%20mouse%20ice%20cream&position=26&from_view=search&track=ais",
    price: "$7.54",

  }
];

// To transform collection of element with react by using a combination of the map function in JSX curly braces

function App() {
  const listItem = data.map(data => {
    const listText = `${data.description} - ${data.price}`
    return <li>{listText}</li>
  })
  return (
   <div>
    <ul>
      {listItem}
    </ul>
   </div>
  );
}

export default App;
