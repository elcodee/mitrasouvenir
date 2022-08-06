import {
  Collapse,
  Text,
  Grid,
  Avatar,
  Link,
  Button,
  Input,
  Card,
} from "@nextui-org/react";
import { AiOutlineLink, AiOutlineWhatsApp } from "react-icons/ai";

export default function CollapseBuy() {
  return (
    <Grid.Container gap={0}>
      <Grid>
        <Collapse.Group>
          <Collapse
            title={<Text h4>Whatsapp</Text>}
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
            <Card variant="flat" css={{ p: "$6", mw: "400px", mb: 10 }}>
              <Card.Header>
                <img
                  alt="product"
                  src="https://files.elcodee.com/mitrasouvenir/images/product-07.jpg"
                  width="34px"
                  height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      Tumblr
                    </Text>
                  </Grid>
                  <Grid xs={12}>
                    <Text css={{ color: "$accents8" }}>Rp 235.000</Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
            </Card>

            <Input clearable label="Nama" placeholder="Nama" width="300px" />
            <Input
              clearable
              label="Whatsapp"
              placeholder="6281xxxx"
              width="300px"
              css={{ marginTop: 20 }}
            />

            <Button
              icon={<AiOutlineWhatsApp fontSize={20} />}
              color="success"
              css={{ marginTop: 20 }}
              flat
              size="sm"
            >
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
