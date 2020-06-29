import React from "react";
import { Row, Col, Button, Layout } from "antd";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const AnimalCard = ({ data, handleEdit }) => {
  console.log(data);
  return (
    <Layout>
      <Layout.Content className="ml-5 mt-4">
        <Row gutter={10}>
          {data.map((a) => (
            <Col span={5} key={a.id}>
              <div className="ba mb-2 br4 ">
                <div>
                  <img src={a.url} alt={a.name} className="dim br4 br--top" />
                </div>

                <Tabs
                  className="text-center ba pt-2 bg-light br4 br--bottom"
                  style={{ height: "250px" }}
                >
                  <TabList>
                    <Tab>About</Tab>
                    <Tab>Order</Tab>
                  </TabList>

                  <TabPanel className="br4 text-left pl-2">
                    <div className="helvetica i p-1">{a.about}</div>
                  </TabPanel>
                  <TabPanel className="br4">
                    <p>Price: {a.price}$</p>
                    <div className="br4" style={{ marginTop: "40%" }}>
                      <Button
                        type="primary"
                        disabled={a.quantity === 0 ? true : false}
                        onClick={() => handleEdit(a)}
                      >
                        Buy It
                      </Button>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </Col>
          ))}
        </Row>
      </Layout.Content>
    </Layout>
  );
};
export default AnimalCard;
