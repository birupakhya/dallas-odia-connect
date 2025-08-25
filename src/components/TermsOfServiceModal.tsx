import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal = ({ isOpen, onClose }: TermsOfServiceModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-serif font-bold text-primary">
              Terms of Service
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
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </DialogHeader>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">1. Acceptance of Terms</h3>
            <p className="text-muted-foreground mb-3">
              By accessing and using the Dallas Odia Society ("DOS") website and services, 
              you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="text-muted-foreground">
              These Terms of Service ("Terms") govern your use of our website, membership services, 
              events, and all related activities provided by DOS.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">2. Description of Service</h3>
            <p className="text-muted-foreground mb-3">
              DOS is a non-profit organization dedicated to:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Preserving and promoting Odia culture and heritage</li>
              <li>• Building community among Odia families in the Dallas-Fort Worth area</li>
              <li>• Organizing cultural events, educational programs, and social activities</li>
              <li>• Providing a platform for cultural exchange and community support</li>
              <li>• Supporting charitable and educational initiatives</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">3. Membership and Registration</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                To access certain features and participate in DOS activities, you may be required to register for membership.
              </p>
              <div>
                <h4 className="font-medium text-foreground mb-2">Membership Requirements:</h4>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>• Provide accurate and complete registration information</li>
                  <li>• Maintain the security of your account credentials</li>
                  <li>• Notify DOS of any unauthorized use of your account</li>
                  <li>• Comply with all applicable laws and regulations</li>
                  <li>• Respect the rights and privacy of other members</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">4. User Conduct and Responsibilities</h3>
            <p className="text-muted-foreground mb-3">
              You agree to use our services in a manner consistent with our mission and values. 
              You are responsible for:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Providing accurate and truthful information</li>
              <li>• Respecting the cultural diversity and traditions of our community</li>
              <li>• Not engaging in discriminatory, harassing, or offensive behavior</li>
              <li>• Not using our services for commercial purposes without permission</li>
              <li>• Not attempting to gain unauthorized access to our systems</li>
              <li>• Not interfering with the proper functioning of our website</li>
              <li>• Complying with all applicable local, state, and federal laws</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">5. Intellectual Property Rights</h3>
            <p className="text-muted-foreground mb-3">
              All content on our website, including but not limited to text, graphics, logos, 
              images, and software, is the property of DOS or its content suppliers and is 
              protected by copyright and other intellectual property laws.
            </p>
            <p className="text-muted-foreground">
              You may not reproduce, distribute, modify, or create derivative works from 
              our content without express written permission from DOS.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">6. Privacy and Data Protection</h3>
            <p className="text-muted-foreground">
              Your privacy is important to us. Our collection and use of personal information 
              is governed by our Privacy Policy, which is incorporated into these Terms by reference. 
              By using our services, you consent to the collection and use of information as 
              described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">7. Event Participation and Liability</h3>
            <p className="text-muted-foreground mb-3">
              Participation in DOS events and activities is voluntary. By participating, you acknowledge that:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• You participate at your own risk</li>
              <li>• DOS is not liable for personal injury or property damage</li>
              <li>• You will follow all safety guidelines and instructions</li>
              <li>• You will respect the rights and comfort of other participants</li>
              <li>• DOS reserves the right to refuse participation to anyone</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">8. Payment and Refund Policy</h3>
            <p className="text-muted-foreground mb-3">
              Membership fees and event payments are generally non-refundable, except in 
              the following circumstances:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Event cancellation by DOS</li>
              <li>• Duplicate payments or billing errors</li>
              <li>• Special circumstances approved by the DOS Board</li>
            </ul>
            <p className="text-muted-foreground">
              All payments are processed securely through our designated payment processors.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">9. Disclaimers and Limitations</h3>
            <p className="text-muted-foreground mb-3">
              Our services are provided "as is" without warranties of any kind. DOS disclaims 
              all warranties, express or implied, including but not limited to:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Warranties of merchantability or fitness for a particular purpose</li>
              <li>• Warranties that our services will be uninterrupted or error-free</li>
              <li>• Warranties regarding the accuracy or completeness of information</li>
            </ul>
            <p className="text-muted-foreground">
              DOS shall not be liable for any indirect, incidental, special, or consequential 
              damages arising from your use of our services.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">10. Termination</h3>
            <p className="text-muted-foreground">
              DOS reserves the right to terminate or suspend your membership and access to 
              our services at any time, with or without cause, with or without notice. 
              You may also terminate your membership at any time by contacting us.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">11. Governing Law and Jurisdiction</h3>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws 
              of the State of Texas, United States. Any disputes arising from these Terms 
              or your use of our services shall be resolved in the courts of Dallas County, Texas.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">12. Changes to Terms</h3>
            <p className="text-muted-foreground">
              DOS reserves the right to modify these Terms at any time. We will notify 
              members of significant changes through our website or email communications. 
              Your continued use of our services after such changes constitutes acceptance 
              of the updated Terms.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">13. Contact Information</h3>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-muted/50 rounded-lg p-4 mt-3">
              <p className="text-muted-foreground">
                <strong>Dallas Odia Society</strong><br />
                Email: legal@dallasodiasociety.org<br />
                Website: www.dallasodiasociety.org<br />
                Address: Dallas-Fort Worth Metroplex, Texas
              </p>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfServiceModal;
