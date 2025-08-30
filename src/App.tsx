import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import BecomeMember from "./pages/BecomeMember";
import BecomeSponsor from "./pages/BecomeSponsor";
import Events from "./pages/Events";
import CurrentEvent from "./pages/CurrentEvent";
import UpcomingEvents from "./pages/UpcomingEvents";
import PastEvents from "./pages/PastEvents";
import EventGallery from "./pages/EventGallery";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import FeedbackButton from "./components/FeedbackButton";
import FaviconUpdater from "./components/FaviconUpdater";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FaviconUpdater />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/get-involved/membership" element={<BecomeMember />} />
          <Route path="/get-involved/sponsor" element={<BecomeSponsor />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/current" element={<CurrentEvent />} />
          <Route path="/events/upcoming" element={<UpcomingEvents />} />
          <Route path="/events/past" element={<PastEvents />} />
          <Route path="/events/gallery" element={<EventGallery />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FeedbackButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
