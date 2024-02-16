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
      
    </>
  );
}

export default App;
