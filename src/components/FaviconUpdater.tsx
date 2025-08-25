import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FaviconUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    // Update favicon when route changes
    const updateFavicon = () => {
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      const shortcutIcon = document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement;
      const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
      
      const faviconUrl = '/konark-wheel-favicon.jpg?v=3';
      
      if (favicon) {
        favicon.href = faviconUrl;
      }
      if (shortcutIcon) {
        shortcutIcon.href = faviconUrl;
      }
      if (appleTouchIcon) {
        appleTouchIcon.href = faviconUrl;
      }
      
      // Also update any size-specific favicon links
      const sizeSpecificIcons = document.querySelectorAll('link[rel="icon"][sizes]');
      sizeSpecificIcons.forEach((icon) => {
        (icon as HTMLLinkElement).href = faviconUrl;
      });
    };

    updateFavicon();
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default FaviconUpdater;
