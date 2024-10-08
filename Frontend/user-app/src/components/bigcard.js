// import React, { useState } from 'react';
// import "../styles/navfoot.css";
// import Cardlu from './Card';

// const Bigcard = () => {

//     // const [isModalOpen, setModalOpen] = useState(false);
//     // const openModal = () => setModalOpen(true);
//     // const closeModal = () => setModalOpen(false);

//     const [isModalOpen, setModalOpen] = useState(false);
//     const [selectedCard, setSelectedCard] = useState(null); // State to hold selected card data

//     // Functions to handle opening and closing modal
//     const openModal = (card) => {
//         setSelectedCard(card);  // Set the selected card details
//         setModalOpen(true);     // Open the modal
//     };

//     const closeModal = () => {
//         setModalOpen(false);    // Close the modal
//         setSelectedCard(null);  // Reset selected card when modal is closed


//         return (
//             <>



//                 <div className="App">
//                     <h1>React Modal Popup Example</h1>

//                     {/* Pass openModal function to Cardlu component */}
//                     <Cardlu openModal={openModal} />

//                     {/* Modal rendering based on isModalOpen */}
//                     {isModalOpen && selectedCard && (
//                         <div className="modal-overlay" onClick={closeModal}>
//                             <div className="modal" onClick={(e) => e.stopPropagation()}>
//                                 <h3>{selectedCard.title}</h3>
//                                 <p><strong>Category:</strong> {selectedCard.category}</p>
//                                 <p>{selectedCard.text}</p>
//                                 <p>Likes: {selectedCard.likes}</p>
//                                 <button onClick={closeModal}>Close Modal</button>
//                             </div>
//                         </div>
//                     )}

//                     <p>Background content remains visible.</p>
//                 </div>














//                 {/* <div className="App"> */}
//                 {/* <h1>React Modal Popup Example</h1>
//       <button onClick={openModal}>Open Modal</button> */}
//                 {/* <Cardlu openModal={openModal} closeModal={closeModal} /> */}
//                 {/* 
//       {isModalOpen && (
        

//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <h2>Modal Title</h2>
//             <p>This is a modal popup window.</p>
//             <button onClick={closeModal}>Close Modal</button>
//           </div>
//         </div>
//       )} */}
//                 {/* 
//       <p>Background content remains visible.</p>
//     </div> */}


//             </>
//         )
//     }
// export default Bigcard;

// correct 
// import React from 'react';
// import "../styles/navfoot.css";

// const Bigcard = ({ closeModal, cardData }) => {
//   return (
//     <div className="modal-overlay" onClick={closeModal}>
//       <div className="modal" onClick={(e) => e.stopPropagation()}>
//         <h3>{cardData.title}</h3>
//         <p><strong>Category:</strong> {cardData.category}</p>
//         <p>{cardData.text}</p>
//         <p>Likes: {cardData.likes}</p>
//         <button onClick={closeModal}>Close Modal</button>
//       </div>
//     </div>
//   );
// };

// export default Bigcard;










// import React, { useState } from 'react';
// import "../styles/navfoot.css";

// const Bigcard = ({ closeModal, cardData, onDelete, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false); // State for editing mode
//   const [editedCard, setEditedCard] = useState(cardData); // State for the edited card

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditedCard({ ...editedCard, [name]: value }); // Update the state with new values
//   };

//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     onEdit(editedCard); // Trigger the edit function passed as prop
//     setIsEditing(false); // Exit edit mode after saving
//   };

