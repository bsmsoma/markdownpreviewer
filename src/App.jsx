import { useState } from 'react';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import './App.css';


function App() {

    marked.setOptions({
        breaks: true, // Interpreta quebras de linha como <br>
      });

    const [input, setInput] = useState(
      `# This is a H1
  ## This is a H2
  [This is a link](https://www.example.com)
  \`This is inline code\`

  \`\`\`
  This is a code block
  \`\`\`

  - This is a list item

  > This is a blockquote

  ![This is an image](https://via.placeholder.com/150)

  **This is bolded text**`
    );

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