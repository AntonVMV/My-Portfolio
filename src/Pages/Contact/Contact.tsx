import { CotactContainer, Contacts, ContactBG } from "./style";
import { MainContainer } from "../../styles";
import { Form } from "../../components/Form/Form";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { MainText, MainTitle, Highlighted } from "../../styles";
import React from "react";
import { WithTooltip } from "../../components/WithTooltip/WithTooltip";
import { emailjsRequest } from "../../request/emailjsRequest";

export const Contact: React.FC = () => {
  const copyToClipboard = (e: React.MouseEvent<HTMLParagraphElement>) => {
    navigator.clipboard.writeText(e.currentTarget.innerText);
  };

  return (
    <MainContainer>
      <ContactBG>
        <CotactContainer>
          <MainTitle>
            <Highlighted>Thanks</Highlighted> for taking your time. <br />
            If I managed to interest you, <Highlighted>
              contact me
            </Highlighted>{" "}
            in any convenient way.
          </MainTitle>
          <Form onSubmit={emailjsRequest} />
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
                <MainText onClick={copyToClipboard}>@Nogire</MainText>
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
          </Contacts>
        </CotactContainer>
      </ContactBG>
    </MainContainer>
  );
};
