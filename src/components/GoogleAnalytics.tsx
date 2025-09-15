import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 setup
const GA_TRACKING_ID = 'G-EH90Z18K3Z'; // Dallas Odia Society GA4 Property

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = window.gtag || function() {
      (window.gtag as any).q = (window.gtag as any).q || [];
      (window.gtag as any).q.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }, []);

  useEffect(() => {
    // Track page views on route changes
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