//   return (
//     <div className="modal-overlay" onClick={closeModal}>
//       <div className="modal" onClick={(e) => e.stopPropagation()}>
//         {isEditing ? (
//           <>
//             <h3>Edit Card</h3>
//             <form onSubmit={handleEditSubmit}>
//               <input 
//                 type="text" 
//                 name="title" 
//                 value={editedCard.title} 
//                 onChange={handleEditChange} 
//                 placeholder="Title" 
//                 required 
//               />
//               <input 
//                 type="text" 
//                 name="category" 
//                 value={editedCard.category} 
//                 onChange={handleEditChange} 
//                 placeholder="Category" 
//                 required 
//               />
//               <textarea 
//                 name="text" 
//                 value={editedCard.text} 
//                 onChange={handleEditChange} 
//                 placeholder="Text" 
//                 required 
//               />
//               <input 
//                 type="number" 
//                 name="likes" 
//                 value={editedCard.likes} 
//                 onChange={handleEditChange} 
//                 placeholder="Likes" 
//                 required 
//               />
//               <button type="submit">Save Changes</button>
//               <button type="button" onClick={() => onDelete(cardData.id)}>Delete Card</button>
//             </form>
//             <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
//           </>
//         ) : (
//           <>
//             <h3>{cardData.title}</h3>
//             <p><strong>Category:</strong> {cardData.category}</p>
//             <p>{cardData.text}</p>
//             <p>Likes: {cardData.likes}</p>
//             <button onClick={() => setIsEditing(true)}>Edit Card</button>
//             <button onClick={() => onDelete(cardData.id)}>Delete Card</button>
//           </>
//         )}
//         <button onClick={closeModal}>Close Modal</button>
//       </div>
//     </div>
//   );
// };

// export default Bigcard;


// import React, { useState } from 'react';
// import "../styles/navfoot.css";

// const Bigcard = ({ closeModal, cardData, onDelete, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedCard, setEditedCard] = useState({ ...cardData }); // Copy cardData to editedCard initially

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditedCard((prevCard) => ({ ...prevCard, [name]: value })); // Update editedCard with new values
//   };

//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     onEdit(editedCard); // Trigger the edit function passed as prop
//     setIsEditing(false); // Exit edit mode after saving
//   };

//   return (
//     <div className="modal-overlay" onClick={closeModal}>
//       <div className="modal" onClick={(e) => e.stopPropagation()}>
//         {isEditing ? (
//           <>
//             <h3>Edit Card</h3>
//             <form onSubmit={handleEditSubmit}>
//               <input 
//                 type="text" 
//                 name="id" 
//                 value={editedCard.id} // Ensure id is included in the editedCard
//                 readOnly // Make the id read-only
//               />
//               <input 
//                 type="text" 
//                 name="title" 
//                 value={editedCard.title} 
//                 onChange={handleEditChange} 
//                 placeholder="Title" 
//                 required 
//               />
//               <input 
//                 type="text" 
//                 name="category" 
//                 value={editedCard.category} 
//                 onChange={handleEditChange} 
//                 placeholder="Category" 
//                 required 
//               />
//               <textarea 
//                 name="text" 
//                 value={editedCard.text} 
//                 onChange={handleEditChange} 
//                 placeholder="Text" 
//                 required 
//               />
//               <input 
//                 type="number" 
//                 name="likes" 
//                 value={editedCard.likes} 
//                 onChange={handleEditChange} 
//                 placeholder="Likes" 
//                 required 
//               />
//               <button type="submit">Save Changes</button>
//               {/* <button type="button" onClick={() => onDelete(cardData._id)}>Delete Card</button> */}
//             </form>
//             <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
//           </>
//         ) : (
//           <>
//             <h3>{cardData.title}</h3>
//             <p><strong>Category:</strong> {cardData.category}</p>
//             {/* <p>{cardData.text}</p> */}
//             <p dangerouslySetInnerHTML={{ __html: cardData.text }}></p> {/* Render text with HTML */}
//             <p>Likes: {cardData.likes}</p>
//             <button onClick={() => setIsEditing(true)}>Edit Card</button>
//             <button onClick={() => onDelete(cardData._id)}>Delete Card</button>
//           </>
//         )}
//         <button onClick={closeModal}>Close Modal</button>
//       </div>
//     </div>
//   );
// };

// export default Bigcard;
















import React, { useState, useEffect } from 'react';
import "../styles/card.css";
import { authenticateUser } from '../services/authService.js';


