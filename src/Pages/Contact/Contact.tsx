import React, { useState } from "react";
import { CotactContainer, Contacts } from "./style";
import { MainContainer } from "../../styles";
import { EmailForm } from "../../components/EmailForm/EmailForm";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { MainText, MainTitle, Highlighted } from "../../styles";
import { WithTooltip } from "../../components/WithTooltip/WithTooltip";
import { MainPortal } from "../../MainPortal/MainPortal";
import { Modal } from "../../components/Modal/Modal";
import { IForm } from "../../components/types";
import { sendEmail } from "../../controller/messageController";

export const Contact: React.FC = () => {
  const [modalText, setModalText] = useState<string | null>(null);
  const [isMailSending, setMailSending] = useState<boolean>(false);

  const copyToClipboard = (e: React.MouseEvent<HTMLParagraphElement>) => {
    navigator.clipboard
      .writeText(e.currentTarget.innerText)
      .then(() => setModalText("Copied to clipboard"));
  };

  const sendEmailHandler = async (data: IForm) => {
    try {
      setMailSending(true);
      await sendEmail(data);
      setModalText("Success");
    } catch (e) {
      setModalText("Server error");
    } finally {
      setMailSending(false);
    }
  };

  return (
    <MainContainer>
      <CotactContainer>
        <MainTitle>
          <Highlighted>Thanks</Highlighted> for taking your time. <br />
          If I managed to interest you, <Highlighted>contact me</Highlighted> in
          any convenient way.
        </MainTitle>
        <EmailForm submitHnd={sendEmailHandler} isLoading={isMailSending} />
        <Contacts>
          <h3>My contacts:</h3>
          <div>
            <AiOutlineMail />
            <WithTooltip text="copy to clipboard">
              <MainText onClick={copyToClipboard}>nogdire@gmail.com</MainText>
            </WithTooltip>
          </div>
          <div>
            <FaTelegram />
            <WithTooltip text="copy to clipboard">
              <MainText onClick={copyToClipboard}>@Nogdire</MainText>
            </WithTooltip>
          </div>
          <div>
            <AiFillGithub />
            <WithTooltip text="copy to clipboard">
              <MainText onClick={copyToClipboard}>AntonVMV</MainText>
            </WithTooltip>
          </div>
          <div>
            <AiFillLinkedin />
            <a
              href="https://linkedin.com/in/антон-матвеев-421a80215"
              target="_blank"
              rel="noreferrer"
            >
              Go to linkedIn
            </a>
          </div>

          {modalText && (
            <MainPortal>
              <Modal
                isActive={!!modalText}
                onClose={() => setModalText(null)}
                text={modalText}
              />
            </MainPortal>
          )}
        </Contacts>
      </CotactContainer>
    </MainContainer>
  );
};
