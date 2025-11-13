import { Card } from "@/components/ui/card";

const StorySection = () => {
  const stories = [
    {
      title: "How We Met 💫",
      content:
        "Every great story has a beginning, and ours started with a simple hello that turned into countless conversations, laughter, and unforgettable memories.",
      icon: "✨",
    },
    {
      title: "Our Adventures 🌟",
      content:
        "From spontaneous trips to quiet moments together, each adventure has been a chapter in our beautiful story. Every place we've been, every experience we've shared.",
      icon: "🗺️",
    },
    {
      title: "Special Moments 💝",
      content:
        "The little things matter most - inside jokes, late-night talks, shared dreams, and the comfort of knowing someone truly understands you.",
      icon: "💖",
    },
    {
      title: "Looking Forward 🌈",
      content:
        "As you turn 22, here's to all the amazing moments yet to come, all the dreams waiting to be realized, and all the joy that lies ahead.",
      icon: "🎯",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold gradient-text mb-4">
          Our Story 📖
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A journey of beautiful moments, laughter, and love
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {stories.map((story, index) => (
          <Card
            key={story.title}
            className="p-6 backdrop-blur-sm bg-card/80 border-2 border-primary/20 hover:border-secondary/40 transition-all hover:shadow-xl float-delayed"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-5xl mb-4 floating">{story.icon}</div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              {story.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {story.content}
            </p>
          </Card>
        ))}
      </div>

      <Card className="max-w-4xl mx-auto p-8 backdrop-blur-sm bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-accent/30">
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold gradient-text">
            A Special Message 💌
          </h3>
          <p className="text-lg text-foreground leading-relaxed">
            On your 22nd birthday, I want you to know how incredibly special you are.
            Your smile lights up every room, your kindness touches every heart, and
            your presence makes every moment magical. Here's to celebrating you today
            and always! May this year bring you endless joy, amazing adventures, and
            all the happiness you deserve. Happy Birthday! 🎂✨
          </p>
          <div className="pt-4 text-2xl">🎉 💝 🌟 🎈 ✨</div>
        </div>
      </Card>
    </div>
  );
};

export default StorySection;
