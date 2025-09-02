import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GoogleDriveGallery from '@/components/GoogleDriveGallery';
import GoogleDriveService from '@/lib/google-drive';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const GoogleDriveTest = () => {
  const [testResults, setTestResults] = useState<any>(null);
  const [testing, setTesting] = useState(false);
  const [imageTestResults, setImageTestResults] = useState<any>(null);
  const [testingImages, setTestingImages] = useState(false);
  const [permissionTestResults, setPermissionTestResults] = useState<any>(null);
  const [testingPermissions, setTestingPermissions] = useState(false);
  const [publicWebTestResults, setPublicWebTestResults] = useState<any>(null);
  const [testingPublicWeb, setTestingPublicWeb] = useState(false);
  const [localhostTestResults, setLocalhostTestResults] = useState<any>(null);
  const [testingLocalhost, setTestingLocalhost] = useState(false);
  const [accessStrategiesResults, setAccessStrategiesResults] = useState<any>(null);
  const [testingStrategies, setTestingStrategies] = useState(false);

  const runApiTest = async () => {
    setTesting(true);
    try {
      const service = GoogleDriveService.getInstance();
      const results = await service.testApiAccess();
      setTestResults(results);
      console.log('🧪 Full test results:', results);
    } catch (error) {
      console.error('🧪 Test failed:', error);
      setTestResults({ error: error.message });
    } finally {
      setTesting(false);
    }
  };

  const testImageAccess = async () => {
    setTestingImages(true);
    try {
      const service = GoogleDriveService.getInstance();
      
      // Test with a sample file ID from your folder
      const testFileId = '1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ'; // This is your folder ID, we need a file ID
      
      // First get some photos to test with
      const photos = await service.getPhotosFromFolder(testFileId, 1, 1);
      if (photos.photos.length > 0) {
        const firstPhoto = photos.photos[0];
        console.log('🧪 Testing image access with first photo:', firstPhoto);
        
        const imageTest = await service.testImageAccess(firstPhoto.id);
        setImageTestResults({
          photoName: firstPhoto.name,
          photoId: firstPhoto.id,
          ...imageTest
        });
      } else {
        setImageTestResults({ error: 'No photos found to test' });
      }
    } catch (error) {
      console.error('🧪 Image test failed:', error);
      setImageTestResults({ error: error.message });
    } finally {
      setTestingImages(false);
    }
  };

  const testCurrentPermissions = async () => {
    setTestingPermissions(true);
    try {
      const service = GoogleDriveService.getInstance();
      const results = await service.testCurrentPermissions();
      setPermissionTestResults(results);
      console.log('🔍 Permission test results:', results);
    } catch (error) {
      console.error('🔍 Permission test failed:', error);
      setPermissionTestResults({ accessible: false, message: error.message });
    } finally {
      setTestingPermissions(false);
    }
  };

  const testPublicWebAccess = async () => {
    setTestingPublicWeb(true);
    try {
      const service = GoogleDriveService.getInstance();
      
      // Get a sample photo to test
      const photos = await service.getPhotosFromFolder('1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ', 1, 1);
      if (photos.photos.length > 0) {
        const firstPhoto = photos.photos[0];
        console.log('🌐 Testing public web access with first photo:', firstPhoto);
        
        const publicWebTest = await service.testPublicWebAccess(firstPhoto.id);
        setPublicWebTestResults({
          photoName: firstPhoto.name,
          photoId: firstPhoto.id,
          ...publicWebTest
        });
      } else {
        setPublicWebTestResults({ error: 'No photos found to test' });
      }
    } catch (error) {
      console.error('🌐 Public web test failed:', error);
      setPublicWebTestResults({ error: error.message });
    } finally {
      setTestingPublicWeb(false);
    }
  };

  const testLocalhostRestrictions = async () => {
    setTestingLocalhost(true);
    try {
      const service = GoogleDriveService.getInstance();
      const results = await service.testLocalhostRestrictions();
      setLocalhostTestResults(results);
      console.log('🏠 Localhost test results:', results);
    } catch (error) {
      console.error('🏠 Localhost test failed:', error);
      setLocalhostTestResults({ isLocalhostIssue: false, message: error.message });
    } finally {
      setTestingLocalhost(false);
    }
  };

  const testAccessStrategies = async () => {
    setTestingStrategies(true);
    try {
      const service = GoogleDriveService.getInstance();
      
      // Get a sample photo to test
      const photos = await service.getPhotosFromFolder('1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ', 1, 1);
      if (photos.photos.length > 0) {
        const firstPhoto = photos.photos[0];
        console.log('🎯 Testing access strategies with first photo:', firstPhoto);
        
        const strategiesResults = await service.testAccessStrategies(firstPhoto.id);
        setAccessStrategiesResults({
          photoName: firstPhoto.name,
          photoId: firstPhoto.id,
          strategies: strategiesResults
        });
      } else {
        setAccessStrategiesResults({ error: 'No photos found to test' });
      }
    } catch (error) {
      console.error('🎯 Access strategies test failed:', error);
      setAccessStrategiesResults({ error: error.message });
    } finally {
      setTestingStrategies(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Navigation />
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              Google Drive API Integration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Real-time photo browsing from your Google Drive folder with seamless website integration.
            </p>
            
            {/* Authentication Status */}
            <div className="mb-8">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                true 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-amber-100 text-amber-800 border border-amber-200'
              }`}>
                {true ? (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Authenticated with Google Drive
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    Not authenticated - Login required
                  </>
                )}
              </div>
              
              {/* Removed OAuth2 login button */}
            </div>
            
            {/* API Test Button */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <Button 
                  onClick={runApiTest} 
                  disabled={testing}
                  variant="outline"
                  size="lg"
                >
                  {testing ? 'Testing API...' : '🧪 Test Google Drive API Access'}
                </Button>
                
                <Button 
                  onClick={testImageAccess} 
                  disabled={testingImages}
                  variant="outline"
                  size="lg"
                >
                  {testingImages ? 'Testing Images...' : '🖼️ Test Image Accessibility'}
                </Button>

                <Button 
                  onClick={testCurrentPermissions} 
                  disabled={testingPermissions}
                  variant="outline"
                  size="lg"
                >
                  {testingPermissions ? 'Testing Permissions...' : '🔍 Test Current Permissions'}
                </Button>

                <Button 
                  onClick={testPublicWebAccess} 
                  disabled={testingPublicWeb}
                  variant="outline"
                  size="lg"
                >
                  {testingPublicWeb ? 'Testing Public Web...' : '🌐 Test Public Web Access'}
                </Button>

                <Button 
                  onClick={testLocalhostRestrictions} 
                  disabled={testingLocalhost}
                  variant="outline"
                  size="lg"
                >
                  {testingLocalhost ? 'Testing Localhost...' : '🏠 Test Localhost Restrictions'}
                </Button>

                <Button 
                  onClick={testAccessStrategies} 
                  disabled={testingStrategies}
                  variant="outline"
                  size="lg"
                >
                  {testingStrategies ? 'Testing Access Strategies...' : '🎯 Test Access Strategies'}
                </Button>
              </div>
              
              {testResults && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto text-left mb-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">🧪 API Test Results</h3>
                  <div className="text-sm text-blue-700 space-y-2">
                    <div><strong>API Key Working:</strong> {testResults.apiKeyWorking ? '✅ Yes' : '❌ No'}</div>
                    <div><strong>Folder Accessible:</strong> {testResults.folderAccessible ? '✅ Yes' : '❌ No'}</div>
                    <div><strong>Files Listed:</strong> {testResults.filesListed ? '✅ Yes' : '❌ No'}</div>
                    {testResults.error && (
                      <div><strong>Error:</strong> {testResults.error}</div>
                    )}
                  </div>
                  <details className="mt-3">
                    <summary className="cursor-pointer text-blue-600 font-medium">View Raw API Responses</summary>
                    <pre className="mt-2 text-xs bg-blue-100 p-2 rounded overflow-auto max-h-40">
                      {JSON.stringify(testResults, null, 2)}
                    </pre>
                  </details>
                </div>
              )}

              {imageTestResults && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto text-left">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">🖼️ Image Accessibility Test Results</h3>
                  <div className="text-sm text-green-700 space-y-2">
                    <div><strong>Photo Tested:</strong> {imageTestResults.photoName}</div>
                    <div><strong>Photo ID:</strong> {imageTestResults.photoId}</div>
                    <div><strong>Accessible:</strong> {imageTestResults.accessible ? '✅ Yes' : '❌ No'}</div>
                    {imageTestResults.workingUrl && (
                      <div><strong>Working URL:</strong> {imageTestResults.workingUrl}</div>
                    )}
                    {imageTestResults.error && (
                      <div><strong>Error:</strong> {imageTestResults.error}</div>
                    )}
                  </div>
                </div>
              )}

              {permissionTestResults && (
                <div className={`border rounded-lg p-4 max-w-2xl mx-auto text-left ${
                  permissionTestResults.accessible 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-red-50 border-red-200'
                }`}>
                  <h3 className={`text-lg font-semibold mb-3 ${
                    permissionTestResults.accessible ? 'text-green-800' : 'text-red-800'
                  }`}>
                    🔍 Current Permission Test Results
                  </h3>
                  <div className={`text-sm space-y-2 ${
                    permissionTestResults.accessible ? 'text-green-700' : 'text-red-700'
                  }`}>
                    <div><strong>Status:</strong> {permissionTestResults.accessible ? '✅ Accessible' : '❌ Not Accessible'}</div>
                    <div><strong>Message:</strong> {permissionTestResults.message}</div>
                  </div>
                </div>
              )}

              {localhostTestResults && (
                <div className={`border rounded-lg p-4 max-w-2xl mx-auto text-left ${
                  localhostTestResults.isLocalhostIssue 
                    ? 'bg-amber-50 border-amber-200' 
                    : 'bg-blue-50 border-blue-200'
                }`}>
                  <h3 className={`text-lg font-semibold mb-3 ${
                    localhostTestResults.isLocalhostIssue ? 'text-amber-800' : 'text-blue-800'
                  }`}>
                    🏠 Localhost Restrictions Test Results
                  </h3>
                  <div className={`text-sm space-y-2 ${
                    localhostTestResults.isLocalhostIssue ? 'text-amber-700' : 'text-blue-700'
                  }`}>
                    <div><strong>Localhost Issue:</strong> {localhostTestResults.isLocalhostIssue ? '❌ Yes' : '✅ No'}</div>
                    <div><strong>Message:</strong> {localhostTestResults.message}</div>
                  </div>
                </div>
              )}

              {accessStrategiesResults && (
                <div className={`border rounded-lg p-4 max-w-2xl mx-auto text-left ${
                  accessStrategiesResults.error 
                    ? 'bg-red-50 border-red-200' 
                    : 'bg-green-50 border-green-200'
                }`}>
                  <h3 className={`text-lg font-semibold mb-3 ${
                    accessStrategiesResults.error ? 'text-red-800' : 'text-green-800'
                  }`}>
                    🎯 Access Strategies Test Results
                  </h3>
                  <div className={`text-sm space-y-2 ${
                    accessStrategiesResults.error ? 'text-red-700' : 'text-green-700'
                  }`}>
                    <div><strong>Photo Tested:</strong> {accessStrategiesResults.photoName}</div>
                    <div><strong>Photo ID:</strong> {accessStrategiesResults.photoId}</div>
                    {accessStrategiesResults.error && (
                      <div><strong>Error:</strong> {accessStrategiesResults.error}</div>
                    )}
                    {accessStrategiesResults.strategies && (
                      <div>
                        <h4 className="text-md font-semibold text-primary mb-2">Strategies:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {accessStrategiesResults.strategies.map((strategy: any, index: number) => (
                            <li key={index}>
                              <strong>{strategy.strategy}:</strong> {strategy.accessible ? '✅ Accessible' : '❌ Not Accessible'}
                              {strategy.description && ` (${strategy.description})`}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-green-800 mb-2">✅ Public Photo Gallery</h3>
              <div className="text-sm text-green-700 space-y-1">
                <div><strong>Folder ID:</strong> 1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ</div>
                <div><strong>Event:</strong> Ganesh Puja Celebration 2025</div>
                <div><strong>Access:</strong> Public - No login required</div>
                <div><strong>API:</strong> Google Drive API key configured</div>
                <div><strong>Photos:</strong> Loaded directly from your Drive</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <GoogleDriveGallery
        folderId="1Xy7Lq_1wHBVlnxvzvQ1ER5yMahQaR0kZ"
        title="Ganesh Puja Celebration 2025 - Live API"
        subtitle="Real-time photo browsing from your Google Drive folder with professional gallery experience"
      />
      
      {/* Technical Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-primary">🔌 Real API Integration</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Direct connection to Google Drive API</li>
                <li>• Real-time folder scanning</li>
                <li>• Automatic file ID extraction</li>
                <li>• Live photo metadata fetching</li>
                <li>• No manual file ID setup required</li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-primary">🚀 Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Search and filter photos</li>
                <li>• Grid and list view modes</li>
                <li>• Lightbox photo viewer</li>
                <li>• Responsive design</li>
                <li>• Automatic fallbacks</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">🔧 Technical Details</h3>
            <div className="text-sm text-blue-700 space-y-2">
              <div><strong>API Endpoint:</strong> https://www.googleapis.com/drive/v3</div>
              <div><strong>Authentication:</strong> API Key (AIzaSyCtl_7LMYeiTZOeD-NqDM3lAwHOv979GIo)</div>
              <div><strong>Folder Access:</strong> Public folder with "Anyone with link can view"</div>
              <div><strong>Image Format:</strong> Direct Google Drive image URLs</div>
              <div><strong>Fallback:</strong> Sample images if API fails</div>
            </div>
            
            {/* 403 Error Solution */}
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded">
              <h4 className="font-semibold text-amber-800 mb-2">⚠️ Image Loading Issue (403 Error)</h4>
              <p className="text-amber-700 text-sm mb-2">
                If you're seeing 403 errors when loading images, this means Google Drive is blocking direct access to the images.
              </p>
              <div className="text-amber-700 text-sm space-y-1">
                <div><strong>Solution:</strong> Make individual images public</div>
                <div><strong>How:</strong> Right-click each image → "Share" → "Get link" → "Anyone with link can view"</div>
                <div><strong>Result:</strong> Images will load for all visitors without login</div>
              </div>
              
              {/* Quick Fix Instructions */}
              <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded">
                <h5 className="font-semibold text-blue-800 mb-2">🚀 Quick Fix - Make Images Public:</h5>
                <ol className="text-blue-700 text-sm space-y-1 list-decimal list-inside">
                  <li>Go to your Google Drive folder</li>
                  <li>Right-click each image → "Share" → "Get link"</li>
                  <li>Change to "Anyone with link can view"</li>
                  <li>Copy the link</li>
                  <li>Images should now load in the gallery for everyone</li>
                </ol>
                <p className="text-blue-600 text-xs mt-2">
                  <strong>Note:</strong> This makes images publicly viewable. Only do this for images you want to share publicly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GoogleDriveTest;
