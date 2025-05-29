import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import TrainingBenefits from "@/pages/training-benefits";
import TrainingPackages from "@/pages/training-packages";
import PersonalApproach from "@/pages/personal-approach";
import BookConsultation from "@/pages/book-consultation";
import BookPackage from "@/pages/book-package";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/training-benefits" component={TrainingBenefits} />
      <Route path="/training-packages" component={TrainingPackages} />
      <Route path="/personal-approach" component={PersonalApproach} />
      <Route path="/book-consultation" component={BookConsultation} />
      <Route path="/book-package" component={BookPackage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
