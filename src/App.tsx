import { useRef, useState } from "react";
import "./App.css";
import { MessageInt } from "./Model";
import Message from "./components/Message";

function App() {
  const [messData, setMessData] = useState<MessageInt[]>([]);

  //le type HTMLInputElement permet,en ts, de dire que c'est un input
  const inputMessage = useRef<HTMLInputElement>(null);
  const handlSubmit = (e: any) => {
    e.preventDefault();

    if (inputMessage) {
      const mess: MessageInt = {
        id: Math.round(Math.random() * Date.now()),
        message: inputMessage?.current?.value,
        date: Date.now(),
      };
      setMessData((prevData) => [...prevData, mess]);
    }

    //logique pour l'envoie de données: et ensuite il se vide tout seule:
    (document.getElementById("inputMessage") as HTMLInputElement).value = "";
  };
  return (
    <>
      <div>
        <h2>Poster un message</h2>
        <form onSubmit={(e) => handlSubmit(e)}>
          <input
            type="text"
            id="inputMessage"
            ref={inputMessage}
            placeholder="Entrez un message"
          />
          <input type="submit" value="Envoyer" />
        </form>
        <h2>Liste des messages</h2>
        <div>
          {messData?.map((mess) => {
            <Message
              key={mess.id}
              mess={mess}
              messData={messData}
              setMessData={setMessData}
            />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
