import { IForm, IMessage } from "../components/types";

export const sendTgMessage = async (data: IMessage) => {
  const resp = await fetch(
    "https://nogdire-portfolio-back.herokuapp.com/message/send",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    }
  );
  return await resp.json();
};

export const sendEmail = async (data: IForm) => {
  const resp = await fetch(
    "https://nogdire-portfolio-back.herokuapp.com/message/mail",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    }
  );
  return await resp.json();
};
