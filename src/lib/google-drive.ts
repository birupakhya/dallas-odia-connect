// Google Drive API integration - Public access approach
const GOOGLE_DRIVE_API_BASE = 'https://www.googleapis.com/drive/v3';
const API_KEY = 'AIzaSyCtl_7LMYeiTZOeD-NqDM3lAwHOv979GIo';

// Event configurations for different events
export const EVENT_CONFIGS = {
  'ganesh-puja-2025': {
    folderId: '1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ',
    title: 'Ganesh Puja Celebration 2025',
    subtitle: 'Relive the divine moments from our celebration of Lord Ganesh',
    date: 'Saturday, August 30, 2025',
    time: '10:30 AM - 1:45 PM',
    location: 'Shri Ram Mandir, 6521 Chase Oaks Blvd, Plano, TX 75023',
    eventPlan: {
      '10:30 AM': 'Puja',
      '12:30 PM': 'Lunch',
      '1:45 PM': 'Clean-up'
    }
  }
  // Future events can be added here:
  // 'kumar-purnima-2025': { ... },
  // 'diwali-2025': { ... },
  // etc.
};

const FOLDER_ID = EVENT_CONFIGS['ganesh-puja-2025'].folderId; // Default folder ID

export interface GoogleDriveFile {
  id: string;
  name: string;
  mimeType: string;
  size: string;
  createdTime: string;
  webViewLink: string;
  thumbnailLink?: string;
}

export interface GoogleDrivePhoto {
  id: string;
  name: string;
  webViewLink: string;
  thumbnailLink: string;
  createdTime: string;
  size: string;
  category: string;
  eventType: string;
  description: string;
  location: string;
  attendees: number;
  isVideo: boolean;
  videoUrl?: string;
}

export class GoogleDriveService {
  private static instance: GoogleDriveService;

  private constructor() {}

  static getInstance(): GoogleDriveService {
    if (!GoogleDriveService.instance) {
      GoogleDriveService.instance = new GoogleDriveService();
    }
    return GoogleDriveService.instance;
  }

  // Get real photos from your Google Drive folder with pagination
  async getPhotosFromFolder(folderId: string = FOLDER_ID, page: number = 1, pageSize: number = 20): Promise<{ photos: GoogleDrivePhoto[], totalPhotos: number, totalPages: number }> {
    try {
      console.log('🔍 Fetching photos from Google Drive folder:', folderId, `(Page ${page}, ${pageSize} per page)`);
      
      let allPhotos: GoogleDrivePhoto[] = [];
      let pageToken: string | undefined;
      let totalFiles = 0;
      
      // First, get all photos to calculate total count using API key
      do {
        const apiUrl = `${GOOGLE_DRIVE_API_BASE}/files?q='${folderId}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType,size,createdTime,webViewLink),nextPageToken&orderBy=createdTime desc&maxResults=1000${pageToken ? `&pageToken=${pageToken}` : ''}`;
        
        const filesResponse = await fetch(apiUrl);

        if (!filesResponse.ok) {
          const errorText = await filesResponse.text();
          console.error('❌ API Response Error:', filesResponse.status, filesResponse.statusText);
          console.error('❌ Error Details:', errorText);
          throw new Error(`Failed to fetch files: ${filesResponse.status} ${filesResponse.statusText}`);
        }

        const filesData = await filesResponse.json();
        const files: GoogleDriveFile[] = filesData.files || [];
        totalFiles += files.length;

        // Filter for image and video files and convert to photo format
        const mediaFiles = files.filter(file => 
          file.mimeType.startsWith('image/') || file.mimeType.startsWith('video/')
        );
        const pagePhotos: GoogleDrivePhoto[] = mediaFiles.map((file, index) => ({
          id: file.id,
          name: file.name,
          webViewLink: file.webViewLink,
          thumbnailLink: this.getPublicImageUrl(file.id),
          createdTime: file.createdTime,
          size: this.formatFileSize(parseInt(file.size || '0')),
          category: 'Ganesh Puja 2025',
          eventType: 'Religious Events',
          description: this.generateDescription(file.name, index + 1),
          location: 'Shri Ram Mandir, 6521 Chase Oaks Blvd, Plano, TX 75023',
          attendees: 0,
          isVideo: file.mimeType.startsWith('video/'),
          videoUrl: file.mimeType.startsWith('video/') ? this.getVideoUrl(file.id) : undefined
        }));

        allPhotos = allPhotos.concat(pagePhotos);
        pageToken = filesData.nextPageToken;
        
      } while (pageToken);

      console.log(`📊 Total photos found: ${allPhotos.length} from ${totalFiles} total files`);

      // Calculate pagination
      const totalPhotos = allPhotos.length;
      const totalPages = Math.ceil(totalPhotos / pageSize);
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const pagePhotos = allPhotos.slice(startIndex, endIndex);

      console.log(`📄 Page ${page}: Showing photos ${startIndex + 1}-${Math.min(endIndex, totalPhotos)} of ${totalPhotos}`);
      
      return {
        photos: pagePhotos,
        totalPhotos,
        totalPages
      };

    } catch (error) {
      console.error('💥 Error fetching photos from Google Drive:', error);
      
      // Fallback to sample data if API fails
      console.log('🔄 Falling back to sample photos');
      const samplePhotos = this.getSamplePhotos();
      return {
        photos: samplePhotos,
        totalPhotos: samplePhotos.length,
        totalPages: 1
      };
    }
  }

