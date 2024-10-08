// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "../styles/category.css"

// const CategoryList = () => {
//   const [uniqueCategories, setUniqueCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCards = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/cards');
//         if (response.ok) {
//           const data = await response.json();
//           // Extract unique categories from the cards
//           const categories = [...new Set(data.map(card => card.category))];
//           setUniqueCategories(categories);
//         } else {
//           console.error('Failed to fetch cards:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching cards:', error);
//       }
//     };

//     fetchCards();
//   }, []);

//   return (
//     <div>
//       <h2>Categories</h2>
//       <div className="category-container">
//         {uniqueCategories.length > 0 ? (
//           uniqueCategories.map((category, index) => (
//             <div className="category-card" key={index} onClick={() => navigate(`/category/${encodeURIComponent(category)}`)}>
//               <h3>{category}</h3>
//             </div>
//           ))
//         ) : (
//           <p>No categories available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/category.css";

const CategoryList = () => {
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [error, setError] = useState(null); // State to handle fetch errors
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [categoriesPerPage] = useState(16); // Number of categories per page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/cards');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            // Ensure data is an array before proceeding
            const categories = [...new Set(data.map(card => card.category).filter(Boolean))]; // Remove undefined/null categories
            setUniqueCategories(categories);
          } else {
            throw new Error('Unexpected response structure');
          }
        } else {
          throw new Error('Failed to fetch cards: ' + response.statusText);
        }
      } catch (error) {
        console.error('Error fetching cards:', error);
        setError(error.message); // Set error message
      }
    };

    fetchCards();
  }, []);

  // Filter categories based on search term
  const filteredCategories = uniqueCategories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstCategory, indexOfLastCategory);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);

  // Handlers for pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      <input
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)} // Update search term as user types
        className="category-search-input" // Optional CSS class for styling
      />
      <div className="category-container">
        {error ? (
          <p className="error-message">{error}</p> // Display error message if any
        ) : currentCategories.length > 0 ? (
          currentCategories.map((category, index) => (
            <div
              className="category-card"
              key={index}
              onClick={() => navigate(`/category/${encodeURIComponent(category)}`)}
            >
              <h3>{category}</h3>
            </div>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button 
          onClick={handlePreviousPage} 
          disabled={currentPage === 1} 
          className="pagination-button"
        >
          Previous
        </button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className="pagination-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CategoryList;
