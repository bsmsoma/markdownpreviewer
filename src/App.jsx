import { useState } from 'react';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import './App.css';

// function Markdown (props) {
//   const htmlEl = props
//   console.log(htmlEl)
//   return (
//     <>
//       {htmlEl}
//     </>
//   )

// }

function App() {
  const [input, setInput] = useState(`# lets try this input`);

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(input)
  };
  const html = marked(input);
  console.log(html.replace(/\n/g, "<br>" ));

  return (
    <section>
      <textarea 
        type='text'
        id='editor' 
        className='text editor' 
        value={input} 
        onChange={handleChange} 
      />
      <div id='preview' className='text preview'>
        {/* <Markdown props={html} /> */}
      {html ? html.replace(/\n/g, "<br>" ) : ""}
      </div>
    </section>
  );
}

export default App;