import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { X, MessageSquare, Star } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ isOpen, onClose }: FeedbackModalProps) => {
  const [feedbackType, setFeedbackType] = useState('general');
  const [rating, setRating] = useState('5');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', {
      type: feedbackType,
      rating,
      name,
      email,
      message
    });
    
    setIsSubmitting(false);
    onClose();
    // Reset form
    setFeedbackType('general');
    setRating('5');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-serif font-bold text-primary flex items-center gap-2">
              <MessageSquare className="h-6 w-6" />
              Share Your Feedback
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Help us improve the Dallas Odia Society website! Your feedback is valuable to our community.
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Feedback Type */}
          <div className="space-y-3">
            <Label className="text-base font-medium">What type of feedback do you have?</Label>
            <RadioGroup value={feedbackType} onValueChange={setFeedbackType} className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="general" id="general" />
                <Label htmlFor="general">General Feedback</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="content" id="content" />
                <Label htmlFor="content">Content Suggestions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="design" id="design" />
                <Label htmlFor="design">Design/UX</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bug" id="bug" />
                <Label htmlFor="bug">Bug Report</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Rating */}
          <div className="space-y-3">
            <Label className="text-base font-medium">How would you rate your experience?</Label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star.toString())}
                  className={`p-1 rounded transition-colors ${
                    parseInt(rating) >= star ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                >
                  <Star className="h-6 w-6 fill-current" />
                </button>
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {rating === '1' && 'Poor'}
                {rating === '2' && 'Fair'}
                {rating === '3' && 'Good'}
                {rating === '4' && 'Very Good'}
                {rating === '5' && 'Excellent'}
              </span>
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Your Name (Optional)</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address (Optional)</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <p className="text-xs text-muted-foreground">
              We'll only use this to follow up on your feedback if needed.
            </p>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Your Feedback *</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you think! Share your suggestions, report issues, or let us know what you'd like to see improved..."
              className="min-h-[120px]"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting || !message.trim()}
              className="flex-1"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>

          {/* Additional Info */}
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-xs text-muted-foreground">
              <strong>Thank you for your feedback!</strong> Your input helps us make the Dallas Odia Society 
              website better for our entire community. We review all feedback and will consider your 
              suggestions for future improvements.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackModal;
