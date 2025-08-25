import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Calendar, MapPin, Users } from 'lucide-react';
import PhotoGallery from './PhotoGallery';

interface Photo {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  date?: string;
  location?: string;
  attendees?: number;
  category?: string;
}

interface PhotoGalleryGridProps {
  photos: Photo[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
}

const PhotoGalleryGrid = ({ photos, title, subtitle, showFilters = true }: PhotoGalleryGridProps) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(photos.map(photo => photo.category).filter(Boolean))];
  
  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openGallery = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeGallery = () => {
    setSelectedPhotoIndex(null);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Filters */}
        {showFilters && categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === 'all' ? 'All Photos' : category}
              </Button>
            ))}
          </div>
        )}

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <Card 
              key={photo.id} 
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm border border-border/50 hover:border-primary/30"
              onClick={() => openGallery(index)}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          <span className="text-sm font-medium">View</span>
                        </div>
                        <div className="text-xs opacity-80">
                          {index + 1} of {filteredPhotos.length}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  {photo.category && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground backdrop-blur-sm">
                        {photo.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* Photo Info */}
                <div className="p-4">
                  {photo.title && (
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {photo.title}
                    </h3>
                  )}
                  
                  {photo.description && (
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {photo.description}
                    </p>
                  )}

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      {photo.date && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{photo.date}</span>
                        </div>
                      )}
                      {photo.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{photo.location}</span>
                        </div>
                      )}
                    </div>
                    {photo.attendees && (
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{photo.attendees}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">
              <p className="text-lg mb-2">No photos found</p>
              <p className="text-sm">Try selecting a different category or check back later.</p>
            </div>
          </div>
        )}

        {/* Gallery Stats */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Showing {filteredPhotos.length} of {photos.length} photos
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </p>
        </div>
      </div>

      {/* Full Gallery Modal */}
      {selectedPhotoIndex !== null && (
        <PhotoGallery
          photos={filteredPhotos}
          isOpen={selectedPhotoIndex !== null}
          onClose={closeGallery}
          initialPhotoIndex={selectedPhotoIndex}
        />
      )}
    </section>
  );
};

export default PhotoGalleryGrid;
