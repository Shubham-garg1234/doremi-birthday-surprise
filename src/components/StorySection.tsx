import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StoryDetailDialog from "./StoryDetailDialog";
import story11 from "@/assets/story1-1.jpg";
import story12 from "@/assets/story1-2.jpg";
import story13 from "@/assets/story1-3.jpg";
import story21 from "@/assets/story2-1.jpg";
import story22 from "@/assets/story2-2.jpg";
import story23 from "@/assets/story2-3.jpg";
import story31 from "@/assets/story3-1.jpg";
import story32 from "@/assets/story3-2.jpg";
import story33 from "@/assets/story3-3.jpg";
import story41 from "@/assets/story4-1.jpg";
import story42 from "@/assets/story4-2.jpg";
import story43 from "@/assets/story4-3.jpg";

const StorySection = () => {
  const [selectedStory, setSelectedStory] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const stories = [
    {
      title: "How We Met 💫",
      preview:
        "Every great story has a beginning, and ours started with a simple hello that turned into countless conversations, laughter, and unforgettable memories.",
      icon: "✨",
      fullStory:
        "It was a day like any other, yet somehow different. The universe conspired to bring us together in the most unexpected way. From that first conversation, there was an instant connection - like finding a piece of yourself you didn't know was missing. The nervousness of those first moments quickly melted into comfortable conversation, and before we knew it, hours had passed like minutes. That magical first meeting was just the beginning of an incredible journey that would change both our lives forever.",
      images: [story11, story12, story13, story11, story12, story13],
      moments: [
        "That nervous first hello that started everything",
        "The moment we realized we had so much in common",
        "Our first laugh together that broke all the ice",
        "When we exchanged numbers and couldn't stop smiling",
        "The excited feeling knowing we'd see each other again",
      ],
    },
    {
      title: "Our Adventures 🌟",
      preview:
        "From spontaneous trips to quiet moments together, each adventure has been a chapter in our beautiful story. Every place we've been, every experience we've shared.",
      icon: "🗺️",
      fullStory:
        "Life became an adventure the moment we decided to explore it together. Whether climbing mountains, walking along beaches at sunset, or getting lost in new cities, every journey brought us closer. The destinations were beautiful, but it was your company that made them unforgettable. From planned trips to spontaneous weekend getaways, from local explorations to dreaming about future travels - each adventure added another colorful page to our story. The best part? Knowing that the greatest adventure is simply being together.",
      images: [story21, story22, story23, story21, story22, story23],
      moments: [
        "That spontaneous road trip where we sang all the way",
        "Getting lost but finding the best hidden spot",
        "Watching the sunset from the top of the mountain",
        "Dancing in the rain without caring who was watching",
        "Every single moment of laughter along the way",
      ],
    },
    {
      title: "Special Moments 💝",
      preview:
        "The little things matter most - inside jokes, late-night talks, shared dreams, and the comfort of knowing someone truly understands you.",
      icon: "💖",
      fullStory:
        "Some of the most precious moments are the ones that seem small but mean everything. Late-night conversations that stretch until dawn, comfortable silences that speak volumes, inside jokes that no one else would understand, celebrating each other's wins no matter how small, and being there through the challenges. It's in these quiet, unplanned moments that the deepest connections are formed. Every shared smile, every word of encouragement, every time we were there for each other - these are the threads that weave the beautiful tapestry of our friendship.",
      images: [story31, story32, story33, story31, story32, story33],
      moments: [
        "Late night conversations about dreams and fears",
        "Celebrating birthdays and making them special",
        "Being there during tough times without judgment",
        "Those inside jokes that make us laugh until we cry",
        "Comfortable silences that feel just right",
      ],
    },
    {
      title: "Looking Forward 🌈",
      preview:
        "As you turn 22, here's to all the amazing moments yet to come, all the dreams waiting to be realized, and all the joy that lies ahead.",
      icon: "🎯",
      fullStory:
        "The best part about everything we've shared so far is knowing that it's just the beginning. As you step into this new year of life, so many incredible opportunities await you. Dreams to chase, goals to achieve, places to explore, and memories to create. Whatever comes next, know that you have someone cheering you on every step of the way. Here's to your 22nd year being filled with growth, joy, success, and all the happiness you deserve. The future is bright, and I can't wait to see all the amazing things you'll accomplish!",
      images: [story41, story42, story43, story41, story42, story43],
      moments: [
        "All the dreams we've talked about making real",
        "The goals you're going to crush this year",
        "New adventures waiting to be discovered",
        "Skills you'll learn and heights you'll reach",
        "The incredible person you're becoming",
      ],
    },
  ];

  const handleStoryClick = (story: any) => {
    setSelectedStory(story);
    setDialogOpen(true);
  };

  return (
    <>
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Our Story 📖
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of beautiful moments, laughter, and love
          </p>
          <p className="text-sm text-primary/60 mt-2 italic">
            Click on any story to explore more ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <Card
              key={story.title}
              className="p-6 backdrop-blur-sm bg-card/80 border-2 border-primary/20 hover:border-secondary/60 transition-all hover:shadow-2xl cursor-pointer group float-delayed transform hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleStoryClick(story)}
            >
              <div className="text-5xl mb-4 floating group-hover:scale-110 transition-transform">
                {story.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all">
                {story.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {story.preview}
              </p>
              <Button
                variant="ghost"
                className="w-full text-primary hover:text-primary-foreground hover:bg-primary/90 transition-all group-hover:bg-primary/20"
              >
                Read More & View Photos →
              </Button>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto p-8 backdrop-blur-sm bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-accent/30 shadow-xl">
          <div className="text-center space-y-4">
            <div className="floating text-6xl mb-4">💌</div>
            <h3 className="text-3xl md:text-4xl font-bold gradient-text">
              A Special Message
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              On your 22nd birthday, I want you to know how incredibly special you are.
              Your smile lights up every room, your kindness touches every heart, and
              your presence makes every moment magical. Here's to celebrating you today
              and always! May this year bring you endless joy, amazing adventures, and
              all the happiness you deserve. Happy Birthday! 🎂✨
            </p>
            <div className="pt-4 text-3xl space-x-2">
              <span className="inline-block floating">🎉</span>
              <span className="inline-block float-delayed">💝</span>
              <span className="inline-block floating" style={{ animationDelay: "0.5s" }}>🌟</span>
              <span className="inline-block float-delayed" style={{ animationDelay: "0.7s" }}>🎈</span>
              <span className="inline-block floating" style={{ animationDelay: "0.9s" }}>✨</span>
            </div>
          </div>
        </Card>
      </div>

      <StoryDetailDialog
        story={selectedStory}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
};

export default StorySection;