const Bigcard = ({ closeModal, cardData, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCard, setEditedCard] = useState({ ...cardData });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const [credentials, setCredentials] = useState({ id: '', password: '' });
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Check if authentication token exists and hasn't expired
    const token = localStorage.getItem('authToken');
    const expiry = localStorage.getItem('authExpiry');
    const isTokenValid = token && expiry && new Date().getTime() < new Date(expiry).getTime();
    setIsAuthenticated(isTokenValid);
  }, []);

  const handleAuthChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCreds) => ({ ...prevCreds, [name]: value }));
  };


  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Attempting authentication with:', credentials.username);
      const { token, expiry } = await authenticateUser(credentials.username, credentials.password);
      console.log('Authentication successful. Token:', token, 'Expiry:', expiry);
      localStorage.setItem('authToken', token);
      localStorage.setItem('authExpiry', expiry);
      setIsAuthenticated(true);
      setAuthModal(false);
    } catch (error) {
      console.error('Authentication error:', error);
      if (error.message.includes('404')) {
        alert('Authentication failed: The login endpoint was not found. Please check your server configuration.');
      } else if (error.message.includes('Invalid JSON')) {
        alert('Authentication failed: The server response was not in the expected format. Please check your server logs.');
      } else {
        alert('Authentication failed: ' + error.message);
      }
    }
  };


  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedCard((prevCard) => ({ ...prevCard, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editedCard);
    setIsEditing(false);
  };

  const requestAuth = () => {
    setAuthModal(true);
  };


  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
        closeModal();
      }, 800); // Close modal 0.8 seconds after showing notification
      return () => clearTimeout(timer);
    }
  }, [showNotification, closeModal]);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {authModal && (
          <div className="auth-modal">
            <h3>Authenticate</h3>
            <form onSubmit={handleAuthSubmit}>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleAuthChange}
                placeholder="Username"
                required
              />
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleAuthChange}
                placeholder="Password"
                required
              />
              <button type="submit">Submit</button>
            </form>
            <button onClick={() => setAuthModal(false)}>Cancel</button>
          </div>
        )}

        {!isEditing ? (
          <>
            <h3>{cardData.title}</h3>
            <p><strong>Author:</strong> {cardData.author}</p> {/* Display author */}
            <p><strong>Category:</strong> {cardData.category}</p>
            <p dangerouslySetInnerHTML={{ __html: cardData.text }}></p>

            {isAuthenticated ? (
              <>
                <button onClick={() => setIsEditing(true)}>Edit Card</button>
                {/* <button onClick={() => onDelete(cardData._id)}>Delete Card</button> */}
                <button onClick={() => {
            onDelete(cardData._id);
            setShowNotification(true);
          }}>
            Delete Card
          </button>
              </>
            ) : (
              <>
                <button onClick={requestAuth}>Edit Card (Auth Required)</button>
                <button onClick={requestAuth}>Delete Card (Auth Required)</button>
              </>
            )}
          </>
        ) : (
          <>
            <h3>Edit Card</h3>
            <form onSubmit={handleEditSubmit}>
             
              <input
                type="text"
                name="title"
                value={editedCard.title}
                onChange={handleEditChange}
                placeholder="Title"
                required
              />
                <input
                type="text"
                name="author"
                value={editedCard.author}
                onChange={handleEditChange}
                placeholder="Author"
                required
              />
              <input
                type="text"
                name="category"
                value={editedCard.category}
                onChange={handleEditChange}
                placeholder="Category"
                required
              />
              <textarea
                name="text"
                className='txtedit'
                value={editedCard.text}
                onChange={handleEditChange}
                placeholder="Text"
                required
              />
              <button type="submit">Save Changes</button>
            </form>
            <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
          </>
        )}
       <button className="close-modal-btn" onClick={closeModal}>&times;</button>
      </div>

      {showNotification && (
        <div className="notification">
          <p>Card has been deleted successfully!</p>
        </div>
      )}
  
     
    </div>
  );
};

export default Bigcard;


// import React, { useState, useEffect } from 'react';
// import "../styles/card.css";

// const Bigcard = ({ closeModal, cardData, onDelete, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedCard, setEditedCard] = useState({ ...cardData });
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [authModal, setAuthModal] = useState(false);
//   const [credentials, setCredentials] = useState({ id: '', password: '' });

