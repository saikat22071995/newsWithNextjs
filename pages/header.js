import {
    Breadcrumb,
    Icon,
    Row,
    Col,
    Layout,
    Card,
    Button,
  } from 'antd';
  import Link from 'next/link'
  import "../style.less";
  const {
    Header, Content,
  } = Layout;
  import React from 'react'

 const HeaderPage =()=>{
     return (
        <Layout>
        <Header>
          <Row justify="space-around" type="flex">
            <Col span={20}>
              <Row justify="space-around" type="flex">
                <Col span={12} md={12} xs={24}>
                  <span >yourdailynews.com</span>
                </Col>
                <Col span={12} md={12} xs={0}>
                  <span className="ml-30 float-right"><Icon type="phone" theme="filled" /> Call us 7406453877</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
    
        <Row justify="space-around" type="flex">
          <Col span={20} style={{ textAlign: 'right', height: 50, display: 'flex', justifyContent: 'flex-end', textTransform: 'uppercase' }}>
            <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
              <Link href="/">
                <a>
                  Home
                </a>
              </Link>
            </div>
            <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
              {/* <Link href="/news" as="/cnn" > */}
              <Link
                href={{
                  pathname: "/news",
                  query: { name: "cnn" }
                }}
              >
                <a>
                  CNN
                </a>
              </Link>
            </div>
            <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
            <Link
                href={{
                  pathname: "/news",
                  query: { name: "nbc-news" }
                }}
              >
              {/* <Link href="/nbc-news" as="/nbc-news"> */}
                <a>
                  NBC NEWS
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        </Layout>
     )
 }

 export default HeaderPage