// import React, { useState } from 'react';
// import "../styles/createpage.css"
// import { useNavigate } from 'react-router-dom';

// const Create = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     text: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/api/cards', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Card successfully saved:', result);

//         if (onSubmit) {
//           onSubmit(result); // You can update parent state or perform actions based on this
//         }
//       } else {
//         console.error('Error saving card:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Failed to submit form:', error);
//     }
//   };

//   const navigate = useNavigate();


//   return (
//     <form className="card-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           name="title"
//           id="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Enter title"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="category">Category</label>
//         <input
//           type="text"
//           name="category"
//           id="category"
//           value={formData.category}
//           onChange={handleChange}
//           placeholder="Enter category"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="text">Text</label>
//         <textarea
//           name="text"
//           id="text"
//           value={formData.text}
//           onChange={handleChange}
//           placeholder="Enter text"
//           required
//         />
//       </div>

//       <button type="submit" className="submit-btn"  >Save</button>
//       <button  className="submit-btn"   onClick={() => navigate('/')} >Home</button>


//     </form>
//   );
// };

// export default Create;

// import React, { useState } from 'react';
// import "../styles/createpage.css";
// import { useNavigate } from 'react-router-dom';

// const Create = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     text: ''
//   });

//   const [selectedColor, setSelectedColor] = useState('#000000'); // Default color

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Function to insert the color tag into the text field
//   const insertColorTag = () => {
//     const colorTag = `<span style="color:${selectedColor}">colored text</span>`;
//     setFormData({
//       ...formData,
//       text: formData.text + colorTag // Append the color tag to the text
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/api/cards', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Card successfully saved:', result);

//         if (onSubmit) {
//           onSubmit(result); // You can update parent state or perform actions based on this
//         }
//       } else {
//         console.error('Error saving card:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Failed to submit form:', error);
//     }
//   };

//   const navigate = useNavigate();

//   return (
//     <form className="card-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           name="title"
//           id="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Enter title"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="category">Category</label>
//         <input
//           type="text"
//           name="category"
//           id="category"
//           value={formData.category}
//           onChange={handleChange}
//           placeholder="Enter category"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="text">Text</label>
//         <textarea
//           name="text"
//           id="text"
//           value={formData.text}
//           onChange={handleChange}
//           placeholder="Enter text"
//           required
//         />
//       </div>

//       {/* Color Picker and Insert Button */}
//       <div className="form-group">
//         <label htmlFor="color">Choose Color</label>
//         <input
//           type="color"
//           id="color"
//           value={selectedColor}
//           onChange={(e) => setSelectedColor(e.target.value)}
//         />
//         <button type="button" onClick={insertColorTag}>Insert Color</button>
//       </div>

//       <button type="submit" className="submit-btn">Save</button>
//       <button className="submit-btn" onClick={() => navigate('/')}>Home</button>
//     </form>
//   );
// };

// export default Create;

// import React, { useState, useRef } from 'react';
// import "../styles/createpage.css";
// import { useNavigate } from 'react-router-dom';

// const Create = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     text: '' // This will store HTML content from the contentEditable div
//   });

//   const [selectedColor, setSelectedColor] = useState('#000000'); // Default color
//   const contentEditableRef = useRef(null); // Ref for the content-editable div

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Function to apply the selected color to the selected text
//   const applyColorToSelection = () => {
//     const color = selectedColor;
//     document.execCommand('styleWithCSS', false, true); // Ensure inline style is used
//     document.execCommand('foreColor', false, color); // Apply the color
//     // Update the form data with the HTML inside the contentEditable div
//     setFormData({
//       ...formData,
//       text: contentEditableRef.current.innerHTML
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/api/cards', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Card successfully saved:', result);

//         if (onSubmit) {
//           onSubmit(result); // You can update parent state or perform actions based on this
//         }
//       } else {
//         console.error('Error saving card:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Failed to submit form:', error);
//     }
//   };

//   const navigate = useNavigate();

