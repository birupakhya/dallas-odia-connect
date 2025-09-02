import React, { useState, useEffect } from 'react';
import { Search, Grid3X3, List, Image, Calendar, MapPin } from 'lucide-react';
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
  const [pageSize] = useState(20);

  const driveService = GoogleDriveService.getInstance();

  useEffect(() => {
    loadPhotos();
  }, [folderId, currentPage]);

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

  const openLightbox = (photo: GoogleDrivePhoto) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

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
                setCurrentPage(1); // Reset to first page
                // Note: pageSize is currently fixed, but we can make it dynamic later
              }}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value={20}>20</option>
              <option value={40}>40</option>
              <option value={60}>60</option>
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
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
            {filteredPhotos.map((photo) => (
              <Card
                key={photo.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  viewMode === 'list' ? 'flex flex-row' : ''
                }`}
                onClick={() => openLightbox(photo)}
              >
                {viewMode === 'grid' ? (
                  <>
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={photo.thumbnailLink}
                        alt={photo.description}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          loadImageWithFallbacks(photo, target);
                        }}
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{photo.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{photo.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{driveService.formatDate(photo.createdTime)}</span>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <>
                    <div className="w-24 h-24 overflow-hidden rounded-l-lg flex-shrink-0">
                      <img
                        src={photo.thumbnailLink}
                        alt={photo.description}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          loadImageWithFallbacks(photo, target);
                        }}
                      />
                    </div>
                    <CardContent className="p-4 flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{photo.name}</h3>
                        <span className="text-xs text-muted-foreground">{driveService.formatDate(photo.createdTime)}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{photo.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{photo.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>
            ))}
          </div>
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
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white hover:bg-black hover:bg-opacity-70"
              >
                ×
              </Button>
              <img
                src={selectedPhoto.thumbnailLink}
                alt={selectedPhoto.description}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  loadImageWithFallbacks(selectedPhoto, target);
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded">
                <h3 className="font-semibold text-lg mb-2">{selectedPhoto.name}</h3>
                <p className="text-sm">{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleDriveGallery;
