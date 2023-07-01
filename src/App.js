//4) Create a component
function App() {
  const num = 1234;
  const string = "Akshay";
  const boolean = true;
  const nullValue = null;
  const undefinedValue = undefined;
  const array = [1, 2, 3, 4];
  const object = {};

  const date = new Date();
  const time = date.toLocaleDateString();

  const inputType = "number";
  const inputMinValue = "5";
  const inputMaxValue = "10";

  const message = "Enter Age:";
  return (
    <div>
      <h1>
        num: <span>{num}</span>
      </h1>

      <h1>
        string: <span>{string}</span>
      </h1>

      <h1>
        boolean: <span>{boolean}</span>
      </h1>

      <h1>
        nullValue: <span>{nullValue}</span>
      </h1>

      <h1>
        undefinedValue: <span>{undefinedValue}</span>
      </h1>

      <h1>
        array: <span>{array}</span>
      </h1>
      {/* CANNOT DISPLAY OBJECT IN JSX AND THUS ON A SCREEN */}
      {/* <h1>
          object: <span>{object}</span>
        </h1> */}

      <h1>
        expression: <span>{new Date().toLocaleDateString()}</span>
      </h1>
      <label>Using variables in the input element:</label>
      <input type={inputType} min={inputMinValue} max={inputMaxValue} />
      <input type="number" min={5} max={10} />

      <label>RULE#1: All props names follow camelCase:</label>
      <input
        placeholder="All props names follow camelCase"
        aria-label="All props names follow camelCase"
        type="number"
        min={5}
        max={10}
        list={[1, 2, 3]}
        style={{ border: "2px solid red" }}
        alt={message}
      />
      <textarea autoFocus={true} />
      <label>RULE#2:Number attributes use curly braces:</label>
      <input maxLength={5} />
      <label>
        RULE#3: The boolean value "true" can be just written with the property
        name. But "false" should be written with curly braces:
      </label>
      <input spellCheck />
      <input spellCheck={false} />
      <label>
        RULE#4: In JSX, the class attribute is written as "className":
      </label>
      <div className="divider" />
      <li className="list-item" />
      <label>RULE#5: In JSX, the inline styles are provided as objects:</label>
      <div
        style={{
          textDecoration: "none",
          paddingTop: "5px",
          height: "20px",
          width: "80px",
          border: "1px solid blue",
        }}
      />
    </div>
  );
}

export default App;
