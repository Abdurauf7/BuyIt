import React from "react";
import { Row, Col, Button } from "antd";

const CustomCard = ({ data, handleBuy }) => {
  return (
    <Row gutter={25}>
      {data.map((c) => (
        <Col key={c.id} span={5}>
          <div
            className="m-5  ba br3 w-100"
            style={{ height: "550px", overflow: "scroll" }}
          >
            <div>
              <img src={c.url} alt="" className="grow w-100" />
            </div>
            <div className="mt-2 p-1 pt-2 bt">
              <div className="bb">
                <Row>
                  <Col span={17}>
                    <p className="b serif p-1">About product</p>
                  </Col>
                  <Col>
                    <p className="baskerville">Price 25$</p>
                  </Col>
                </Row>
              </div>
              <div>
                <p className="helvetica i p-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Omnis fugit itaque aspernatur, autem iure magni cumque,
                  excepturi voluptatem modi perferendis fuga aut culpa. Illo
                  libero debitis labore sed ipsam explicabo.
                </p>
              </div>
              <div className="bt pt-2">
                <Row justify="space-around">
                  <Col span={10}>
                    <div style={{ marginTop: "30%" }}>
                      <Row gutter={10}>
                        <Col>
                          <div className="mb-2">
                            <p>Quantity:</p>
                          </div>
                        </Col>
                        <Col>
                          <div>
                            <p>{c.quantity}</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col>
                    <div style={{ marginTop: "30%" }}>
                      <Button
                        size="large"
                        shape="round"
                        type="primary"
                        onClick={() => handleBuy(c)}
                        disabled={c.quantity === 0 ? true : false}
                      >
                        <span>Buy It</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default CustomCard;
