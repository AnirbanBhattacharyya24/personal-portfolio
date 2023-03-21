import './App.scss';
import Intro from './components/intro';
import Skills from './components/skills';
import Domain from './components/domain';
import Portfolio from './components/portfolio';
import Blogs from './components/blogs';
import Contact from './components/contact';


function App() {
  return (
    <div>
        <Intro />
        <Skills />
        <Domain />
        <Portfolio />
        <Blogs />
        <Contact />
    </div>
  );
}

export default App;
