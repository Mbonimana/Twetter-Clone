import { Image, Video, Calendar, FileText } from 'lucide-react';

const PostComposer = () => {
  return (
    <div className="post-container mb-4">
      <div className="flex gap-3">
        <img
          src="/src/assets/avatar1.jpg"
          alt="Your profile"
          className="post-avatar"
        />
        <div className="flex-1">
          <textarea
            placeholder="Start a post..."
            className="w-full bg-transparent text-foreground placeholder-muted-foreground resize-none border-none outline-none text-lg"
            rows={3}
          />
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
        <div className="flex items-center gap-4">
          <button className="post-action">
            <Image className="w-5 h-5" />
            <span>Photo</span>
          </button>
          <button className="post-action">
            <Video className="w-5 h-5" />
            <span>Video</span>
          </button>
          <button className="post-action">
            <Calendar className="w-5 h-5" />
            <span>Event</span>
          </button>
          <button className="post-action">
            <FileText className="w-5 h-5" />
            <span>Article</span>
          </button>
        </div>
        <button className="btn-linkedin disabled:opacity-50 disabled:cursor-not-allowed" disabled>
          Post
        </button>
      </div>
    </div>
  );
};

export default PostComposer;