  // Generate public image URL - this will work if images are made public
  getPublicImageUrl(fileId: string): string {
    // Use the large thumbnail format that works with current permissions
    // This format bypasses the need for "public on the web" permissions
    const url = `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
    console.log(`🔗 Generated working thumbnail URL for ${fileId}:`, url);
    return url;
  }

  // Generate video URL for Google Drive videos
  getVideoUrl(fileId: string): string {
    // Use the video preview format that works with "anyone with the link" permissions
    const url = `https://drive.google.com/file/d/${fileId}/preview`;
    console.log(`🎥 Generated video URL for ${fileId}:`, url);
    return url;
  }

  // Get all available image URLs for a file ID - ordered by compatibility
  getAllImageUrls(fileId: string): string[] {
    return [
      // Primary format - Large thumbnail that works with current permissions
      `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`,
      // Alternative thumbnail sizes
      `https://drive.google.com/thumbnail?id=${fileId}&sz=w600`,
      `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`,
      // Fallback formats (might work if permissions change)
      `https://drive.google.com/uc?export=view&id=${fileId}`,
      `https://drive.google.com/file/d/${fileId}/preview`,
      `https://drive.google.com/file/d/${fileId}/view`,
      // Direct download format (might work for some file types)
      `https://drive.google.com/uc?export=download&id=${fileId}`
    ];
  }

  // Test different access strategies
  async testAccessStrategies(fileId: string): Promise<{ strategy: string, accessible: boolean, workingUrl?: string }[]> {
    const strategies = [
      {
        name: 'Public Image URL',
        url: `https://drive.google.com/uc?export=view&id=${fileId}`,
        description: 'Standard public image format'
      },
      {
        name: 'File Preview',
        url: `https://drive.google.com/file/d/${fileId}/preview`,
        description: 'Google Drive preview format'
      },
      {
        name: 'Large Thumbnail',
        url: `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`,
        description: 'Large thumbnail format'
      },
      {
        name: 'Medium Thumbnail',
        url: `https://drive.google.com/thumbnail?id=${fileId}&sz=w600`,
        description: 'Medium thumbnail format'
      },
      {
        name: 'Small Thumbnail',
        url: `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`,
        description: 'Small thumbnail format'
      }
    ];

    const results = [];
    
    for (const strategy of strategies) {
      try {
        console.log(`🧪 Testing strategy: ${strategy.name}`);
        
        const result = await this.testImageUrl(strategy.url);
        results.push({
          strategy: strategy.name,
          accessible: result.accessible,
          workingUrl: result.workingUrl,
          description: strategy.description
        });
        
        // If this strategy works, we can stop testing
        if (result.accessible) {
          console.log(`✅ Strategy ${strategy.name} works!`);
          break;
        }
        
      } catch (error) {
        console.log(`❌ Strategy ${strategy.name} failed:`, error);
        results.push({
          strategy: strategy.name,
          accessible: false,
          description: strategy.description
        });
      }
    }
    
    return results;
  }

