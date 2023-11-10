import "./App.css";

function App() {
  return (
    <>
      <div>
        <h2>Poster un message</h2>
        <form>
          <input
            type="text"
            id="inputMessage"
            placeholder="Entrez un message"
          />
          <input type="submit" value="Envoyer" />
        </form>
        <h2>Liste des messages</h2>
        <div></div>
      </div>
    </>
  );
}

export default App;
