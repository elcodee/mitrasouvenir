import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { useEffect } from "react";
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineShoppingCart, AiOutlineShop, AiOutlineEdit, AiOutlineFileText } from "react-icons/ai";
import useLogic from "./_Logic"

export default function PopUpModal() {
  const { setVisible, bindings } = useModal();
  const { cta } = useLogic();

  useEffect(() => {
    setTimeout(() => {
        setVisible(true);
    }, 1500);
  }, [])
  return (
    <div>
      <Modal
        scroll
        preventClose
        blur
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
        <Button color="gradient" icon={<AiOutlineWhatsApp fontSize={20} />} auto onClick={() => window.open(`https://api.whatsapp.com/send?phone=${cta[0].value}&text=Hallo%20admin%20mitra%20souvenir`, "tab")}>
          Whatsapp Admin
        </Button>
        <Button color="gradient" icon={<AiOutlineInstagram fontSize={20} />} auto onClick={() => window.open(`https://instagram.com/${cta[1].value}`, "tab")}>
          Instagram
        </Button>
        <Button color="gradient" icon={<AiOutlineShoppingCart fontSize={20} />} auto onClick={() => window.open(cta[2].value, "tab")}>
          Shopee
        </Button>
        <Button color="gradient" icon={<AiOutlineShoppingCart fontSize={20} />} auto onClick={() => window.open(cta[3].value, "tab")}>
          Tokopedia
        </Button>
        <Button color="gradient" icon={<AiOutlineShop fontSize={20} />} auto onClick={() => window.open(`https://www.google.com/maps/search/${cta[4].value}`, "tab")}>
          Workshop
        </Button>
        <Button color="gradient" icon={<AiOutlineEdit fontSize={20} />} auto onClick={() => window.open(`https://api.whatsapp.com/send?phone=${cta[5].value}&text=Hallo%20admin%20mitra%20souvenir%2C%20mau%20custome%20bisa%20%3F`, "tab")}>
          Custome
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
