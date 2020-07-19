import "../style.less";
import React from "react";
import { Breadcrumb, Icon, Row, Col, Layout, Card } from "antd";
const {Content } = Layout;
import ArticleModal from './articleModal'
import HeaderPage from './header'
import FooterPage from './footer'
import { getSourceNews } from '../store/actions/index';
import { useRouter } from 'next/router'

const News=(props)=>{
  const router = useRouter()
  const { name } = router.query
  console.log(props)
  
  return (
    <Layout>
    <HeaderPage/>
    <Row justify="space-around" type="flex">
      <Col span={20}>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user" />
            <span>{name}</span>
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
                {props.data.map((headline, index) => {
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
    )
}

News.getInitialProps = async (ctx) => {
    const source=ctx.query.name
    const dataVal= await ctx.reduxStore.dispatch(getSourceNews(source));
    return {data:dataVal.payload}
};

export default (News);
