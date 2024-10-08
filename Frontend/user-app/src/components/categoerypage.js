// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const CategoryPage = () => {
//   const { category } = useParams();
//   const [cards, setCards] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCards = async () => {
//       console.log('Fetching cards for category:', category); // Log the category being used
  
//       try {
//         const response = await fetch('http://localhost:8080/api/cards');
//         console.log('Fetch response status:', response.status); // Log the response status
  
//         if (response.ok) {
//           const data = await response.json();
//           console.log('Fetched data:', data); // Log the raw data fetched from the server
  
//           if (Array.isArray(data)) {
//             // Check if the data is an array
//             const filteredCards = data.filter(card => {
//               console.log('Processing card:', card); // Log each card being processed
//               if (card && card.category) {
//                 return card.category.toLowerCase() === category.toLowerCase();
//               } else {
//                 console.warn('Card is missing category field:', card); // Warn if card has no category
//                 return false;
//               }
//             });
//             console.log('Filtered cards:', filteredCards); // Log the filtered cards
            
//             setCards(filteredCards);
//           } else {
//             console.error('Unexpected data structure:', data); // Log if the data is not an array
//           }
//         } else {
//           console.error('Failed to fetch cards:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching cards:', error); // Log any error that occurs
//       }
//     };
  
//     fetchCards();
//   }, [category]);
  
  
//   return (
//     <div>
//       <h2>Cards in category: {category}</h2>
//       <button onClick={() => navigate(-1)}>Back to Categories</button>
//       <div className="card-container">
//         {cards.length > 0 ? (
//           cards.map((card, index) => (
//             <div className="card" key={index}>
//               <h3>{card.title}</h3>
//               <p>{card.text}</p>
//             </div>
//           ))
//         ) : (
//           <p>No cards found for this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Bigcard from '../components/bigcard.js'; // Import the Bigcard component
import "../styles/category.css"; // Assuming you have styles for the modal/card

const CategoryPage = () => {
  const { category } = useParams();
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // For tracking the selected card for Bigcard
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCards = async () => {
      console.log('Fetching cards for category:', category); // Log the category being used
  
      try {
        const response = await fetch('http://localhost:8080/api/cards');
        console.log('Fetch response status:', response.status); // Log the response status
  
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched data:', data); // Log the raw data fetched from the server
  
          if (Array.isArray(data)) {
            // Check if the data is an array
            const filteredCards = data.filter(card => {
              console.log('Processing card:', card); // Log each card being processed
              if (card && card.category) {
                return card.category.toLowerCase() === category.toLowerCase();
              } else {
                console.warn('Card is missing category field:', card); // Warn if card has no category
                return false;
              }
            });
            console.log('Filtered cards:', filteredCards); // Log the filtered cards
            
            setCards(filteredCards);
          } else {
            console.error('Unexpected data structure:', data); // Log if the data is not an array
          }
        } else {
          console.error('Failed to fetch cards:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching cards:', error); // Log any error that occurs
      }
    };
  
    fetchCards();
  }, [category]);

  // Function to open the Bigcard modal for a specific card
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  // Function to handle editing the card (you can update the card in the state)
  const handleEdit = (updatedCard) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card._id === updatedCard._id ? updatedCard : card
      )
    );
    closeModal();
  };

  // Function to handle deleting the card (you can remove it from the state)
  const handleDelete = (cardId) => {
    setCards((prevCards) => prevCards.filter((card) => card._id !== cardId));
    closeModal();
  };

  return (
    <div>
      <h2>Cards in category: {category}</h2>
      <button onClick={() => navigate(-1)}>Back to Categories</button>
      <div className="card-container">
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(card)} // Open modal with card details
            >
              <h3>{card.title}</h3>
              {/* <p>{card.text}</p> */}
              <p><strong>Author:</strong> {card.author}</p> {/* Added author display */}
              <p dangerouslySetInnerHTML={{ __html: card.text }}></p> {/* Render text with HTML */}
            </div>
          ))
        ) : (
          <p>No cards found for this category.</p>
        )}
      </div>

      {/* Modal for Bigcard */}
      {showModal && selectedCard && (
        <Bigcard
          closeModal={closeModal}
          cardData={selectedCard}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default CategoryPage;
