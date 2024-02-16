import '../componentsCSS/App.css';
import Buttons from './Buttons';
import Header from './Header';
import LinkMenu from './LinkMenu';
import MainSystems from './MainSystems';

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
              </div>
              <div className="widgets">
              </div>
            </div>
          </section>
        </section>
        
      </section>
      
      
    </>
  );
}

export default App;
