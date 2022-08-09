import React from "react";
import { Modal, Input, Button, Text, Loading } from "@nextui-org/react";
import { AiOutlineMail, AiOutlineKey, AiOutlineWarning, AiOutlineLock } from "react-icons/ai";

export default function LoginModal() {
  const [visible, setVisible] = React.useState(false);
  const [loadingComp, setLoadingComp] = React.useState(false);
  const [err, setErr] = React.useState({
    is: false,
    msg: "",
  });
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
  });

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const inputsHandler = (e: any) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = () => {
    if (inputs.email === "admin@gmail.com" && inputs.password === "admin123") {
      setLoadingComp(true);

      setTimeout(() => {
        window.open("https://mitrasouvenir-admin.vercel.app/");
        setLoadingComp(false);
        setVisible(false);
      }, 2000);

      console.log("CORRECT DATA : ", inputs);
    } else {
        setLoadingComp(true);

        setTimeout(() => {
        setErr({
          is: true,
          msg: "Email Atau Password Salah",
        });

        setTimeout(() => {
          setErr({
            is: false,
            msg: "",
          });
        }, 5000);
        setLoadingComp(false);
      }, 2000);

      console.log("ERR DATA : ", inputs);
    }
  };

  return (
    <div>
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
          {err.is ? (
            <div
              className="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              <AiOutlineWarning fontSize={30} style={{ marginRight: 15 }} />
              <div>{err.msg}</div>
            </div>
          ) : null}
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              inputsHandler(e);
            }}
            contentLeft={<AiOutlineMail />}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              inputsHandler(e);
            }}
            contentLeft={<AiOutlineLock />}
          />
        </Modal.Body>
        <Modal.Footer>
          {loadingComp ? (
            <Button disabled auto bordered color="primary" css={{ px: "$13" }}>
              <Loading color="currentColor" size="sm" />
            </Button>
          ) : (
            <Button auto onClick={loginHandler}>
              Login
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
