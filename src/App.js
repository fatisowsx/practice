import './App.css';
import Footer from './companents/footer/Footer';
import Main from './companents/main/Main';
import Header from './companents/header/Header'

function App() {
  return (
    <div className='App'>
      <Header page1={'home'} page2={'Users'} page3={'Contacts'}   />
      <Header page1={'vsgsg'} page2={'asf'} page3={'bx;kb'} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;