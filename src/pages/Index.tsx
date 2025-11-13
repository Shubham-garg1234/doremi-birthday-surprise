import { useState } from "react";
import QuestionGate from "@/components/QuestionGate";
import CountdownTimer from "@/components/CountdownTimer";
import PhotoGallery from "@/components/PhotoGallery";
import StorySection from "@/components/StorySection";
import doremiImage from "@/assets/doremi.png";
import heroImage from "@/assets/birthday-hero.jpg";

const Index = () => {
  const [hasAccess, setHasAccess] = useState(false);

  if (!hasAccess) {
    return <QuestionGate onCorrectAnswer={() => setHasAccess(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-birthday-light to-secondary/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12 animate-fade-in">
            <div className="floating inline-block mb-4">
              <img
                src={doremiImage}
                alt="Doremi"
                className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4 animate-scale-in">
              Happy Birthday! 🎉
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-medium">
              To someone truly special ✨
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Decorative Separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-primary/20"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-6 text-4xl floating">🎂</span>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <StorySection />
      </div>

      {/* Decorative Separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-primary/20"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-6 text-4xl float-delayed">📸</span>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="container mx-auto px-4 py-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <PhotoGallery />
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="floating inline-block mb-4">
          <img
            src={doremiImage}
            alt="Doremi"
            className="w-20 h-20 mx-auto drop-shadow-xl opacity-80"
          />
        </div>
        <p className="text-lg text-muted-foreground mb-2">
          Made with 💝 for your special day
        </p>
        <p className="text-4xl">🎈 🎉 🎂 ✨ 🎁</p>
      </div>
    </div>
  );
};

export default Index;
