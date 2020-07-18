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
import fetch from 'isomorphic-unfetch'
import ArticleModal from './articleModal'
import HeaderPage from './header'


class ToHeadlines extends React.Component{
  constructor(props){
    super(props)
    this.state={
      headlines:[]
    }
  }
  render(){
    console.log('props',this.props)
    return(
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
            <span>Home</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>

    <Row justify="space-around" type="flex">
      <Col span={20} style={{ paddingTop: '30px', paddingBottom: '30px', minHeight: '500px' }}>
        <Content>
          <Row gutter={16} type="flex">
                {
                    this.props.data.articles.map((headline,index)=>{
                      return(
                        
                        <Col span={6} md={6} sm={12} xs={8} key={index}>
                          <div style={{ margin: 'auto 0px' }}>
                          <Card style={{ margin: 'auto 0px' }}
                        hoverable
                        cover={
                          <img alt="image1" src={headline.urlToImage} />
                        }
                        style={{width:"100%",height:"50%",marginBottom:'20px'}}
                        >
                        <Card.Meta
                          title={headline.title}
                          // description={headline.title}
                        />
                        <p style={{margin: 'auto 0px',width: 'fit-content'}}>Source : {headline.source.name}</p>
                        <ArticleModal style={{margin: 'auto 0px',width: 'fit-content'}}
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
                      
                      )
                    })
                }
           
           </Row>
        </Content>
      </Col>
    </Row>

    <Row justify="space-around" type="flex" style={{ background: '#f9f9f9' }}>
      <Col md={8} xs={20} style={{height: '40px', display: 'flex'}}>
        <div style={{ margin: 'auto 0px' }}>
          &copy; 2019 nextjs antd now.sh
        </div>
      </Col>
      <Col md={8} xs={20}>
        <div style={{ margin: 'auto', height: '40px', display: 'flex', justifyContent: 'flex-end' }}>
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="facebook" />
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="instagram" />
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="google" />
        </div>
      </Col>
    </Row>
  </Layout>
    )
  }
} 


ToHeadlines.getInitialProps = async (ctx) => {
  const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=3f7e8b1b56a64d82a4892ef4bbfafaa5')
  const json = await res.json()
  console.log('res',res)
  return {data:json}
}


export default ToHeadlines