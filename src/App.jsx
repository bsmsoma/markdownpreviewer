import { useState } from 'react';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import './App.css';


function App() {
  const [input, setInput] = useState(`# lets try this input`);

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const html = marked.parse(input);
  
  //
  return (
    <section>
      <textarea 
        type='text'
        id='editor' 
        className='text editor' 
        value={input} 
        onChange={handleChange} 
      />
      <div id='preview' className='text preview'
      dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}

export default App;