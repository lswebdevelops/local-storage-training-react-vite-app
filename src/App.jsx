import { useState } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [january, setJanuary] = useState(0.0);
  const [february, setFebruary] = useState(0.0);
  const [march, setMarch] = useState(0.0);
  const [april, setApril] = useState(0.0);
  const [may, setMay] = useState(0.0);
  const [june, setJune] = useState(0.0);
  const [july, setJuly] = useState(0.0);
  const [august, setAugust] = useState(0.0);
  const [september, setSeptember] = useState(0.0);
  const [october, setOctober] = useState(0.0);
  const [november, setNovember] = useState(0.0);
  const [december, setDecember] = useState(0.0);
  const [items, setItems] = useState([]);

  const addItem = () => {
    // for calculating total
    const total =
      parseFloat(january) +
      parseFloat(february) +
      parseFloat(march) +
      parseFloat(april) +
      parseFloat(may) +
      parseFloat(june) +
      parseFloat(july) +
      parseFloat(august) +
      parseFloat(september) +
      parseFloat(october) +
      parseFloat(november) +
      parseFloat(december);

    const newItem = {
      description,
      january,
      february,
      march,
      april,
      may,
      june,
      july,
      august,
      september,
      october,
      november,
      december,
      total,
    };
    setItems([...items, newItem]);
    // reseting the fields after adding
    setJanuary(0.0);
    setFebruary(0.0);
    setMarch(0.0);
    setApril(0.0);
    setMay(0.0);
    setJune(0.0);
    setJuly(0.0);
    setAugust(0.0);
    setSeptember(0.0);
    setOctober(0.0);
    setNovember(0.0);
    setDecember(0.0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const calculateTotal = () => {
    let totalOnYear = 0;
    items.forEach((item) => {
      totalOnYear += item.total;
    });
    return totalOnYear;
  };

  return (
    <div className="container">
      <h1> Yearly Expenses Calculator</h1>
      <div className="labels">
        <div className="button-add-description">
        <label className="label-description" htmlFor="name">
          <p>Description:</p>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            id="description"
            placeholder="Example: Rent"
          />
        </label>

        <button onClick={addItem} className="add-button">
          Add
        </button>

        </div>

        <label htmlFor="january">
          <p>January:</p>
          <input
            type="number"
            value={january}
            onChange={(e) => setJanuary(e.target.value)}
            id="january"
          />
        </label>
        <br />
        <label htmlFor="february">
          <p>February:</p>
          <input
            type="number"
            value={february}
            onChange={(e) => setFebruary(e.target.value)}
            id="february"
          />
        </label>
        <br />

        <label htmlFor="march">
          <p>March:</p>
          <input
            type="number"
            value={march}
            onChange={(e) => setMarch(e.target.value)}
            id="march"
          />
        </label>
        <br />

        <br />

        <label htmlFor="april">
          <p>April:</p>
          <input
            type="number"
            value={april}
            onChange={(e) => setApril(e.target.value)}
            id="april"
          />
        </label>
        <br />

        <br />

        <label htmlFor="may">
          <p>May:</p>
          <input
            type="number"
            value={may}
            onChange={(e) => setMay(e.target.value)}
            id="may"
          />
        </label>
        <br />

        <br />

        <label htmlFor="june">
          <p>June:</p>
          <input
            type="number"
            value={june}
            onChange={(e) => setJune(e.target.value)}
            id="june"
          />
        </label>
        <br />

        <br />

        <label htmlFor="july">
          <p>July:</p>
          <input
            type="number"
            value={july}
            onChange={(e) => setJuly(e.target.value)}
            id="july"
          />
        </label>
        <br />

        <br />

        <label htmlFor="august">
          <p>August:</p>
          <input
            type="number"
            value={august}
            onChange={(e) => setAugust(e.target.value)}
            id="august"
          />
        </label>
        <br />

        <br />

        <label htmlFor="september">
          <p>September:</p>
          <input
            type="number"
            value={september}
            onChange={(e) => setSeptember(e.target.value)}
            id="september"
          />
        </label>
        <br />

        <br />

        <label htmlFor="october">
          <p>October:</p>
          <input
            type="number"
            value={october}
            onChange={(e) => setOctober(e.target.value)}
            id="october"
          />
        </label>
        <br />

        <br />

        <label htmlFor="november">
          <p>November:</p>
          <input
            type="number"
            value={november}
            onChange={(e) => setNovember(e.target.value)}
            id="november"
          />
        </label>
        <br />
        <label htmlFor="december">
          <p>December:</p>
          <input
            type="number"
            value={december}
            onChange={(e) => setDecember(e.target.value)}
            id="december"
          />
        </label>
        <br />
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Expense</th>
              <th>January</th>
              <th>February</th>
              <th>March</th>
              <th>April</th>
              <th>May</th>
              <th>June</th>
              <th>July</th>
              <th>August</th>
              <th>September</th>
              <th>October</th>
              <th>November</th>
              <th>December</th>
              <th>Year Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{formatCurrency(item.january)}</td>
                <td>{formatCurrency(item.february)}</td>
                <td>{formatCurrency(item.march)}</td>
                <td>{formatCurrency(item.april)}</td>
                <td>{formatCurrency(item.may)}</td>
                <td>{formatCurrency(item.june)}</td>
                <td>{formatCurrency(item.july)}</td>
                <td>{formatCurrency(item.august)}</td>
                <td>{formatCurrency(item.september)}</td>
                <td>{formatCurrency(item.october)}</td>
                <td>{formatCurrency(item.november)}</td>
                <td>{formatCurrency(item.december)}</td>
                <td>
                  {formatCurrency(
                    parseFloat(item.january) +
                      parseFloat(item.february) +
                      parseFloat(item.march) +
                      parseFloat(item.april) +
                      parseFloat(item.may) +
                      parseFloat(item.june) +
                      parseFloat(item.july) +
                      parseFloat(item.august) +
                      parseFloat(item.september) +
                      parseFloat(item.october) +
                      parseFloat(item.november) +
                      parseFloat(item.december)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Year Total: <span>{formatCurrency(calculateTotal())}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