  // Test a specific image URL
  private async testImageUrl(url: string): Promise<{ accessible: boolean, workingUrl?: string }> {
    return new Promise((resolve) => {
      const img = new Image();
      
      img.onload = () => {
        resolve({ accessible: true, workingUrl: url });
      };
      
      img.onerror = () => {
        resolve({ accessible: false });
      };
      
      // Set a timeout to avoid hanging
      setTimeout(() => {
        resolve({ accessible: false });
      }, 3000);
      
      // Try to load the image
      img.src = url;
    });
  }

  // Format file size
  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Generate photo description based on filename
  private generateDescription(filename: string, index: number): string {
    const baseName = filename.replace(/\.[^/.]+$/, ''); // Remove file extension
    const descriptions = [
      'Traditional Ganesh Puja rituals performed with devotion and traditional ceremonies',
      'Community gathering and cultural celebration during the auspicious occasion',
      'Beautiful decorations and traditional setup for the divine ceremony',
      'Devotees participating in the sacred rituals and prayers',
      'Cultural dance performances celebrating our rich heritage',
      'Traditional Odia cuisine and community feast',
      'Spiritual atmosphere during the divine celebration',
      'Community bonding and cultural exchange'
    ];
    
    return descriptions[index % descriptions.length] || 'Beautiful moment from Ganesh Puja Celebration 2025';
  }

  // Fallback sample data if API fails
  private getSamplePhotos(): GoogleDrivePhoto[] {
    console.log('🔄 Using sample photos as fallback');
    return [
      {
        id: 'sample-1',
        name: 'IMG_2181.jpg',
        webViewLink: 'https://drive.google.com/file/d/sample-1/view',
        thumbnailLink: 'https://picsum.photos/400/400?random=1',
        createdTime: '2025-08-30T10:30:00Z',
        size: '2.1 MB',
        category: 'Ganesh Puja 2025',
        eventType: 'Religious Events',
        description: 'Traditional Ganesh Puja rituals performed with devotion and traditional ceremonies',
        location: 'Shri Ram Mandir, 6521 Chase Oaks Blvd, Plano, TX 75023',
        attendees: 150,
        isVideo: false,
        videoUrl: undefined
      },
      {
        id: 'sample-2',
        name: 'IMG_2182.jpg',
        webViewLink: 'https://drive.google.com/file/d/sample-2/view',
        thumbnailLink: 'https://picsum.photos/400/400?random=2',
        createdTime: '2025-08-30T10:35:00Z',
        size: '1.8 MB',
        category: 'Ganesh Puja 2025',
        eventType: 'Religious Events',
        description: 'Community gathering and cultural celebration during the auspicious occasion',
        location: 'Shri Ram Mandir, 6521 Chase Oaks Blvd, Plano, TX 75023',
        attendees: 150,
        isVideo: false,
        videoUrl: undefined
      }
    ];
  }

  // Search photos by name or description
  async searchPhotos(query: string, photos: GoogleDrivePhoto[]): Promise<GoogleDrivePhoto[]> {
    if (!query.trim()) return photos;
    
    const searchTerm = query.toLowerCase();
    return photos.filter(photo => 
      photo.name.toLowerCase().includes(searchTerm) ||
      photo.description.toLowerCase().includes(searchTerm) ||
      photo.category.toLowerCase().includes(searchTerm)
    );
  }

  // Filter photos by category
  async filterPhotosByCategory(category: string, photos: GoogleDrivePhoto[]): Promise<GoogleDrivePhoto[]> {
    if (category === 'all') return photos;
    return photos.filter(photo => photo.category === category);
  }

  // Filter photos by file type (image or video)
  async filterPhotosByFileType(fileType: 'image' | 'video' | 'all', photos: GoogleDrivePhoto[]): Promise<GoogleDrivePhoto[]> {
    if (fileType === 'all') return photos;
    return photos.filter(photo => photo.isVideo === (fileType === 'video'));
  }

  // Format date for display
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Test method to check API access
  async testApiAccess(): Promise<any> {
    try {
      console.log('🧪 Testing Google Drive API access...');
      
      // Test 1: Simple API call to check if API key works
      const testUrl = `${GOOGLE_DRIVE_API_BASE}/about?key=${API_KEY}&fields=user,storageQuota`;
      console.log('🧪 Test 1 - API Key validation:', testUrl);
      
      const testResponse = await fetch(testUrl);
      const testData = await testResponse.json();
      console.log('🧪 Test 1 Result:', testData);
      
      // Test 2: Check folder access
      const folderUrl = `${GOOGLE_DRIVE_API_BASE}/files/${FOLDER_ID}?key=${API_KEY}&fields=id,name,permissions`;
      console.log('🧪 Test 2 - Folder access check:', folderUrl);
      
      const folderResponse = await fetch(folderUrl);
      const folderData = await folderResponse.json();
      console.log('🧪 Test 2 Result:', folderData);
      
      // Test 3: List files in folder
      const filesUrl = `${GOOGLE_DRIVE_API_BASE}/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType)&maxResults=5`;
      console.log('🧪 Test 3 - List files in folder:', filesUrl);
      
      const filesResponse = await fetch(filesUrl);
      const filesData = await filesResponse.json();
      console.log('🧪 Test 3 Result:', filesData);
      
      return {
        apiKeyWorking: testResponse.ok,
        folderAccessible: folderResponse.ok,
        filesListed: filesResponse.ok,
        testData,
        folderData,
        filesData
      };
      
    } catch (error) {
      console.error('🧪 API Test failed:', error);
      return { error: error.message };
    }
  }

  // Test if an image URL is accessible
  async testImageAccess(fileId: string): Promise<{ accessible: boolean, workingUrl?: string, error?: string }> {
    const urls = this.getAllImageUrls(fileId);
    
    for (const url of urls) {
      try {
        console.log(`🧪 Testing image access for ${fileId}:`, url);
        
        // Create an image element to test loading
        const img = new Image();
        
        return new Promise((resolve) => {
          img.onload = () => {
            console.log(`✅ Image URL accessible:`, url);
            resolve({ accessible: true, workingUrl: url });
          };
          
          img.onerror = () => {
            console.log(`❌ Image URL failed:`, url);
            resolve({ accessible: false, error: 'Image failed to load' });
          };
          
          // Set a timeout to avoid hanging
          setTimeout(() => {
            resolve({ accessible: false, error: 'Image load timeout' });
          }, 5000);
          
          // Try to load the image
          img.src = url;
        });
        
      } catch (error) {
        console.log(`❌ Image URL failed:`, url, error);
        continue;
      }
    }
    
    return { accessible: false, error: 'All image URLs failed' };
  }

  // Test if images need to be made "public on the web" instead of "anyone with the link"
  async testPublicWebAccess(fileId: string): Promise<{ accessible: boolean, workingUrl?: string, error?: string }> {
    try {
      console.log(`🌐 Testing public web access for ${fileId}...`);
      
      // Test the public image URL format that should work with "public on the web"
      const publicUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
      
      // Create an image element to test loading
      const img = new Image();
      
      return new Promise((resolve) => {
        img.onload = () => {
          console.log(`✅ Public web access works:`, publicUrl);
          resolve({ accessible: true, workingUrl: publicUrl });
        };
        
        img.onerror = () => {
          console.log(`❌ Public web access failed:`, publicUrl);
          resolve({ accessible: false, error: 'Image needs to be made "public on the web"' });
        };
        
        // Set a timeout to avoid hanging
        setTimeout(() => {
          resolve({ accessible: false, error: 'Image load timeout' });
        }, 5000);
        
        // Try to load the image
        img.src = publicUrl;
      });
      
    } catch (error) {
      console.log(`❌ Public web access test failed:`, error);
      return { accessible: false, error: `Test failed: ${error}` };
    }
  }

  // Test if images are accessible with current permissions
  async testCurrentPermissions(): Promise<{ accessible: boolean, message: string }> {
    try {
      console.log('🔍 Testing current image permissions...');
      
      // Get a sample photo to test
      const photos = await this.getPhotosFromFolder(FOLDER_ID, 1, 1);
      if (photos.photos.length === 0) {
        return { accessible: false, message: 'No photos found to test' };
      }
      
      const testPhoto = photos.photos[0];
      console.log('🧪 Testing permissions with photo:', testPhoto.name);
      
      // First test if it works with current "anyone with the link" permissions
      const imageTest = await this.testImageAccess(testPhoto.id);
      
      if (imageTest.accessible) {
        return { 
          accessible: true, 
          message: `✅ Images are accessible! Working URL: ${imageTest.workingUrl}` 
        };
      } else {
        // If "anyone with the link" doesn't work, test "public on the web"
        console.log('🔍 Testing "public on the web" access...');
        const publicWebTest = await this.testPublicWebAccess(testPhoto.id);
        
        if (publicWebTest.accessible) {
          return { 
            accessible: true, 
            message: `✅ Images work with "public on the web"! Working URL: ${publicWebTest.workingUrl}` 
          };
        } else {
          return { 
            accessible: false, 
            message: `❌ Images need to be made "public on the web". Current "anyone with the link" permissions are not sufficient for website embedding.` 
          };
        }
      }
      
    } catch (error) {
      console.error('❌ Permission test failed:', error);
      return { accessible: false, message: `Test failed: ${error}` };
    }
  }

  // Test if the issue is localhost-related
  async testLocalhostRestrictions(): Promise<{ isLocalhostIssue: boolean, message: string }> {
    try {
      console.log('🏠 Testing if localhost restrictions are causing the issue...');
      
      // Check if we're running on localhost
      const isLocalhost = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1' ||
                         window.location.hostname.includes('localhost');
      
      if (isLocalhost) {
        console.log('🏠 Running on localhost - this could be the issue');
        
        // Test with a simple image to see if it's a general localhost issue
        const testImage = new Image();
        
        return new Promise((resolve) => {
          testImage.onload = () => {
            resolve({ 
              isLocalhostIssue: false, 
              message: '✅ Localhost can load external images - issue is likely Google Drive specific' 
            });
          };
          
          testImage.onerror = () => {
            resolve({ 
              isLocalhostIssue: true, 
              message: '❌ Localhost has general image loading restrictions' 
            });
          };
          
          // Test with a simple external image
          testImage.src = 'https://picsum.photos/200/200';
          
          // Timeout after 5 seconds
          setTimeout(() => {
            resolve({ 
              isLocalhostIssue: true, 
              message: '❌ Localhost image loading timeout - likely restricted' 
            });
          }, 5000);
        });
      } else {
        return { 
          isLocalhostIssue: false, 
          message: '✅ Not running on localhost - this is not the issue' 
        };
      }
      
    } catch (error) {
      console.error('🏠 Localhost test failed:', error);
      return { isLocalhostIssue: false, message: `Test failed: ${error}` };
    }
  }
}

export default GoogleDriveService;
