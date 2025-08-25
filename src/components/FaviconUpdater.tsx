import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FaviconUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    // Update favicon when route changes
    const updateFavicon = () => {
      const faviconUrl = '/konark-wheel-favicon.jpg?v=4';
      
      // Force remove existing favicon links and recreate them
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
      existingFavicons.forEach(link => {
        link.remove();
      });
      
      // Create new favicon links
      const createFaviconLink = (rel: string, sizes?: string) => {
        const link = document.createElement('link');
        link.rel = rel;
        link.type = 'image/jpeg';
        link.href = faviconUrl;
        if (sizes) link.sizes = sizes;
        document.head.appendChild(link);
      };
      
      // Add all necessary favicon links
      createFaviconLink('icon');
      createFaviconLink('shortcut icon');
      createFaviconLink('apple-touch-icon');
      createFaviconLink('icon', '16x16');
      createFaviconLink('icon', '32x32');
      createFaviconLink('icon', '48x48');
      createFaviconLink('icon', '192x192');
      createFaviconLink('icon', '512x512');
      
      // Force browser to reload favicon
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = faviconUrl + '&t=' + Date.now();
      document.head.appendChild(link);
      
      // Remove the temporary link after a short delay
      setTimeout(() => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      }, 100);
    };

    // Update immediately
    updateFavicon();
    
    // Also update after a short delay to ensure it takes effect
    const timeoutId = setTimeout(updateFavicon, 100);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default FaviconUpdater;