//   useEffect(() => {
//     // Check if authentication token exists and hasn't expired
//     const token = localStorage.getItem('authToken');
//     const expiry = localStorage.getItem('authExpiry');
//     const isTokenValid = token && expiry && new Date().getTime() < new Date(expiry).getTime();
//     setIsAuthenticated(isTokenValid);
//   }, []);

//   const handleAuthChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials((prevCreds) => ({ ...prevCreds, [name]: value }));
//   };

//   const handleAuthSubmit = (e) => {
//     e.preventDefault();
//     // Simple mock authentication check (replace with real auth logic)
//     const validId = 'admin';
//     const validPassword = 'password123';

//     if (credentials.id === validId && credentials.password === validPassword) {
//       // Authentication successful, store token and expiry in localStorage
//       // const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000; 
//       // 24 hours from now
//       const expiryTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes from now
//       localStorage.setItem('authToken', 'authenticated');
//       localStorage.setItem('authExpiry', new Date(expiryTime));
//       setIsAuthenticated(true);
//       setAuthModal(false); // Close the auth modal
//     } else {
//       alert('Invalid ID or password');
//     }
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditedCard((prevCard) => ({ ...prevCard, [name]: value }));
//   };

//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     onEdit(editedCard);
//     setIsEditing(false);
//   };

//   const requestAuth = () => {
//     setAuthModal(true);
//   };

//   return (
//     <div className="modal-overlay" onClick={closeModal}>
//       <div className="modal" onClick={(e) => e.stopPropagation()}>
//         {authModal && (
//           <div className="auth-modal">
//             <h3>Authenticate</h3>
//             <form onSubmit={handleAuthSubmit}>
//               <input
//                 type="text"
//                 name="id"
//                 value={credentials.id}
//                 onChange={handleAuthChange}
//                 placeholder="ID"
//                 required
//               />
//               <input
//                 type="password"
//                 name="password"
//                 value={credentials.password}
//                 onChange={handleAuthChange}
//                 placeholder="Password"
//                 required
//               />
//               <button type="submit">Submit</button>
//             </form>
//             <button onClick={() => setAuthModal(false)}>Cancel</button>
//           </div>
//         )}

//         {!isEditing ? (
//           <>
//             <h3>{cardData.title}</h3>
//             <p><strong>Author:</strong> {cardData.author}</p> {/* Display author */}
//             <p><strong>Category:</strong> {cardData.category}</p>
//             <p dangerouslySetInnerHTML={{ __html: cardData.text }}></p>

//             {isAuthenticated ? (
//               <>
//                 <button onClick={() => setIsEditing(true)}>Edit Card</button>
//                 <button onClick={() => onDelete(cardData._id)}>Delete Card</button>
//               </>
//             ) : (
//               <>
//                 <button onClick={requestAuth}>Edit Card (Auth Required)</button>
//                 <button onClick={requestAuth}>Delete Card (Auth Required)</button>
//               </>
//             )}
//           </>
//         ) : (
//           <>
//             <h3>Edit Card</h3>
//             <form onSubmit={handleEditSubmit}>
             
//               <input
//                 type="text"
//                 name="title"
//                 value={editedCard.title}
//                 onChange={handleEditChange}
//                 placeholder="Title"
//                 required
//               />
//                 <input
//                 type="text"
//                 name="author"
//                 value={editedCard.author}
//                 onChange={handleEditChange}
//                 placeholder="Author"
//                 required
//               />
//               <input
//                 type="text"
//                 name="category"
//                 value={editedCard.category}
//                 onChange={handleEditChange}
//                 placeholder="Category"
//                 required
//               />
//               <textarea
//                 name="text"
//                 className='txtedit'
//                 value={editedCard.text}
//                 onChange={handleEditChange}
//                 placeholder="Text"
//                 required
//               />
//               <button type="submit">Save Changes</button>
//             </form>
//             <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
//           </>
//         )}
//        <button className="close-modal-btn" onClick={closeModal}>&times;</button>
//       </div>
//     </div>
//   );
// };

// export default Bigcard;






































