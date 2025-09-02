import React, { useState, useEffect } from 'react';
import { Search, Grid3X3, List, Image, Calendar, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import GoogleDriveService, { GoogleDrivePhoto } from '@/lib/google-drive';

interface GoogleDriveGalleryProps {
  folderId?: string;
  title?: string;
  subtitle?: string;
}

const GoogleDriveGallery = ({
  folderId = '1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ', // Your Ganesh Puja folder ID
  title = 'Ganesh Puja Celebration 2025',
  subtitle = 'Photos from our divine celebration of Lord Ganesh'
}: GoogleDriveGalleryProps) => {
  const [photos, setPhotos] = useState<GoogleDrivePhoto[]>([]);
  const [filteredPhotos, setFilteredPhotos] = useState<GoogleDrivePhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedPhoto, setSelectedPhoto] = useState<GoogleDrivePhoto | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const driveService = GoogleDriveService.getInstance();

  useEffect(() => {
    loadPhotos();
  }, [folderId, currentPage, pageSize]);

  useEffect(() => {
    filterPhotos();
  }, [photos, searchQuery]);

  const loadPhotos = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Loading photos from folder:', folderId, 'Page:', currentPage);
      
      const result = await driveService.getPhotosFromFolder(folderId, currentPage, pageSize);
      console.log('Photos loaded:', result);
      
      setPhotos(result.photos);
      setFilteredPhotos(result.photos);
      setTotalPhotos(result.totalPhotos);
      setTotalPages(result.totalPages);
    } catch (err) {
      console.error('Error loading photos:', err);
      setError('Failed to load photos. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const filterPhotos = async () => {
    try {
      let filtered = photos;
      
      // Apply search filter only
      if (searchQuery.trim()) {
        filtered = await driveService.searchPhotos(searchQuery, filtered);
      }
      
      setFilteredPhotos(filtered);
    } catch (err) {
      console.error('Error filtering photos:', err);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Lightbox navigation functions
  const openLightbox = (photo: GoogleDrivePhoto) => {
    setSelectedPhoto(photo);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedPhoto(null);
  };

  const goToNext = () => {
    if (selectedPhoto) {
      const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
      const nextIndex = (currentIndex + 1) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[nextIndex]);
    }
  };

  const goToPrevious = () => {
    if (selectedPhoto) {
      const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
      const prevIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
      setSelectedPhoto(filteredPhotos[prevIndex]);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedPhoto, filteredPhotos]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  // Enhanced image loading with multiple fallback URLs
  const loadImageWithFallbacks = (photo: GoogleDrivePhoto, imgElement: HTMLImageElement) => {
    const urls = driveService.getAllImageUrls(photo.id);
    let currentUrlIndex = 0;

    const tryNextUrl = () => {
      if (currentUrlIndex < urls.length) {
        console.log(`🖼️ Trying image URL ${currentUrlIndex + 1} for ${photo.name}:`, urls[currentUrlIndex]);
        imgElement.src = urls[currentUrlIndex];
        currentUrlIndex++;
      } else {
        console.log(`🖼️ All URLs failed for ${photo.name}, using placeholder`);
        imgElement.src = '/placeholder.svg';
      }
    };

    imgElement.onerror = tryNextUrl;
    imgElement.onload = () => {
      console.log(`🖼️ Image loaded successfully for ${photo.name}:`, imgElement.src);
    };

    // Start with the first URL
    tryNextUrl();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-xl text-muted-foreground">Loading your photos from Google Drive...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Error Loading Photos</h3>
              <p className="text-red-700 mb-4">{error}</p>
              <Button onClick={loadPhotos} variant="outline">
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{totalPhotos}</div>
              <div className="text-sm text-muted-foreground">Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1</div>
              <div className="text-sm text-muted-foreground">Event</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2025</div>
              <div className="text-sm text-muted-foreground">Year</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search photos..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Page Size Selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Show:</span>
            <select
              value={pageSize}
              onChange={(e) => {
                const newSize = parseInt(e.target.value);
                setPageSize(newSize); // Update pageSize state
                setCurrentPage(1); // Reset to first page
              }}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value={20}>20</option>
              <option value={40}>40</option>
              <option value={60}>60</option>
              <option value={80}>80</option>
              <option value={100}>100</option>
            </select>
            <span className="text-sm text-muted-foreground">per page</span>
          </div>

          {/* View Mode Toggle */}
          <div className="flex border rounded-md">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-r-none"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPhotos.length} of {totalPhotos} photos
          </p>
        </div>

        {/* Photo Grid/List */}
        {filteredPhotos.length === 0 ? (
          <div className="text-center py-20">
            <Image className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">No photos found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          <>
            {/* Grid View */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="group cursor-pointer overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
                    onClick={() => openLightbox(photo)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={photo.thumbnailLink}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                        onError={(e) => loadImageWithFallbacks(photo, e.target as HTMLImageElement)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* List View */}
            {viewMode === 'list' && (
              <div className="space-y-4">
                {filteredPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="group cursor-pointer overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
                    onClick={() => openLightbox(photo)}
                  >
                    <div className="flex items-center space-x-4 p-4">
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={photo.thumbnailLink}
                          alt=""
                          className="w-full h-full object-cover"
                          onError={(e) => loadImageWithFallbacks(photo, e.target as HTMLImageElement)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={prevPage} disabled={currentPage === 1}>
                Previous
              </Button>
              <span className="text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button variant="outline" onClick={nextPage} disabled={currentPage === totalPages}>
                Next
              </Button>
            </div>
            
            {/* Page Jump */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Go to:</span>
              <input
                type="number"
                min={1}
                max={totalPages}
                value={currentPage}
                onChange={(e) => {
                  const page = parseInt(e.target.value);
                  if (page >= 1 && page <= totalPages) {
                    goToPage(page);
                  }
                }}
                className="w-16 border rounded px-2 py-1 text-sm text-center"
              />
              <span className="text-sm text-muted-foreground">of {totalPages}</span>
            </div>
          </div>
        )}

        {/* Lightbox */}
        {lightboxOpen && selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <img
                src={selectedPhoto.thumbnailLink}
                alt=""
                className="max-w-full max-h-full object-contain rounded-lg"
                onError={(e) => loadImageWithFallbacks(selectedPhoto, e.target as HTMLImageElement)}
              />

              {/* Photo counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 rounded-full px-4 py-2 text-sm">
                {filteredPhotos.findIndex(p => p.id === selectedPhoto.id) + 1} of {filteredPhotos.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleDriveGallery;
