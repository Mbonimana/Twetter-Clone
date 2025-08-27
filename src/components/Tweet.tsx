import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from 'lucide-react';

interface TweetProps {
  username: string;
  handle: string;
  time: string;
  content: string;
  avatar: string;
  likes?: number;
  retweets?: number;
  replies?: number;
}

const Tweet = ({ username, handle, time, content, avatar, likes = 0, retweets = 0, replies = 0 }: TweetProps) => {
  return (
    <div className="tweet-container">
      <div className="flex gap-3">
        <img
          src={avatar}
          alt={`${username}'s profile`}
          className="tweet-avatar"
        />
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-foreground hover:underline cursor-pointer">
              {username}
            </h3>
            <span className="text-muted-foreground">@{handle}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{time}</span>
            <div className="ml-auto">
              <MoreHorizontal className="h-5 w-5 text-muted-foreground hover:bg-muted rounded-full p-1 cursor-pointer" />
            </div>
          </div>
          
          <p className="tweet-content mb-3">
            {content}
          </p>
          
          <div className="tweet-actions">
            <div className="tweet-action group">
              <MessageCircle className="h-5 w-5 group-hover:text-blue-500 transition-colors" />
              <span className="group-hover:text-blue-500">{replies}</span>
            </div>
            
            <div className="tweet-action group">
              <Repeat2 className="h-5 w-5 group-hover:text-green-500 transition-colors" />
              <span className="group-hover:text-green-500">{retweets}</span>
            </div>
            
            <div className="tweet-action group">
              <Heart className="h-5 w-5 group-hover:text-red-500 transition-colors" />
              <span className="group-hover:text-red-500">{likes}</span>
            </div>
            
            <div className="tweet-action group">
              <Share className="h-5 w-5 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;