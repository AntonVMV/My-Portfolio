import { useState } from "react";
import {
  PopupContainer,
  ButtonContainer,
  PopupForm,
  FormContainer,
} from "./style";
import { ReactComponent as MessageIcon } from "./message.svg";
import { ReactComponent as SendIcon } from "./send.svg";
import { ReactComponent as CloseIcon } from "./close.svg";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { MainText, TitleSm } from "../../styles";
import { CSSTransition } from "react-transition-group";
import { useForm } from "react-hook-form";
import { sendTgMessage } from "../../controller/messageController";
import { IMessage } from "../types";
import { MainPortal } from "../../MainPortal/MainPortal";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Modal/Modal";

export const MessagePopup: React.FC = () => {
  const [modalText, setModalText] = useState<string | null>(null);
  const [isSendingMessge, setSendingMessage] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IMessage>();

  const formSubmit = async (data: IMessage) => {
    if (!isOpen) {
      setOpen(true);
      return;
    }

    try {
      setSendingMessage(true);
      await sendTgMessage(data);
      setModalText("Success");
    } catch (e) {
      setModalText("Server error");
    } finally {
      setSendingMessage(false);
    }

    closeModal();
  };

  const closeModal = () => {
    reset();
    setOpen(false);
  };

  return (
    <PopupContainer>
      <div>
        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames="popup"
          unmountOnExit
        >
          <FormContainer>
            <CloseIcon onClick={closeModal} />
            <TitleSm>Send a message:</TitleSm>
            <MainText>Leave your message and I will contact you</MainText>
            <PopupForm id="message-form">
              <Input
                {...register("name", {
                  required: { value: true, message: "Enter you name" },
                })}
                error={errors.name}
                placeholder="Your name"
              />
              <Input
                {...register("telegram", {
                  required: { value: true, message: "Enter you telegram" },
                })}
                error={errors.telegram}
                placeholder="Telegram"
              />
              <Input
                {...register("phone", {
                  required: { value: true, message: "Enter you phone" },
                })}
                error={errors.phone}
                type="tel"
                placeholder="Your phone"
              />
              <TextArea
                {...register("message", {
                  required: { value: true, message: "Enter you message" },
                })}
                error={errors.message}
                placeholder="Message"
              />
            </PopupForm>
          </FormContainer>
        </CSSTransition>

        <ButtonContainer>
          {isOpen ? (
            <Button
              styleType="secondary"
              type="submit"
              onClick={handleSubmit(formSubmit)}
              disabled={isSendingMessge}
            >
              {isSendingMessge ? <Loader /> : <SendIcon />}
            </Button>
          ) : (
            <Button styleType="secondary" onClick={() => setOpen(true)}>
              <MessageIcon />
            </Button>
          )}
        </ButtonContainer>
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
    </PopupContainer>
  );
};
