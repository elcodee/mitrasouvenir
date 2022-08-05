import {
  Collapse,
  Text,
  Grid,
  Avatar,
  Link,
  Button,
  Input,
  Container,
  Radio,
} from "@nextui-org/react";
import { AiOutlineLink, AiOutlineWhatsApp } from "react-icons/ai";

export default function CollapseBuy() {
  return (
    <Grid.Container gap={0}>
      <Grid>
        <Collapse.Group>
          <Collapse
            title={<Text h4>Beli Sekarang</Text>}
            // subtitle="4 unread messages"
            contentLeft={
              <Avatar
                size="lg"
                src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360"
                color="default"
                bordered
                squared
              />
            }
          >
            <Input clearable label="Nama" placeholder="Nama" width="300px" />
            <Input
              clearable
              label="Whatsapp"
              placeholder="6281xxxx"
              width="300px"
              css={{ marginTop: 20 }}
            />

            <Radio.Group
              label="Metode Pembayaran"
              defaultValue="1"
              css={{ marginTop: 20 }}
            >
              <Radio value="1" isSquared>
                BCA
              </Radio>
              <Radio value="2" isSquared>
                BNI
              </Radio>
              <Radio value="3" isSquared>
                BRI
              </Radio>
              <Radio value="4" isSquared>
                Mandiri
              </Radio>
            </Radio.Group>

            <Button icon={<AiOutlineWhatsApp fontSize={20} />} color="success" css={{marginTop: 20}} flat size="sm">
            Beli
      </Button>
          </Collapse>
          <Collapse
            title={<Text h4>Shopee</Text>}
            // subtitle="3 incompleted steps"
            contentLeft={
              <Avatar
                size="lg"
                src="https://www.freepnglogos.com/uploads/shopee-logo-png/shopee-logo-shop-with-the-gentlemen-collection-and-win-the-shopee-0.png"
                color="default"
                bordered
                squared
              />
            }
          >
            <Button flat color="warning" icon={<AiOutlineLink fontSize={20} />}>
              Go to Shopee
            </Button>
          </Collapse>
          <Collapse
            title={<Text h4>Tokopedia</Text>}
            subtitle={
              <Text>{/* 2 issues to <Link color>fix now</Link> */}</Text>
            }
            contentLeft={
              <Avatar
                size="lg"
                src="https://www.freepnglogos.com/uploads/logo-tokopedia-png/berita-tokopedia-info-berita-terbaru-tokopedia-6.png"
                color="default"
                bordered
                squared
              />
            }
          >
            <Button flat color="success" icon={<AiOutlineLink fontSize={20} />}>
              Go to Tokopedia
            </Button>
          </Collapse>
        </Collapse.Group>
      </Grid>
    </Grid.Container>
  );
}
