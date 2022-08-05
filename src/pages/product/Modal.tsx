import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { useEffect } from "react";
import CollapseBuy from "./CollapseBuy";

export default function PopUpModal() {
  const { setVisible, bindings } = useModal();

  useEffect(() => {
    // setTimeout(() => {
    //     setVisible(true);
    // }, 2000);
  }, []);
  return (
    <div>
      {/* <Button auto shadow color="secondary" onClick={() => setVisible(true)}>
        Open modal
      </Button> */}
      <div className="row align-items-end no-gutters mx-n2">
        <div className="col-sm-8 mb-6 w-100 px-2">
          <button
            onClick={() => setVisible(true)}
            className="btn btn-lg fs-18 btn-secondary btn-block h-60 bg-hover-primary border-0"
          >
            Beli Sekarang
          </button>
        </div>
      </div>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        css={{ marginLeft: 10, marginRight: 10 }}
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Mitra Souvenir
          </Text>
        </Modal.Header>
        <Modal.Body>
         <CollapseBuy />
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={() => setVisible(false)}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