//   return (
//     <form className="card-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           name="title"
//           id="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Enter title"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="category">Category</label>
//         <input
//           type="text"
//           name="category"
//           id="category"
//           value={formData.category}
//           onChange={handleChange}
//           placeholder="Enter category"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="text">Text</label>
//         <div
//           ref={contentEditableRef}
//           contentEditable="true"
//           className="content-editable"
//           onInput={() => setFormData({ ...formData, text: contentEditableRef.current.innerHTML })}
//           style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}
//         >
//           {/* Users will type directly in this div */}
//         </div>
//       </div>

//       {/* Color Picker and Apply Button */}
//       <div className="form-group">
//         <label htmlFor="color">Choose Color</label>
//         <input
//           type="color"
//           id="color"
//           value={selectedColor}
//           onChange={(e) => setSelectedColor(e.target.value)}
//         />
//         <button type="button" onClick={applyColorToSelection}>Apply Color</button>
//       </div>

//       <button type="submit" className="submit-btn">Save</button>
//       <button className="submit-btn" onClick={() => navigate('/')}>Home</button>
//     </form>
//   );
// };

// export default Create;









// import React, { useState, useRef } from 'react';
// import "../styles/createpage.css";
// import { useNavigate } from 'react-router-dom';
// import { marked } from 'marked';

// const Create = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     text: '', // This will store HTML content from the contentEditable div
//     author: '' // New author field
//   });

