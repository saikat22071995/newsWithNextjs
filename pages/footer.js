import {
    Icon,
    Row,
    Col,
    Layout,
  } from 'antd';
  import "../style.less";
  const {
    Header, Content,
  } = Layout;
  import React from 'react'

 const FooterPage =()=>{
     return (
        <Layout>
        <Row
          justify="space-around"
          type="flex"
          style={{ background: "#f9f9f9" }}
        >
          <Col md={8} xs={20} style={{ height: "40px", display: "flex" }}>
            <div style={{ margin: "auto 0px" }}>
              &copy; 2020 nextjs antd SSR Redux
            </div>
          </Col>
          <Col md={8} xs={20}>
            <div
              style={{
                margin: "auto",
                height: "40px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Icon
                style={{ margin: "auto 10px", fontSize: 20 }}
                type="facebook"
              />
              <Icon
                style={{ margin: "auto 10px", fontSize: 20 }}
                type="instagram"
              />
              <Icon
                style={{ margin: "auto 10px", fontSize: 20 }}
                type="google"
              />
            </div>
          </Col>
        </Row>
        </Layout>
     )
 }

 export default FooterPage





