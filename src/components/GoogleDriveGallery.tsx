import React, { useState, useEffect } from 'react';
import { Image, X, ChevronLeft, ChevronRight, ExternalLink, Download, ZoomIn, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import GoogleDriveService, { GoogleDrivePhoto } from '@/lib/google-drive';

interface GoogleDriveGalleryProps {
  folderId?: string;
  title?: string;
  subtitle?: string;
}

const GoogleDriveGallery: React.FC<GoogleDriveGalleryProps> = ({
  folderId = '1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ',
  title = 'Ganesh Puja Celebration 2025',
  subtitle = 'Relive the divine moments from our celebration of Lord Ganesh'
}) => {
  const [photos, setPhotos] = useState<GoogleDrivePhoto[]>([]);
  const [filteredPhotos, setFilteredPhotos] = useState<GoogleDrivePhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<GoogleDrivePhoto | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const driveService = GoogleDriveService.getInstance();

  useEffect(() => {
    loadPhotos();
  }, [folderId]);

  // Enhanced image loading with multiple fallback URLs
  const loadImageWithFallbacks = (photo: GoogleDrivePhoto, imgElement: HTMLImageElement) => {
    const urls = driveService.getAllImageUrls(photo.id);
    let currentUrlIndex = 0;
    
    const tryNextUrl = () => {
      if (currentUrlIndex < urls.length) {
        imgElement.src = urls[currentUrlIndex];
        currentUrlIndex++;
      } else {
        imgElement.src = '/placeholder.svg';
      }
    };
    
    imgElement.onerror = tryNextUrl;
    imgElement.onload = () => {
      imgElement.classList.add('loaded');
    };
    
    tryNextUrl();
  };

  // Lightbox navigation functions
  const openLightbox = (photo: GoogleDrivePhoto) => {
    setSelectedPhoto(photo);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedPhoto(null);
    setIsFullscreen(false);
    document.body.style.overflow = 'unset';
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
        case 'f':
          setIsFullscreen(!isFullscreen);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedPhoto, filteredPhotos, isFullscreen]);

  const loadPhotos = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await driveService.getPhotosFromFolder(folderId, 1, 20); // Fixed page size of 20
      setPhotos(result.photos);
      setFilteredPhotos(result.photos);
      // setTotalPhotos(result.totalPhotos); // Removed as per new_code
      // setTotalPages(result.totalPages); // Removed as per new_code
    } catch (err) {
      console.error('Failed to load photos:', err);
      setError('Failed to load photos. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const openInGoogleDrive = (photo: GoogleDrivePhoto) => {
    window.open(photo.webViewLink, '_blank');
  };

  const getFullScaleImageUrl = (fileId: string) => {
    // Try to get the highest quality image possible
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
            <h2 className="text-2xl font-serif font-semibold text-primary">Loading your memories...</h2>
            <p className="text-muted-foreground">Please wait while we gather your photos</p>
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
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <h2 className="text-2xl font-serif font-semibold text-red-800 mb-2">Oops! Something went wrong</h2>
              <p className="text-red-700 mb-4">{error}</p>
              <Button onClick={loadPhotos} variant="outline">Try Again</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{photos.length}</div>
              <div className="text-muted-foreground">Total Photos</div>
            </div>
            {/* Removed Pages and Per Page stats */}
          </div>

          {/* Search and Controls */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
              {/* View All in Drive Button */}
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(`https://drive.google.com/drive/folders/${folderId}`, '_blank')}
                className="bg-background/80 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View All in Drive
              </Button>

              {/* Page Size Selector - Fixed at 20 */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Showing 20 photos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-20">
              <Image className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">No photos found</h3>
              <p className="text-muted-foreground">Try adjusting your search or page size</p>
            </div>
          ) : (
            <>
              {/* Masonry Layout (Default) */}
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
                {filteredPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="break-inside-avoid group cursor-pointer overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                    onClick={() => openLightbox(photo)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={photo.thumbnailLink}
                        alt=""
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => loadImageWithFallbacks(photo, e.target as HTMLImageElement)}
                      />
                      {/* Overlay with actions */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="h-8 w-8 p-0 rounded-full bg-white/90 hover:bg-white text-black"
                            onClick={(e) => {
                              e.stopPropagation();
                              openInGoogleDrive(photo);
                            }}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="h-8 w-8 p-0 rounded-full bg-white/90 hover:bg-white text-black"
                            onClick={(e) => {
                              e.stopPropagation();
                              openLightbox(photo);
                            }}
                          >
                            <ZoomIn className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Pagination */}
          {/* Removed pagination as per new_code */}
        </div>
      </section>

      {/* Access Options Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
            How to Access Your Photos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-xl border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ZoomIn className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Browse in Gallery</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Use the masonry layout above to browse through photos with search and pagination
              </p>
              <Button variant="outline" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Back to Gallery
              </Button>
            </div>

            <div className="bg-background p-6 rounded-xl border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Maximize2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">View Full Scale</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Click any photo to open in lightbox, then use "View Full Scale" for original resolution
              </p>
              <span className="text-xs text-muted-foreground">Click photos above to try</span>
            </div>

            <div className="bg-background p-6 rounded-xl border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Browse All in Drive</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Access the complete folder directly in Google Drive for full browsing experience
              </p>
              <Button 
                variant="default" 
                size="sm" 
                onClick={() => window.open(`https://drive.google.com/drive/folders/${folderId}`, '_blank')}
              >
                Open in Drive
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox */}
      {lightboxOpen && selectedPhoto && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className={`relative ${isFullscreen ? 'w-full h-full' : 'max-w-6xl max-h-[90vh]'}`}>
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-4 hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-4 hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Fullscreen toggle */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="absolute top-4 left-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
              title="Toggle fullscreen (F)"
            >
              <Maximize2 className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="flex items-center justify-center h-full">
              <img
                src={getFullScaleImageUrl(selectedPhoto.id)}
                alt=""
                className={`${isFullscreen ? 'w-full h-full' : 'max-w-full max-h-full'} object-contain rounded-lg`}
                onError={(e) => {
                  // Fallback to thumbnail if full-scale fails
                  (e.target as HTMLImageElement).src = selectedPhoto.thumbnailLink;
                }}
              />
            </div>

            {/* Photo counter and actions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
              {/* Photo counter */}
              <div className="text-white bg-black/50 rounded-full px-4 py-2 text-sm">
                {filteredPhotos.findIndex(p => p.id === selectedPhoto.id) + 1} of {filteredPhotos.length}
              </div>
              
              {/* Action buttons */}
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => openInGoogleDrive(selectedPhoto)}
                  className="bg-white/90 hover:bg-white text-black"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in Drive
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => window.open(getFullScaleImageUrl(selectedPhoto.id), '_blank')}
                  className="bg-white/90 hover:bg-white text-black"
                >
                  <Download className="h-4 w-4 mr-2" />
                  View Full Scale
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleDriveGallery;
