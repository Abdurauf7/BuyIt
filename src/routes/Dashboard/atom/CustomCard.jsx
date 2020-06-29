import React from "react";
import { Row, Col, Layout, Button } from "antd";

const CustomCard = ({ brand, handleEdit, handleDelete }) => {
  return (
    <Layout.Content className="bg-light p-3">
      <Row gutter={10}>
        {brand.map((c) => (
          <Col span={5} key={brand.id}>
            <div
              className="ba br4 mb-2"
              style={{ overflow: "scroll", height: "400px" }}
            >
              <div className="bb bw2">
                <img src={c.url} alt={c.title} />
              </div>

              <div className="measure-narrow p-1">
                <div className="d-flex justify-around">
                  <h4 className="ml-2">About </h4>
                  <h6 className="mt-1">Price: {c.price} </h6>
                </div>
                <p className="helvetica i p-1">{c.about}</p>
              </div>
              <div className="p-3 bt bw2">
                <Row justify="space-around">
                  <Col>
                    <Button type="primary" onClick={() => handleEdit(c)}>
                      Edit
                    </Button>
                  </Col>
                  <Col>
                    <Button type="danger" onClick={() => handleDelete(c.id)}>
                      Delete
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Layout.Content>
  );
};

export default CustomCard;
