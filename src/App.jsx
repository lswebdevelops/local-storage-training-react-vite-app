import { useState } from "react";
import "./App.css";

function App() {

  const [description, setDescription ] = useState("supermarket");
  const [january, setJanuary] = useState(150);
  const [february, setFebruary] = useState(160); 
  const [items, setItems ] = useState([]) ;

  const addItems = () => {
    const subTotal = parseInt(january + february)
      const newItem = {
      description, 
      january, 
      february,
     subTotal,
    }
    setItems([...items, newItem])
  }

  const calculateExpenses = () => {
    let totalExpenses = 0;
    items.forEach((item) => {
      totalExpenses += item.subTotal;
    })
    return totalExpenses
  }
  return (
    <div className="container">
      <h1> Yearly Expenses Calculator</h1>
      <div className="labels">
        <label htmlFor="name">
          <p>Description:</p>
          <input 
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
          type="text" id="description" placeholder="Example: Rent" />
        </label>
        <br />
        <label htmlFor="january">
          <p>January:</p>
          <input type="number"
          value={january}
          onChange={(e) => setJanuary(e.target.value)}
          id="january" />
        </label>
        <br />
        <label htmlFor="february">
          <p>February:</p>
          <input type="number" 
          value={february}
          onChange={(e) => setFebruary(e.target.value)}
          id="february" />
        </label>
        <br />
        <button 
          onClick={addItems}
          className="add-button">Add</button>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Expense</th>
              <th>January</th>
              <th>February</th>
              <th>Year Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) =>(

              <tr key={index}>
              <td>{item.description}</td>
              <td>{item.january}</td>
              <td>{item.february}</td>
              <td>{parseInt(item.january + item.february)}</td>
            </tr>
              ))}
          </tbody>
        </table>
        <p>
          Year Total: <span>{calculateExpenses()}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
