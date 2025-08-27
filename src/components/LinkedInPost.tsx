import { ThumbsUp, MessageCircle, Repeat2, Send, MoreHorizontal } from 'lucide-react';

interface LinkedInPostProps {
  author: string;
  title: string;
  time: string;
  content: string;
  avatar: string;
  likes: number;
  comments: number;
  shares: number;
}

const LinkedInPost = ({ author, title, time, content, avatar, likes, comments, shares }: LinkedInPostProps) => {
  return (
    <div className="post-container">
      <div className="flex items-start justify-between mb-3">
        <div className="flex gap-3">
          <img
            src={avatar}
            alt={author}
            className="post-avatar"
          />
          <div>
            <h3 className="font-semibold text-foreground">{author}</h3>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-xs text-muted-foreground">{time}</p>
          </div>
        </div>
        <button className="btn-ghost-linkedin">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="post-content mb-4">
        <p>{content}</p>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
        <span>{likes} reactions</span>
        <span>{comments} comments</span>
        <span>{shares} reposts</span>
      </div>

      <div className="post-actions">
        <button className="post-action">
          <ThumbsUp className="w-5 h-5" />
          <span>Like</span>
        </button>
        <button className="post-action">
          <MessageCircle className="w-5 h-5" />
          <span>Comment</span>
        </button>
        <button className="post-action">
          <Repeat2 className="w-5 h-5" />
          <span>Repost</span>
        </button>
        <button className="post-action">
          <Send className="w-5 h-5" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default LinkedInPost;