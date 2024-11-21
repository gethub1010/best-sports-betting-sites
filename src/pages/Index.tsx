import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, Star, Shield, TrendingUp } from "lucide-react";

const Index = () => {
  const { toast } = useToast();

  const handleAffiliateClick = (bookmaker: string) => {
    console.log(`Affiliate click for ${bookmaker}`);
    toast({
      title: "Opening bookmaker site",
      description: `Redirecting you to ${bookmaker}...`,
    });
  };

  return (
    <div className="min-h-screen bg-betting-dark text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find the Best Sports Betting Odds
        </h1>
        <p className="text-betting-gray text-xl mb-8">
          Compare odds from top sportsbooks and get exclusive betting offers
        </p>
        <Button 
          className="bg-betting-accent hover:bg-betting-accent/90 text-white"
          onClick={() => handleAffiliateClick("Featured Sportsbook")}
        >
          Get Best Odds <ArrowRight className="ml-2" />
        </Button>
      </section>

      {/* Featured Sportsbooks */}
      <section className="bg-black/20 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Top Rated Sports Betting Platforms</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "BetMGM", rating: "4.8", bonus: "$1,000" },
              { name: "DraftKings", rating: "4.7", bonus: "$1,500" },
              { name: "FanDuel", rating: "4.9", bonus: "$2,000" },
            ].map((book) => (
              <Card key={book.name} className="bg-white/5 border-0 p-6">
                <h3 className="text-xl font-bold mb-2">{book.name}</h3>
                <div className="flex items-center mb-3">
                  <Star className="text-yellow-400 mr-1" size={16} />
                  <span>{book.rating}/5.0</span>
                </div>
                <p className="text-betting-accent font-bold mb-4">
                  Up to {book.bonus} bonus
                </p>
                <Button 
                  className="w-full bg-betting-accent hover:bg-betting-accent/90"
                  onClick={() => handleAffiliateClick(book.name)}
                >
                  Claim Offer
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Shield className="mx-auto mb-4 text-betting-accent" size={32} />
            <h3 className="text-xl font-bold mb-2">Licensed & Regulated</h3>
            <p className="text-betting-gray">Only trusted sportsbook partners</p>
          </div>
          <div>
            <Star className="mx-auto mb-4 text-betting-accent" size={32} />
            <h3 className="text-xl font-bold mb-2">Best Odds Guaranteed</h3>
            <p className="text-betting-gray">Compare odds from top bookmakers</p>
          </div>
          <div>
            <TrendingUp className="mx-auto mb-4 text-betting-accent" size={32} />
            <h3 className="text-xl font-bold mb-2">Expert Analysis</h3>
            <p className="text-betting-gray">Daily betting tips and insights</p>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="bg-black/20 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Sports Betting Guide</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-betting-gray mb-4">
              Sports betting involves wagering on sporting events through licensed bookmakers. 
              Whether you're interested in NFL, NBA, MLB, or other sports, finding the best 
              odds is crucial for maximizing your potential returns.
            </p>
            <p className="text-betting-gray">
              Our platform helps you compare odds from multiple sportsbooks, ensuring you 
              get the best value for your bets. We also provide expert analysis, betting 
              guides, and exclusive promotional offers from top-rated bookmakers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;