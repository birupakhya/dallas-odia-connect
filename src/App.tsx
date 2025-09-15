import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";

// Lazy load pages for better performance
const AboutUs = lazy(() => import("./pages/AboutUs"));
const BecomeMember = lazy(() => import("./pages/BecomeMember"));
const BecomeSponsor = lazy(() => import("./pages/BecomeSponsor"));
const Events = lazy(() => import("./pages/Events"));
const CurrentEvent = lazy(() => import("./pages/CurrentEvent"));
const UpcomingEvents = lazy(() => import("./pages/UpcomingEvents"));
const PastEvents = lazy(() => import("./pages/PastEvents"));
const EventGallery = lazy(() => import("./pages/EventGallery"));
const GoogleDriveTest = lazy(() => import("./pages/GoogleDriveTest"));
const GoogleDriveGallery = lazy(() => import("./components/GoogleDriveGallery"));
const OAuthCallback = lazy(() => import("./pages/OAuthCallback"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));
import FeedbackButton from "./components/FeedbackButton";
import FaviconUpdater from "./components/FaviconUpdater";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";
import GoogleAnalytics from "./components/GoogleAnalytics";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GoogleAnalytics />
          <ScrollToTop />
          <FaviconUpdater />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={
            <Suspense fallback={<LoadingSpinner />}>
              <AboutUs />
            </Suspense>
          } />
          <Route path="/get-involved/membership" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BecomeMember />
            </Suspense>
          } />
          <Route path="/get-involved/sponsor" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BecomeSponsor />
            </Suspense>
          } />
          <Route path="/events" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Events />
            </Suspense>
          } />
          <Route path="/events/current" element={
            <Suspense fallback={<LoadingSpinner />}>
              <CurrentEvent />
            </Suspense>
          } />
          <Route path="/events/upcoming" element={
            <Suspense fallback={<LoadingSpinner />}>
              <UpcomingEvents />
            </Suspense>
          } />
          <Route path="/events/past" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PastEvents />
            </Suspense>
          } />
          <Route path="/events/gallery" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GoogleDriveGallery />
            </Suspense>
          } />
          <Route path="/google-drive-test" element={
            <Suspense fallback={<LoadingSpinner />}>
              <GoogleDriveTest />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContactUs />
            </Suspense>
          } />
          <Route path="/auth/callback" element={
            <Suspense fallback={<LoadingSpinner />}>
              <OAuthCallback />
            </Suspense>
          } />
          <Route path="/sitemap.xml" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Sitemap />
            </Suspense>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <Suspense fallback={<LoadingSpinner />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
        <FeedbackButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
