export const API_ROOT = 'https://api.risecart.app';
export const DOMAIN = 'unik.risecart.net';

export const getImageUrl = (filename) => {
  if (!filename) return '';
  return `${API_ROOT}/uploads/${filename}`; // Adjust path if needed
};

export const fetchCategories = async (page = 1, limit = 50) => {
  try {
    const url = `${API_ROOT}/api/v1/tenant/category?page=${page}&limit=${limit}&domain=${DOMAIN}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return { data: [], totalCount: 0, hasMore: false };
  }
};
