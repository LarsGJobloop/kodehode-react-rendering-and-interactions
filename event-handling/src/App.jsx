import "./App.css";

/**
 * Innline event handling
 */
function ClickerA() {
  return (
    <button onClick={() => console.log("Button Clicked")}>Click Me A</button>
  );
}

/**
 * Internal handler function
 * Separiting logic and looks
 */
function ClickerB() {
  function handleClick() {
    console.log("Button clicked");
  }

  return <button onClick={handleClick}>Click Me B</button>;
}

function logToConsole() {
  console.log("External handler called");
}

/**
 * Internal handler function
 * Separiting logic and looks
 */
function ClickerC() {
  return <button onClick={logToConsole}>Click Me C</button>;
}

/**
 * Reading the event
 */
function ClickerD() {
  return <button onClick={(event) => console.log(event)}>Click Me D</button>;
}

/**
 * Reading the event
 */
function ClickerE() {
  function handleClick(target) {
    console.log(target);
  }

  return (
    <button onClick={(event) => handleClick(event.currentTarget.textContent)}>
      Click Me E
    </button>
  );
}

function TextInput() {
  function handleChange(str) {
    if (str.length < 3) {
      return;
    } else {
      console.log(str);
    }
  }

  return (
    <input
      type="text"
      placeholder="write some text"
      onChange={(event) => handleChange(event.target.value)}
    />
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Event Handling</h1>
      </header>

      <main>
        <ClickerA />
        <ClickerB />
        <ClickerC />
        <ClickerD />
        <ClickerE />
        <TextInput />
      </main>

      <footer>
        <p>Kodehodet</p>
        <a href="https://jobloop.no" referrerPolicy="no-referrer">
          Jobloop
        </a>
      </footer>
    </div>
  );
}

export default App;
