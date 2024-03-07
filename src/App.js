import { useState } from "react";

function App() {
  const [pepperoniIsClicked, setPepperoniIsClicked] = useState(false);

  function togglePepperoni(event) {
    setPepperoniIsClicked(event.target.checked);
  }

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input 
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsClicked}
        aria-checked={pepperoniIsClicked}
        onChange={togglePepperoni}
      />
      <label htmlFor="pepperoni">Add Pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoniIsClicked ? <li>Pepperoni</li> : null}
      </ul>
    </div>
  )
}

export default App;
