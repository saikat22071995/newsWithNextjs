import { Breadcrumb, Icon, Row, Col, Layout, Card } from "antd";
// import Link from 'next/link'
import "../style.less";
const { Content } = Layout;
import React from "react";
import ArticleModal from "./articleModal";
import HeaderPage from "./header";
import FooterPage from './footer'
import { getTopHeadlines } from "../store/actions/index";

class ToHeadlines extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps(ctx) {
    const dataVal = await ctx.reduxStore.dispatch(getTopHeadlines());
    return { data: dataVal.payload };
  }

  render() {
    console.log("props", this.props);
    return (
      <Layout>
        <HeaderPage />
        <Row justify="space-around" type="flex">
          <Col span={20}>
            <Breadcrumb>
              <Breadcrumb.Item href="">
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <Icon type="user" />
                <span>Top Headlines</span>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Row justify="space-around" type="flex">
          <Col
            span={20}
            style={{
              paddingTop: "30px",
              paddingBottom: "30px",
              minHeight: "500px",
            }}
          >
            <Content>
              <Row gutter={16} type="flex">
                {this.props.data.map((headline, index) => {
                  return (
                    <Col span={6} md={6} sm={12} xs={8} key={index}>
                      <div style={{ margin: "auto 0px" }}>
                        <Card
                          style={{ margin: "auto 0px" }}
                          hoverable
                          cover={<img alt="image1" src={headline.urlToImage} />}
                          style={{
                            width: "100%",
                            height: "50%",
                            marginBottom: "20px",
                          }}
                        >
                          <Card.Meta
                            title={headline.title}
                            // description={headline.title}
                          />
                          <p
                            style={{ margin: "auto 0px", width: "fit-content" }}
                          >
                            Source : {headline.source.name}
                          </p>
                          <ArticleModal
                            style={{ margin: "auto 0px", width: "fit-content" }}
                            title={headline.title}
                            imageUrl={headline.urlToImage}
                            description={headline.description}
                            url={headline.url}
                            source={headline.source.name}
                            author={headline.author}
                          />
                        </Card>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Content>
          </Col>
        </Row>
        <FooterPage />
      </Layout>
    );
  }
}
export default ToHeadlines;
