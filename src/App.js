
import './App.css';
import DropBox from './components/DropBox';
import DropBoxSingle from './components/DropBoxSingle';

function App() {
  return (
    <div className="App">
      <h1>React Drag and Drop File Uploader</h1>
      <h2>Multiple File Upload</h2>
      <div style={{ marginBottom: '40px',border:'2px solid black',paddingBottom:'20px' }}>
        <DropBox/>
      </div>
      <br/>
      <div style={{ marginBottom: '40px',border:'2px solid black',paddingBottom:'20px' }}>
      <h2>Single File Upload</h2>
      <DropBoxSingle/>
      </div>

    </div>
  );
}

export default App;
