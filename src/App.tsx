import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { increment, amountAdded } from "./features/counter/CounterSlice";
import { useFetchBreedsQuery } from "./features/dogs/DogsApiSlice";
import { useState } from "react";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <div className="App">
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>

        <div>
          <p>Dogs to fetch:</p>
          <select
            value={numDogs}
            onChange={(e) => {
              setNumDogs(Number(e.target.value));
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <div>
          <p>Numbers of dogs fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