//   const [selectedColor, setSelectedColor] = useState('#000000'); // Default color
//   const contentEditableRef = useRef(null); // Ref for the content-editable div
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const applyColorToSelection = () => {
//     const selection = window.getSelection();
//     if (selection.rangeCount > 0) {
//       const range = selection.getRangeAt(0);
//       const span = document.createElement('span');
//       span.style.color = selectedColor;
//       range.surroundContents(span);
//       setFormData({ ...formData, text: contentEditableRef.current.innerHTML });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/api/cards', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Card successfully saved:', result);
        
//         if (onSubmit) {
//           onSubmit(result); // Update parent state or perform actions based on this
//         }
//       } else {
//         console.error('Error saving card:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Failed to submit form:', error);
//     }
//   };

//   const updatePreview = () => {
//     let text = contentEditableRef.current.innerHTML;

//     // Convert Markdown to HTML
//     text = text.replace(/^# (.+)$/gm, '<h1>$1</h1>');
//     text = text.replace(/^## (.+)$/gm, '<h2>$1</h2>');
//     text = text.replace(/^### (.+)$/gm, '<h3>$1</h3>');
//     text = text.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
//     text = text.replace(/^##### (.+)$/gm, '<h5>$1</h5>');
//     text = text.replace(/^###### (.+)$/gm, '<h6>$1</h6>');
//     text = text.replace(/^>(.+)$/gm, '<blockquote>$1</blockquote>');
//     text = text.replace(/^([*+-]) (.+)$/gm, (match, bullet, content) => {
//       return '<li>' + content.trim() + '</li>';
//     });
//     text = text.replace(/(<li>.*?<\/li>\n?)+/gs, '<ul>$&</ul>');
//     text = text.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
//     text = text.replace(/(<li>.*?<\/li>\n?)+/gs, '<ol>$&</ol>');
//     text = text.replace(/([\s\S]*?)/g, (match, code) => {
//       return '<pre><code>' + code.trim() + '</code></pre>';
//     });
//     text = text.replace(/([^]+)`/g, '<code>$1</code>');
//     text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

//     // Convert inline styles
//     text = text.replace(/\\(.*?)\\\*/g, '<strong>$1</strong>'); // Fixed regex for bold
//     text = text.replace(/\*(.*?)\*/g, '<em>$1</em>'); // Fixed regex for italic
//     text = text.replace(/~(.*?)~/g, '<del>$1</del>'); // Added regex for strikethrough

//     // Convert newlines to <br> tags (except for lists, code blocks, and tables)
//     text = text.replace(/\n(?!<\/?(ul|ol|li|pre|table|tr))/g, '<br>');

//     document.getElementById('preview').innerHTML = text;
//   };

//   return (
//     <form className="card-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           name="title"
//           id="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Enter title"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="category">Category</label>
//         <input
//           type="text"
//           name="category"
//           id="category"
//           value={formData.category}
//           onChange={handleChange}
//           placeholder="Enter category"
//           required
//         />
//       </div>

//       {/* Author Section */}
//       <div className="form-group">
//         <label htmlFor="author">Author</label>
//         <input
//           type="text"
//           name="author"
//           id="author"
//           value={formData.author}
//           onChange={handleChange}
//           placeholder="Enter author name"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="text">Text</label>
//         <div
//           ref={contentEditableRef}
//           contentEditable="true"
//           className="content-editable"
//           onInput={() => {
//             setFormData({ ...formData, text: contentEditableRef.current.innerHTML });
//             updatePreview(); // Update preview on input
//           }}
//           style={{
//             border: '1px solid #ccc',
//             padding: '10px',
//             minHeight: '100px',
//             fontFamily: 'monospace',
//           }}
//         >
//           {/* Users will type directly in this div */}
//         </div>
//       </div>

//       {/* Color Picker and Apply Button */}
//       <div className="form-group">
//         <label htmlFor="color">Choose Color</label>
//         <input
//           type="color"
//           id="color"
//           value={selectedColor}
//           onChange={(e) => setSelectedColor(e.target.value)}
//         />
//         <button type="button" onClick={applyColorToSelection}>Apply Color</button>
//       </div>

//       <button type="submit" className="submit-btn">Save</button>
//       <button type="button" className="submit-btn" onClick={() => navigate('/')}>Home</button>
      
//       <h2>Preview</h2>
//       <div id="preview" style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}></div>
//     </form>
//   );
// };

// export default Create;
































































// import React, { useState, useRef, useEffect } from 'react';
// import "../styles/createpage.css";
// import { useNavigate } from 'react-router-dom';
// import { marked } from 'marked';

// const Create = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     text: '',
//     author: ''
//   });

//   const [selectedColor, setSelectedColor] = useState('#000000');
//   const contentEditableRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     marked.setOptions({
//       breaks: true,
//       gfm: true,
//     });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const applyColorToSelection = () => {
//     const selection = window.getSelection();
//     if (selection.rangeCount > 0) {
//       const range = selection.getRangeAt(0);
//       const span = document.createElement('span');
//       span.style.color = selectedColor;
//       range.surroundContents(span);
//       updateFormDataText();
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/api/cards', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Card successfully saved:', result);
//         if (onSubmit) {
//           onSubmit(result);
//         }
//       } else {
//         console.error('Error saving card:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Failed to submit form:', error);
//     }
//   };

//   const updateFormDataText = () => {
//     setFormData(prev => ({ ...prev, text: contentEditableRef.current.innerText }));
//   };

//   const updatePreview = () => {
//     const rawText = contentEditableRef.current.innerText;
//     const htmlContent = marked(rawText);
//     document.getElementById('preview').innerHTML = htmlContent;
//   };

//   const handleContentEditableChange = () => {
//     updateFormDataText();
//     updatePreview();
//   };

//   return (
//     <form className="card-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           name="title"
//           id="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Enter title"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="category">Category</label>
//         <input
//           type="text"
//           name="category"
//           id="category"
//           value={formData.category}
//           onChange={handleChange}
//           placeholder="Enter category"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="author">Author</label>
//         <input
//           type="text"
//           name="author"
//           id="author"
//           value={formData.author}
//           onChange={handleChange}
//           placeholder="Enter author name"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="text">Text</label>
//         <div
//           ref={contentEditableRef}
//           contentEditable="true"
//           className="content-editable"
//           onInput={handleContentEditableChange}
//           style={{
//             border: '1px solid #ccc',
//             padding: '10px',
//             minHeight: '100px',
//             fontFamily: 'monospace',
//             whiteSpace: 'pre-wrap',
//           }}
//         />
//       </div>
// <div>
//          <h2>Preview</h2>
//       <div id="preview" style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}></div>
//       </div>
//       <div className="form-group">
//         <label htmlFor="color">Choose Color</label>
//         <input
//           type="color"
//           id="color"
//           value={selectedColor}
//           onChange={(e) => setSelectedColor(e.target.value)}
//         />
//         <button type="button" onClick={applyColorToSelection}>Apply Color</button>
//       </div>

