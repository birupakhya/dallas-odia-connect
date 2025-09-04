import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import dosLogo from '@/assets/dos-logo.jpg';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Get Involved', 
      href: '/get-involved/membership',
      submenu: [
        { name: 'Become a Member', href: '/get-involved/membership' },
        { name: 'Become a Sponsor', href: '/get-involved/sponsor' },
      ]
    },
    { 
      name: 'Events', 
      href: '/events',
      submenu: [
        // { name: 'Current Event', href: '/events/current' }, // Commented out for now
        { name: 'Upcoming Events', href: '/events/upcoming' },
        { name: 'Past Events', href: '/events/past' },
        { name: 'Photo Gallery', href: '/events/gallery' },
      ]
    },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav ref={submenuRef} className="bg-background/95 backdrop-blur-sm border-b border-border/40 sticky top-0 z-50 shadow-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shadow-cultural hover:border-primary/40 transition-colors duration-300 bg-white p-1">
                <img 
                  src={dosLogo} 
                  alt="Dallas Odia Society Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold gradient-text">Dallas Odia Society</h1>
                <p className="text-xs text-muted-foreground">Home Away From Home</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <div className="flex items-center">
                    <Link
                      to={item.href}
                      className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                        className="ml-1 p-1 hover:text-primary transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.submenu && (
                    <div className={cn(
                      "absolute left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg transition-all duration-300 z-50",
                      openSubmenu === item.name ? "opacity-100 visible" : "opacity-0 invisible"
                    )}>
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                            onClick={() => setOpenSubmenu(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link to="/get-involved/sponsor">
                <Button variant="hero" size="sm" className="ml-4">
                  Become a Sponsor
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-muted/50 backdrop-blur-sm">
          {navItems.map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between">
                <Link
                  to={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium flex-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <button
                    onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                    className="p-2 hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {item.submenu && (
                <div className={cn(
                  "ml-4 space-y-1 transition-all duration-300",
                  openSubmenu === item.name ? "max-h-48 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                )}>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className="text-muted-foreground hover:text-primary block px-3 py-1 rounded-md text-sm"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenSubmenu(null);
                      }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
                      <div className="px-3 py-2">
              <Link to="/get-involved/sponsor">
                <Button variant="hero" size="sm" className="w-full">
                  Become a Sponsor
                </Button>
              </Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;