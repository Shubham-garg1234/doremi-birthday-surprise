import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StoryDetail {
  title: string;
  icon: string;
  fullStory: string;
  images: string[];
  moments: string[];
}

interface StoryDetailDialogProps {
  story: StoryDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StoryDetailDialog = ({ story, open, onOpenChange }: StoryDetailDialogProps) => {
  if (!story) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-gradient-to-br from-card via-card to-primary/5">
        <ScrollArea className="max-h-[90vh] p-6">
          <DialogHeader className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-5xl floating">{story.icon}</span>
              <DialogTitle className="text-3xl font-bold gradient-text">
                {story.title}
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="space-y-8">
            {/* Full Story */}
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed text-lg">
                {story.fullStory}
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {story.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow floating"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={image}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Special Moments List */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <span>✨</span> Favorite Moments
              </h3>
              <div className="grid gap-3">
                {story.moments.map((moment, index) => (
                  <div
                    key={index}
                    className="p-4 bg-birthday-light/50 rounded-lg border-l-4 border-primary/40 hover:border-primary transition-colors float-delayed"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <p className="text-foreground">{moment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default StoryDetailDialog;
