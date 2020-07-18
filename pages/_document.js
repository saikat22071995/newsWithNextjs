import Document, { Head, Main, NextScript } from 'next/document';
import {Provider} from 'react-redux'
import configureStore from '../store/store'
import {startSetNews} from '../action/newsAction'
// import ReactDOM from 'react-dom';
// import {createStore} from "redux";
import withRedux from "next-redux-wrapper";
const store=configureStore()
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(startSetNews())

export default class MyDocument extends Document {
  render() {
    return (
        <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
      
    )
  }
};

// const jsx=(
//   <div>
//   <Provider store={store}>
//       <MyDocument/>
//   </Provider>
//   </div>
// )

// const makeStore = () => store;
// export default withRedux(makeStore)(MyDocument);



// ReactDOM.render(jsx, document.getElementById('root'));
