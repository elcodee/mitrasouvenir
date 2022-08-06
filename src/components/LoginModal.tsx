import React from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";
import { AiOutlineMail, AiOutlineKey } from "react-icons/ai";

export default function LoginModal() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      {/* <Button auto color="warning" shadow onClick={handler}>
        Open modal
      </Button> */}
      <svg className="icon icon-user-light fs-28" onClick={handler}>
        <use xlinkHref="#icon-user-light" />
      </svg>
      <Modal
        closeButton
        blur
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{ marginLeft: 10, marginRight: 10 }}
      >
        <Modal.Header>
          <Text b id="modal-title" size={18}>
            Mitra Souvenir | Login
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="email"
            placeholder="Email"
            contentLeft={<AiOutlineMail  />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="password"
            placeholder="Password"
            contentLeft={<AiOutlineKey />}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={closeHandler}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
