import { useState } from 'react';
import { Image, Smile, Calendar, MapPin } from 'lucide-react';
import avatar1 from '@/assets/avatar1.jpg';

const TweetComposer = () => {
  const [tweetText, setTweetText] = useState('');

  return (
    <div className="border-b border-border p-4">
      <div className="flex gap-3">
        <img
          src={avatar1}
          alt="Your profile"
          className="tweet-avatar"
        />
        
        <div className="flex-1">
          <textarea
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            placeholder="What's happening?"
            className="w-full text-xl placeholder-muted-foreground bg-transparent border-none outline-none resize-none"
            rows={3}
          />
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-4 text-primary">
              <Image className="h-5 w-5 cursor-pointer hover:bg-accent hover:text-accent-foreground p-0.5 rounded transition-colors" />
              <Smile className="h-5 w-5 cursor-pointer hover:bg-accent hover:text-accent-foreground p-0.5 rounded transition-colors" />
              <Calendar className="h-5 w-5 cursor-pointer hover:bg-accent hover:text-accent-foreground p-0.5 rounded transition-colors" />
              <MapPin className="h-5 w-5 cursor-pointer hover:bg-accent hover:text-accent-foreground p-0.5 rounded transition-colors" />
            </div>
            
            <button
              className={`btn-tweet ${
                tweetText.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={tweetText.length === 0}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetComposer;