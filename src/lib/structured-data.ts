// Structured Data Schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dallas Odia Society",
  "alternateName": "DOS",
  "url": "https://dallasodiasociety.org",
  "logo": "https://dallasodiasociety.org/assets/dos-logo.jpg",
  "description": "A non-profit organization dedicated to promoting and preserving Odia culture, heritage, and values among Odia people and the wider community in the Dallas-Fort Worth metropolitan area.",
  "foundingDate": "1998",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dallas",
    "addressRegion": "Texas",
    "addressCountry": "US"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "Board of Directors",
      "email": "BoD@DallasOdiaSociety.org"
    },
    {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "Treasurer",
      "email": "Treasurer@DallasOdiaSociety.org"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/DallasOdiaSociety",
    "https://www.instagram.com/dallasodiasociety",
    "https://twitter.com/DallasOdiaSociety"
  ],
  "areaServed": {
    "@type": "City",
    "name": "Dallas-Fort Worth"
  },
  "knowsAbout": [
    "Odia Culture",
    "Indian Community",
    "Cultural Events",
    "Non-profit Organization",
    "Community Service"
  ]
};

export const eventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  organizer: string;
  eventStatus: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": event.name,
  "description": event.description,
  "startDate": event.startDate,
  "endDate": event.endDate || event.startDate,
  "location": {
    "@type": "Place",
    "name": event.location,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dallas",
      "addressRegion": "Texas",
      "addressCountry": "US"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": event.organizer,
    "url": "https://dallasodiasociety.org"
  },
  "eventStatus": event.eventStatus,
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "price": "0",
    "priceCurrency": "USD"
  }
});

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://dallasodiasociety.org${item.url}`
  }))
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dallasodiasociety.org/#organization",
  "name": "Dallas Odia Society",
  "image": "https://dallasodiasociety.org/assets/dos-logo.jpg",
  "description": "Non-profit organization promoting Odia culture and community in Dallas-Fort Worth area",
  "url": "https://dallasodiasociety.org",
  "telephone": "",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dallas",
    "addressRegion": "Texas",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.7767,
    "longitude": -96.7970
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.facebook.com/DallasOdiaSociety",
    "https://www.instagram.com/dallasodiasociety",
    "https://twitter.com/DallasOdiaSociety"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Dallas Odia Society",
  "url": "https://dallasodiasociety.org",
  "description": "Official website of Dallas Odia Society - promoting Odia culture and community in Dallas-Fort Worth",
  "publisher": {
    "@type": "Organization",
    "name": "Dallas Odia Society"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://dallasodiasociety.org/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
