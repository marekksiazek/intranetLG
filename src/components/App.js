import '../componentsCSS/App.css';
import Buttons from './Buttons';
import Header from './Header';
import LinkMenu from './LinkMenu';
import MainSystems from './MainSystems';
import MySystems from './MySystems';
import News from './News';
import UserInfo from './UserInfo';

function App() {
  return (
    <>
      <section className="header">
        <Header />
      </section>
      <section className="main">
        <aside className="linkMenu">
          <LinkMenu />
        </aside>
        <section className="rightSide">
          <section className="mainFrame">
            <div className="mainSystems">
              <MainSystems />
              <Buttons />
            </div>
            <div className="mainSectionWrapper">
              <div className="news">
                <News />
              </div>
              <div className="widgets">
                <UserInfo />
                <MySystems />
              </div>
            </div>
          </section>
        </section>
        
      </section>
      
      
    </>
  );
}

export default App;
