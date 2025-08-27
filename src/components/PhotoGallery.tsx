import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  Download,
  Grid3X3,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  date?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  isOpen: boolean;
  onClose: () => void;
  initialPhotoIndex?: number;
}

const PhotoGallery = ({ photos, isOpen, onClose, initialPhotoIndex = 0 }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialPhotoIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentPhoto = photos[currentIndex];

  // Reset zoom and position when photo changes
  useEffect(() => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          goToNext();
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        case 'f':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 't':
          e.preventDefault();
          setShowThumbnails(!showThumbnails);
          break;
        case '=':
        case '+':
          e.preventDefault();
          zoomIn();
          break;
        case '-':
          e.preventDefault();
          zoomOut();
          break;
        case '0':
          e.preventDefault();
          resetZoom();
          break;
        case 'r':
          e.preventDefault();
          rotateImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, zoom, showThumbnails, goToNext, goToPrevious, onClose, toggleFullscreen, zoomIn, zoomOut, resetZoom, rotateImage]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  }, [photos.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  }, [photos.length]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const zoomIn = useCallback(() => {
    setZoom((prev) => Math.min(prev * 1.5, 5));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((prev) => Math.max(prev / 1.5, 0.1));
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const rotateImage = useCallback(() => {
    setRotation((prev) => (prev + 90) % 360);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = currentPhoto.src;
    link.download = `dos-gallery-${currentPhoto.id}.jpg`;
    link.click();
  };

  if (!currentPhoto) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-none w-screen h-screen p-0 bg-black/95 border-0">
        <div 
          ref={containerRef}
          className="relative w-full h-full flex flex-col"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
        >
          {/* Header Controls */}
          <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
                <div className="text-white">
                  <span className="font-medium">{currentPhoto.title || 'Photo'}</span>
                  <span className="text-white/60 ml-2">
                    {currentIndex + 1} of {photos.length}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={resetZoom}
                  className="text-white hover:bg-white/20"
                  title="Reset zoom (0)"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={rotateImage}
                  className="text-white hover:bg-white/20"
                  title="Rotate (R)"
                >
                  <RotateCw className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={downloadImage}
                  className="text-white hover:bg-white/20"
                  title="Download"
                >
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFullscreen}
                  className="text-white hover:bg-white/20"
                  title="Fullscreen (F)"
                >
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Main Image Container */}
          <div className="flex-1 flex items-center justify-center relative overflow-hidden">
            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 z-40 bg-black/50 text-white hover:bg-black/70 rounded-full h-12 w-12"
              title="Previous (←)"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 z-40 bg-black/50 text-white hover:bg-black/70 rounded-full h-12 w-12"
              title="Next (→)"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                ref={imageRef}
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                className="max-w-full max-h-full object-contain transition-transform duration-200"
                style={{
                  transform: `scale(${zoom}) rotate(${rotation}deg) translate(${position.x}px, ${position.y}px)`,
                  cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                }}
                draggable={false}
              />
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between">
              {/* Zoom Controls */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={zoomOut}
                  className="text-white hover:bg-white/20"
                  title="Zoom out (-)"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <span className="text-white text-sm min-w-[60px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={zoomIn}
                  className="text-white hover:bg-white/20"
                  title="Zoom in (+)"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>

              {/* Photo Info */}
              <div className="text-white text-sm text-center flex-1">
                {currentPhoto.description && (
                  <p className="text-white/80">{currentPhoto.description}</p>
                )}
                {currentPhoto.date && (
                  <p className="text-white/60 text-xs">{currentPhoto.date}</p>
                )}
              </div>

              {/* Thumbnail Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowThumbnails(!showThumbnails)}
                className="text-white hover:bg-white/20"
                title="Toggle thumbnails (T)"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Thumbnails */}
          {showThumbnails && (
            <div className="absolute bottom-16 left-0 right-0 z-40 bg-black/90 p-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {photos.map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentIndex
                        ? 'border-primary shadow-lg'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Keyboard Shortcuts Help */}
          <div className="absolute top-16 right-4 z-50 bg-black/80 text-white text-xs p-3 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
            <div className="space-y-1">
              <div>← → Navigate</div>
              <div>+ - Zoom</div>
              <div>0 Reset zoom</div>
              <div>R Rotate</div>
              <div>F Fullscreen</div>
              <div>T Thumbnails</div>
              <div>ESC Close</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoGallery;
