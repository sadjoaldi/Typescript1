import { MessageInt } from "../Model";

type Props = {
  mess: MessageInt;
  messData: MessageInt[];
  setMessData: React.Dispatch<React.SetStateAction<MessageInt[]>>;
};

const Message = ({ mess, messData, setMessData }: Props) => {
  const dataFormater = (date: number) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
    });
  };

  const handlDelete = () => {
    setMessData(messData.filter((element) => element.id !== mess.id));
  };

  return (
    <div className="message-container">
      <p>{mess.message}</p>
      <h5>{dataFormater(mess.date)}</h5>
      <span id="delete" onClick={() => handlDelete()}>
        &#10008;
      </span>
    </div>
  );
};

export default Message;
