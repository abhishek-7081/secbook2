const API_URL = 'http://localhost:8080/api'; // Remove the trailing slash

export const authenticateUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const responseText = await response.text();
    console.log('Raw response:', responseText);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    try {
      return JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse response as JSON:', e);
      throw new Error('Invalid JSON response from server');
    }
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;
  }
};