import Cookies from 'js-cookie';

export function storeRecentlyViewed(productId) {
    const existingRecentlyViewed = Cookies.get('recentlyViewed') || '';

    let updatedRecentlyViewed = existingRecentlyViewed.split(',');
  
    // Remove any empty strings from the split
    updatedRecentlyViewed = updatedRecentlyViewed.filter(id => id !== '');
  
    // Remove the product ID from the list if it already exists
    updatedRecentlyViewed = updatedRecentlyViewed.filter(id => id !== productId);
  
    // Add the new product ID to the beginning of the list
    updatedRecentlyViewed.unshift(productId);
  
    // Limit the list to a certain number of products (e.g., 10)
    const maxProducts = 10;
    updatedRecentlyViewed = updatedRecentlyViewed.slice(0, maxProducts);
  
    // Convert the array back to a comma-separated string
    const updatedRecentlyViewedString = updatedRecentlyViewed.join(',');
  
    // Store the updated list in the cookies
    Cookies.set('recentlyViewed', updatedRecentlyViewedString);
}