// import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// import "../styles/navfoot.css";

// const Bigcard = ({ closeModal, cardData, onDelete, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedCard, setEditedCard] = useState({ ...cardData });
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [authModal, setAuthModal] = useState(false);
//   const [credentials, setCredentials] = useState({ id: '', password: '' });

//   // useEffect(() => {
//   //   const token = localStorage.getItem('authToken');
//   //   const expiry = localStorage.getItem('authExpiry');
//   //   const isTokenValid = token && expiry && new Date().getTime() < new Date(expiry).getTime();
//   //   setIsAuthenticated(isTokenValid);
//   // }, []);

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     const expiry = localStorage.getItem('authExpiry');
//     console.log('Token:', token, 'Expiry:', expiry);
    
//     const isTokenValid = token && expiry && new Date().getTime() < new Date(parseInt(expiry)).getTime();
//     setIsAuthenticated(isTokenValid);
// }, []);

//   const handleAuthChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials((prevCreds) => ({ ...prevCreds, [name]: value }));
//   };

//   // const handleAuthSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     // Send credentials to the backend for authentication
//   //     const response = await axios.post('/api/auth/login', credentials);

//   //     // If successful, store token in localStorage
//   //     if (response.data.message === 'Authentication successful') {
//   //       // const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000;
//   //        // 24 hours from now
//   //        const expiryTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes from now

//   //       localStorage.setItem('authToken', 'authenticated');
//   //       localStorage.setItem('authExpiry', new Date(expiryTime));
        
//   //       setIsAuthenticated(true);
//   //       setAuthModal(false);
//   //     } else {
//   //       alert('Invalid ID or password');
//   //     }
//   //   } catch (error) {
//   //     alert('Authentication failed');
//   //   }
//   // };


// //   const handleAuthSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //         // Send credentials to the backend for authentication using fetch
// //         const response = await fetch('/api/auth/login', {
// //             method: 'POST',
// //             headers: {
// //                 'Content-Type': 'application/json' // Specify the content type
// //             },
// //             body: JSON.stringify(credentials) // Convert the credentials to JSON
// //         });

// //         // Check if the response is OK (status 200-299)
// //         if (!response.ok) {
// //             throw new Error('Network response was not ok');
// //         }

// //         const data = await response.json(); // Parse the JSON response

// //         // Check the response message
// //         if (data.message === 'Authentication successful') {
// //             // Set expiry time for 5 minutes
// //             const expiryTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes from now

// //             localStorage.setItem('authToken', 'authenticated');
// //             localStorage.setItem('authExpiry', expiryTime); // Store expiry time as a timestamp
            
// //             setIsAuthenticated(true);
// //             setAuthModal(false);
// //         } else {
// //             alert('Invalid ID or password');
// //         }
// //     } catch (error) {
// //         alert('Authentication failed: ' + error.message);
// //     }
// // };

// // const handleAuthSubmit = async (e) => {
// //   e.preventDefault();

// //   try {
// //       // Send credentials to the backend for authentication using fetch
// //       const response = await fetch('/api/auth/login', {
// //           method: 'POST',
// //           headers: {
// //               'Content-Type': 'application/json' // Specify the content type
// //           },
// //           body: JSON.stringify(credentials) // Convert the credentials to JSON
// //       });

// //       // Check if the response is OK (status 200-299)
// //       if (!response.ok) {
// //           const data = await response.json();
// //           throw new Error(data.message || 'Network response was not ok');
// //       }

// //       const data = await response.json(); // Parse the JSON response

// //       // Check the response message and handle successful authentication
// //       if (data.message === 'Authentication successful') {
// //           // Set expiry time for 5 minutes
// //           const expiryTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes from now

// //           // Store the authentication token and expiry in localStorage
// //           localStorage.setItem('authToken', 'authenticated');
// //           localStorage.setItem('authExpiry', expiryTime.toString()); // Store expiry time as a string
          
// //           setIsAuthenticated(true);
// //           setAuthModal(false);
// //           console.log('Authentication successful');
// //       } else {
// //           alert('Invalid ID or password');
// //       }
// //   } catch (error) {
// //       alert('Authentication failed: ' + error.message);
// //       console.error('Error during authentication:', error.message);
// //   }
// // };