//       <button type="submit" className="submit-btn">Save</button>
//       <button type="button" className="submit-btn" onClick={() => navigate('/')}>Home</button>
      
     
//     </form>
//   );
// };

// export default Create;


















// import React, { useState, useRef } from 'react';
// import "../styles/createpage.css";
// import { useNavigate } from 'react-router-dom';

// const Create = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     category: '',
//     text: '', // This will store HTML content from the contentEditable div
//     author: '' // New author field
//   });

//   const [selectedColor, setSelectedColor] = useState('#000000'); // Default color
//   const contentEditableRef = useRef(null); // Ref for the content-editable div
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Function to apply the selected color to the selected text
//   const applyColorToSelection = () => {
//     const selection = window.getSelection();
//     if (selection.rangeCount > 0) {
//       const range = selection.getRangeAt(0);
//       const span = document.createElement('span');
//       span.style.color = selectedColor;
//       range.surroundContents(span);
//       // Update the form data with the HTML inside the contentEditable div
//       setFormData({ ...formData, text: contentEditableRef.current.innerHTML });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/api/cards', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Card successfully saved:', result);

//         if (onSubmit) {
//           onSubmit(result); // You can update parent state or perform actions based on this
//         }
//       } else {
//         console.error('Error saving card:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Failed to submit form:', error);
//     }
//   };

//   const formatText = (text) => {
//     // Convert Markdown to HTML directly in the text area
//     text = text.replace(/^# (.+)$/gm, '<h1>$1</h1>');
//     text = text.replace(/^## (.+)$/gm, '<h2>$1</h2>');
//     text = text.replace(/^### (.+)$/gm, '<h3>$1</h3>');
//     text = text.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
//     text = text.replace(/^##### (.+)$/gm, '<h5>$1</h5>');
//     text = text.replace(/^###### (.+)$/gm, '<h6>$1</h6>');
//     text = text.replace(/^>(.+)$/gm, '<blockquote>$1</blockquote>');
//     text = text.replace(/^([*+-]) (.+)$/gm, function (match, bullet, content) {
//       return '<li>' + content.trim() + '</li>';
//     });
//     text = text.replace(/(<li>.*?<\/li>\n?)+/gs, '<ul>$&</ul>');
//     text = text.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
//     text = text.replace(/(<li>.*?<\/li>\n?)+/gs, '<ol>$&</ol>');
//     text = text.replace(/`([^`]+)`/g, '<code>$1</code>'); // Inline code
//     text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>'); // Links

//     // Convert inline styles (bold and italic)
//     text = text.replace(/\\(.?)\\*/g, '<strong>$1</strong>'); // Bold
//     text = text.replace(/\*(.+?)\*/g, '<em>$1</em>'); // Italics
//     text = text.replace(/~~(.+?)~~/g, '<del>$1</del>'); // Strikethrough

//     // Convert newlines to <br> tags (except for lists)
//     text = text.replace(/\n(?!<\/?(ul|ol|li|pre|table|tr))/g, '<br>');

//     return text;
//   };

//   return (
//     <form className="card-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           name="title"
//           id="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Enter title"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="category">Category</label>
//         <input
//           type="text"
//           name="category"
//           id="category"
//           value={formData.category}
//           onChange={handleChange}
//           placeholder="Enter category"
//           required
//         />
//       </div>

