import { Card } from "@/components/ui/card";

const PhotoGallery = () => {
  // Placeholder for photos - you can add your own images here
  const photos = [
    {
      id: 1,
      alt: "Memory 1",
      caption: "Beautiful moments together",
    },
    {
      id: 2,
      alt: "Memory 2",
      caption: "Adventures and laughter",
    },
    {
      id: 3,
      alt: "Memory 3",
      caption: "Special times we shared",
    },
    {
      id: 4,
      alt: "Memory 4",
      caption: "Making memories",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold gradient-text mb-4">
          Our Memories Together 📸
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every photo tells a story of the beautiful moments we've shared
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {photos.map((photo, index) => (
          <Card
            key={photo.id}
            className="overflow-hidden group hover:shadow-2xl transition-all duration-300 floating backdrop-blur-sm bg-card/80 border-2 border-primary/20"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
              <div className="text-6xl filter grayscale-0 group-hover:scale-110 transition-transform duration-300">
                🖼️
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-4">
              <p className="text-center text-foreground font-medium">
                {photo.caption}
              </p>
              <p className="text-center text-sm text-muted-foreground mt-1">
                Add your special photo here
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground italic max-w-2xl mx-auto mt-8 p-4 bg-birthday-light/50 rounded-lg">
        💡 Tip: Replace the placeholder emojis with your actual photos by updating the PhotoGallery component
      </div>
    </div>
  );
};

export default PhotoGallery;
