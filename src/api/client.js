export const API_ROOT = 'https://api.risecart.app';
export const DOMAIN = 'unik.risecart.net';

export const getImageUrl = (filename) => {
  if (!filename) return '';
  // Use the global R2 storage prefix for images
  return `https://pub-1c37b2c0ac504af39f174eebcbfdfd39.r2.dev/upload/${filename}`;
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

export const fetchProducts = async (page = 1, limit = 25, name = '') => {
  try {
    const url = `${API_ROOT}/api/v1/tenant/product/all?page=${page}&limit=${limit}&name=${name}&domain=${DOMAIN}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return { data: [], totalCount: 0, hasMore: false };
  }
};

export const fetchProductBySlug = async (slug) => {
  try {
    const url = `${API_ROOT}/api/v1/tenant/product/find-one-by-slug/${slug}?domain=${DOMAIN}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch product by slug: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    return null;
  }
};
