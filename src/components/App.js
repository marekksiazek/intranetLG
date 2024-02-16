import '../componentsCSS/App.css';
import Header from './Header';
import LinkMenu from './LinkMenu';

function App() {
  return (
    <>
      <section className="header">
        <Header />
      </section>
      <aside className="linkMenu">
        <LinkMenu />
      </aside>
      <section className="mainFrame">
        <div className="mainSystems">

        </div>
        <div className="mainSectionWrapper">
          <div className="news">

          </div>
          <div className="widgets">

          </div>
        </div>

      </section>
      
    </>
  );
}

export default App;
