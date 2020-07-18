import { Modal, Button } from 'antd';
import Link from 'next/link'
import "../style.less";
export default class ArticleModal extends React.Component {
    constructor(props){
        super(props)
        this.state={
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false,
        }
    }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

//   handleOk = () => {
//     this.setState({
//       ModalText: 'The modal will be closed after two seconds',
//       confirmLoading: true,
//     });
//     setTimeout(() => {
//       this.setState({
//         visible: false,
//         confirmLoading: false,
//       });
//     }, 2000);
//   };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal} style={{margin: 'auto 0px',width: 'fit-content'}}>
          Read More
        </Button>
        <Modal 
          title={<h3>{this.props.title}</h3>}
          visible={visible}
          okButtonProps={false}
        //   onOk={this.handleOk}
        //   confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          width={820}
          zIndex={1000}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Close
            </Button>,
          ]}
          
        >
            
            <img alt="image1" src={this.props.imageUrl} width={500} height={200} />
            <p><b>Source : {this.props.source?this.props.source:'Source Unknown'}</b></p>
            <p><b>Author : {this.props.author?this.props.author:'Author Unknown'}</b></p>
            <p><b>Description : {this.props.description}</b></p>
            <Button><a href={this.props.url} target="_blank">Read Full Article</a></Button>
        </Modal>
      </div>
    );
  }
}
