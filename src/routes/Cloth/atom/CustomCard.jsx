import React from "react";
import { Row, Col, Button } from "antd";

const CustomCard = ({ getCloth, BuyItem }) => {
  console.log(getCloth);
  return (
    <Row gutter={25}>
      {getCloth.map((c) => (
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
                    <p className="b serif p-1">About</p>
                  </Col>
                  <Col>
                    <p className="baskerville">{`${c.price} $`}</p>
                  </Col>
                </Row>
              </div>
              <div>
                <p className="helvetica i p-1">{c.about}</p>
              </div>
              <div className="bt pt-2">
                <Row justify="space-between">
                  <Col>
                    <div className="p-2" s>
                      <p>Quantity:{c.quantity}</p>
                    </div>
                  </Col>
                  <Col>
                    <Button
                      type="primary"
                      size="large"
                      shape="round"
                      disabled={c.quantity === 0 ? true : false}
                      onClick={() => BuyItem(c)}
                    >
                      <span>Buy It</span>
                    </Button>
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
