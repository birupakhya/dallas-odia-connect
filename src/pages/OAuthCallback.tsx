import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import GoogleDriveService from '@/lib/google-drive';

const OAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const code = searchParams.get('code');
        const error = searchParams.get('error');

        if (error) {
          setStatus('error');
          setMessage(`Authentication failed: ${error}`);
          return;
        }

        if (!code) {
          setStatus('error');
          setMessage('No authorization code received');
          return;
        }

        setMessage('Exchanging authorization code for access token...');
        
        const service = GoogleDriveService.getInstance();
        await service.handleAuthCallback(code);
        
        setStatus('success');
        setMessage('Authentication successful! Redirecting...');
        
        // Redirect back to the original page after a short delay
        setTimeout(() => {
          const redirectUrl = localStorage.getItem('google_drive_auth_redirect') || '/google-drive-test';
          localStorage.removeItem('google_drive_auth_redirect');
          navigate(redirectUrl);
        }, 2000);
        
      } catch (error) {
        console.error('OAuth callback error:', error);
        setStatus('error');
        setMessage(`Authentication failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 bg-background rounded-lg border shadow-lg text-center">
        {status === 'loading' && (
          <>
            <Loader2 className="h-16 w-16 text-primary animate-spin mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-primary mb-2">Authenticating...</h1>
            <p className="text-muted-foreground">{message}</p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-green-600 mb-2">Success!</h1>
            <p className="text-muted-foreground">{message}</p>
          </>
        )}

        {status === 'error' && (
          <>
            <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-red-600 mb-2">Authentication Failed</h1>
            <p className="text-muted-foreground mb-4">{message}</p>
            <button
              onClick={() => navigate('/google-drive-test')}
              className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
            >
              Go Back
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default OAuthCallback;
