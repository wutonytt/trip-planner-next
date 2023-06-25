"use client";

import { Modal } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

interface AccountProps {
  openModal: string | undefined;
  setOpenModal: Dispatch<SetStateAction<string | undefined>>;
}

export default function AccountModal({
  openModal,
  setOpenModal,
}: AccountProps) {
  const [modalBody, setModalBody] = useState<string>("login");

  let body;
  if (modalBody === "login") body = <LoginForm setModalBody={setModalBody} />;
  else if (modalBody === "signup")
    body = <SignupForm setModalBody={setModalBody} />;
  else if (modalBody === "forgot-password")
    body = <ForgotPasswordForm setModalBody={setModalBody} />;

  return (
    <Modal
      show={openModal === "form-elements"}
      size="md"
      dismissible
      popup
      onClose={() => {
        setOpenModal(undefined);
        setModalBody("login");
      }}
    >
      <Modal.Header />
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
}
