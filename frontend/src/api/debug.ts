import axiosInstance from './axios';

// Test backend connection and endpoints
export const debugAPI = async () => {
  console.log('=== API DEBUG START ===');
  
  try {
    // Test 1: Check if backend is reachable
    console.log('1. Testing backend connection...');
    const healthCheck = await axiosInstance.get('/products');
    console.log('Backend is reachable');
    console.log('Response status:', healthCheck.status);
    console.log('Response headers:', healthCheck.headers);
    console.log('Raw response data:', healthCheck.data);
    console.log('Data type:', typeof healthCheck.data);
    console.log('Is Array:', Array.isArray(healthCheck.data));
    
    // Test 2: Check cart endpoint
    console.log('\n2. Testing cart endpoint...');
    const cartResponse = await axiosInstance.get('/cart');
    console.log('Cart response:', cartResponse.data);
    console.log('Cart data type:', typeof cartResponse.data);
    console.log('Cart is Array:', Array.isArray(cartResponse.data));
    
  } catch (error: any) {
    console.error('❌ API Debug Error:');
    if (error.response) {
      // Server responded with error
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      // No response received
      console.error('No response received from backend');
      console.error('Is backend running on http://localhost:5000?');
    } else {
      // Request setup error
      console.error('Error:', error.message);
    }
  }
  
  console.log('=== API DEBUG END ===');
};
