import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { useEffect } from "react";
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineShopping, AiOutlineShop, AiOutlineEdit, AiOutlineFileText } from "react-icons/ai";

export default function PopUpModal() {
  const { setVisible, bindings } = useModal();

  useEffect(() => {
    setTimeout(() => {
        // setVisible(true);
    }, 2000);
  }, [])
  return (
    <div>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        css={{ marginLeft: 10, marginRight: 10}}
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome To Mitra Souvenir
          </Text>
        </Modal.Header>
        <Modal.Body>
        <Button color="gradient" icon={<AiOutlineWhatsApp fontSize={20} />} auto>
          Whatsapp Admin
        </Button>
        <Button color="gradient" icon={<AiOutlineInstagram fontSize={20} />} auto>
          Instagram
        </Button>
        <Button color="gradient" icon={<AiOutlineShopping fontSize={20} />} auto>
          Shopee
        </Button>
        <Button color="gradient" icon={<AiOutlineShopping fontSize={20} />} auto>
          Tokopedia
        </Button>
        <Button color="gradient" icon={<AiOutlineShop fontSize={20} />} auto>
          Workshop
        </Button>
        <Button color="gradient" icon={<AiOutlineEdit fontSize={20} />} auto>
          Custome
        </Button>
        <Button color="gradient" icon={<AiOutlineFileText fontSize={20} />} auto>
          Catalog
        </Button>
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