//       {/* Author Section */}
//       <div className="form-group">
//         <label htmlFor="author">Author</label>
//         <input
//           type="text"
//           name="author"
//           id="author"
//           value={formData.author}
//           onChange={handleChange}
//           placeholder="Enter author name"
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="text">Text</label>
//         <div
//           ref={contentEditableRef}
//           contentEditable="true"
//           className="content-editable"
//           onInput={() => {
//             const updatedText = contentEditableRef.current.innerHTML;
//             // Update form data and format text directly in the area
//             setFormData({ ...formData, text: formatText(updatedText) });
//           }}
//           style={{
//             border: '1px solid #ccc',
//             padding: '10px',
//             minHeight: '100px',
//             fontFamily: 'monospace',
//           }}
//         >
//           {/* Users will type directly in this div */}
//         </div>
//       </div>

//       {/* Color Picker and Apply Button */}
//       <div className="form-group">
//         <label htmlFor="color">Choose Color</label>
//         <input
//           type="color"
//           id="color"
//           value={selectedColor}
//           onChange={(e) => setSelectedColor(e.target.value)}
//         />
//         <button type="button" onClick={applyColorToSelection}>Apply Color</button>
//       </div>

//       <button type="submit" className="submit-btn">Save</button>
//       <button type="button" className="submit-btn" onClick={() => navigate('/')}>Home</button>
//     </form>
//   );
// };

// export default Create;





import React, { useState, useRef, useEffect } from 'react';
import "../styles/createpage.css";
import { useNavigate } from 'react-router-dom';
import { marked } from 'marked';

const Create = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    text: '', // This will store the HTML content
    author: ''
  });

  const [markdownContent, setMarkdownContent] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const contentEditableRef = useRef(null);
  const previewRef = useRef(null);
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    marked.setOptions({
      breaks: true,
      gfm: true,
    });
  }, []);


  useEffect(() => {
    let timer;
    if (showNotification) {
      timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showNotification]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const applyColorToSelection = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.color = selectedColor;
      range.surroundContents(span);
      updateMarkdownContent();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Update the formData with the HTML content from the preview
    const updatedFormData = {
      ...formData,
      text: previewRef.current.innerHTML
    };

    try {
      const response = await fetch('http://localhost:8080/api/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Card successfully saved:', result);
        setShowNotification(true);
        if (onSubmit) {
          onSubmit(result);
        }
      } else {
        console.error('Error saving card:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

  const updateMarkdownContent = () => {
    const content = contentEditableRef.current.innerText;
    setMarkdownContent(content);
    setFormData(prevData => ({
      ...prevData,
      text: content // Store the raw Markdown in formData.text
    }));
  };

  const updatePreview = () => {
    const htmlContent = marked(markdownContent);
    if (previewRef.current) {
      previewRef.current.innerHTML = htmlContent;
    }
  };

  useEffect(() => {
    updatePreview();
  }, [markdownContent]);

  return (
    <div className="create-page-container">
    <form className="card-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter category"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter author name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="text">Text</label>
        <div
          ref={contentEditableRef}
          contentEditable="true"
          className="content-editable"
          onInput={updateMarkdownContent}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            minHeight: '100px',
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
          }}
        />
      </div>
      <h2>Preview</h2>
      <div 
        ref={previewRef}
        id="preview" 
        style={{ border: '1px solid #ccc', padding: '10px', minHeight: '100px' }}
      ></div>

      <div className="form-group">
        <label htmlFor="color">Choose Color</label>
        <input
          type="color"
          id="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
        <button type="button" onClick={applyColorToSelection}>Apply Color</button>
      </div>

      <button type="submit" className="submit-btn">Save</button>
      <button type="button" className="submit-btn home-btn" onClick={() => navigate('/')}>Home</button>
      
     
    </form>

   {showNotification && (
        <div className="notification">
          <p>Card has been created successfully!</p>
        </div>
      )}
      </div>
  );
};

export default Create;







