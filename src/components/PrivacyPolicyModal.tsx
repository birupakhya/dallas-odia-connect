import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-serif font-bold text-primary">
              Privacy Policy
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
            <h3 className="text-lg font-semibold text-primary mb-3">1. Introduction</h3>
            <p className="text-muted-foreground mb-3">
              Dallas Odia Society ("DOS", "we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or participate in our community activities.
            </p>
            <p className="text-muted-foreground">
              As a non-profit organization dedicated to preserving Odia culture and building community, 
              we value your trust and are committed to maintaining the confidentiality of your personal information.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">2. Information We Collect</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-foreground mb-2">Personal Information:</h4>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>• Name and contact information (email, phone number, address)</li>
                  <li>• Family member details for membership purposes</li>
                  <li>• Payment information for membership fees and donations</li>
                  <li>• Event registration and participation information</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Automatically Collected Information:</h4>
                <ul className="text-muted-foreground space-y-1 ml-4">
                  <li>• Browser type and version</li>
                  <li>• Operating system</li>
                  <li>• IP address and general location</li>
                  <li>• Website usage patterns and preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">3. How We Use Your Information</h3>
            <p className="text-muted-foreground mb-3">
              We use the information we collect to:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Process membership applications and maintain member records</li>
              <li>• Communicate about events, activities, and community news</li>
              <li>• Send newsletters and updates about DOS activities</li>
              <li>• Process payments for membership fees and donations</li>
              <li>• Organize and manage cultural events and programs</li>
              <li>• Comply with legal obligations and maintain organizational records</li>
              <li>• Improve our website and services</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">4. Information Sharing and Disclosure</h3>
            <p className="text-muted-foreground mb-3">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following circumstances:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• With your explicit consent</li>
              <li>• To comply with legal obligations or court orders</li>
              <li>• To protect our rights, property, or safety</li>
              <li>• With trusted service providers who assist in our operations (payment processors, email services)</li>
              <li>• In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">5. Data Security</h3>
            <p className="text-muted-foreground mb-3">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Secure data transmission using SSL encryption</li>
              <li>• Regular security assessments and updates</li>
              <li>• Limited access to personal information on a need-to-know basis</li>
              <li>• Secure storage of sensitive information</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">6. Your Rights and Choices</h3>
            <p className="text-muted-foreground mb-3">
              You have the right to:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Access and review your personal information</li>
              <li>• Request correction of inaccurate information</li>
              <li>• Request deletion of your personal information</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Withdraw consent for data processing</li>
              <li>• Lodge a complaint with relevant authorities</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">7. Cookies and Tracking Technologies</h3>
            <p className="text-muted-foreground mb-3">
              We use cookies and similar technologies to enhance your browsing experience, 
              analyze website traffic, and understand user preferences. You can control 
              cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">8. Children's Privacy</h3>
            <p className="text-muted-foreground">
              Our services are not intended for children under 13 years of age. We do not 
              knowingly collect personal information from children under 13. If you believe 
              we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">9. Changes to This Privacy Policy</h3>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by posting the new Privacy Policy on our website and updating 
              the "Last updated" date. Your continued use of our services after such changes 
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-primary mb-3">10. Contact Us</h3>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <div className="bg-muted/50 rounded-lg p-4 mt-3">
              <p className="text-muted-foreground">
                <strong>Dallas Odia Society</strong><br />
                Email: privacy@dallasodiasociety.org<br />
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

export default PrivacyPolicyModal;
