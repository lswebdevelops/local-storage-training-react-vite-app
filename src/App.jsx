import "./App.css";

function App() {
  
  return (
    <div className="container">
      <div className="labels">
        <label htmlFor="name">
        Expense:
          <input type="text" id="description" />
        </label>
        <br />
        <label htmlFor="january">
        January:
          <input type="number" id="january" />
        </label>
        <br />
        <label htmlFor="february">
        February:
          <input type="number" id="february" />
        </label>
        <br />
        <label htmlFor="march">
        March:
          <input type="number" id="march" />
        </label>
        <br />
        <label htmlFor="abril">
        Abril:
          <input type="number" id="abril" />
        </label>
        <br />
        <label htmlFor="may">
        May:
          <input type="number" id="may" />
        </label>
        <br />
        <button>Add</button>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Expense</th>
              <th>January</th>
              <th>February</th>
              <th>March</th>
              <th>Abril</th>
              <th>May</th>
              <th>Year</th>              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rent</td>
              <td>{0}</td>
              <td>{0}</td>
              <td>{0}</td>
              <td>{0}</td>
              <td>{0}</td>
              <td>{0}</td>              
            </tr>
          </tbody>
        </table>
        <p>
          Total: <span>{}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