// const handleAuthSubmit = async (e) => {
//   e.preventDefault();

//   try {
//       // Change '/api/auth/login' to the full backend URL if on different ports
//       const response = await fetch('/api/auth/login', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(credentials)
//       });

//       if (!response.ok) {
//           const data = await response.json();
//           throw new Error(data.message || 'Network response was not ok');
//       }

//       const data = await response.json();
//       if (data.message === 'Authentication successful') {
//           const expiryTime = new Date().getTime() + 5 * 60 * 1000;
//           localStorage.setItem('authToken', 'authenticated');
//           localStorage.setItem('authExpiry', expiryTime.toString());
//           setIsAuthenticated(true);
//           setAuthModal(false);
//       } else {
//           alert('Invalid ID or password');
//       }
//   } catch (error) {
//       alert('Authentication failed: ' + error.message);
//       console.error('Error during authentication:', error.message);
//   }
// };


//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditedCard((prevCard) => ({ ...prevCard, [name]: value }));
//   };

//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     onEdit(editedCard);
//     setIsEditing(false);
//   };

//   const requestAuth = () => {
//     setAuthModal(true);
//   };

//   return (
//     <div className="modal-overlay" onClick={closeModal}>
//       <div className="modal" onClick={(e) => e.stopPropagation()}>
//         {authModal && (
//           <div className="auth-modal">
//             <h3>Authenticate</h3>
//             <form onSubmit={handleAuthSubmit}>
//               <input
//                 type="text"
//                 name="id"
//                 value={credentials.id}
//                 onChange={handleAuthChange}
//                 placeholder="ID"
//                 required
//               />
//               <input
//                 type="password"
//                 name="password"
//                 value={credentials.password}
//                 onChange={handleAuthChange}
//                 placeholder="Password"
//                 required
//               />
//               <button type="submit">Submit</button>
//             </form>
//             <button onClick={() => setAuthModal(false)}>Cancel</button>
//           </div>
//         )}

//         {!isEditing ? (
//           <>
//             <h3>{cardData.title}</h3>
//             <p><strong>Category:</strong> {cardData.category}</p>
//             <p dangerouslySetInnerHTML={{ __html: cardData.text }}></p>
//             <p>Likes: {cardData.likes}</p>

//             {isAuthenticated ? (
//               <>
//                 <button onClick={() => setIsEditing(true)}>Edit Card</button>
//                 <button onClick={() => onDelete(cardData._id)}>Delete Card</button>
//               </>
//             ) : (
//               <>
//                 <button onClick={requestAuth}>Edit Card (Auth Required)</button>
//                 <button onClick={requestAuth}>Delete Card (Auth Required)</button>
//               </>
//             )}
//           </>
//         ) : (
//           <>
//             <h3>Edit Card</h3>
//             <form onSubmit={handleEditSubmit}>
//               <input
//                 type="text"
//                 name="id"
//                 value={editedCard.id}
//                 readOnly
//               />
//               <input
//                 type="text"
//                 name="title"
//                 value={editedCard.title}
//                 onChange={handleEditChange}
//                 placeholder="Title"
//                 required
//               />
//               <input
//                 type="text"
//                 name="category"
//                 value={editedCard.category}
//                 onChange={handleEditChange}
//                 placeholder="Category"
//                 required
//               />
//               <textarea
//                 name="text"
//                 value={editedCard.text}
//                 onChange={handleEditChange}
//                 placeholder="Text"
//                 required
//               />
//               <input
//                 type="number"
//                 name="likes"
//                 value={editedCard.likes}
//                 onChange={handleEditChange}
//                 placeholder="Likes"
//                 required
//               />
//               <button type="submit">Save Changes</button>
//             </form>
//             <button onClick={() => setIsEditing(false)}>Cancel Edit</button>
//           </>
//         )}
//         <button onClick={closeModal}>Close Modal</button>
//       </div>
//     </div>
//   );
// };

// export default Bigcard;
