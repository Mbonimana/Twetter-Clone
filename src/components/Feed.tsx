import Tweet from './Tweet';
import TweetComposer from './TweetComposer';
import avatar1 from '@/assets/avatar1.jpg';
import avatar2 from '@/assets/avatar2.jpg';
import avatar3 from '@/assets/avatar3.jpg';
import avatar4 from '@/assets/avatar4.jpg';

const Feed = () => {
  const tweets = [
    {
      id: 1,
      username: 'Sarah Johnson',
      handle: 'sarahj_dev',
      time: '2h',
      content: 'Just finished building an amazing React component library! The new hooks are incredibly powerful. Can\'t wait to share more details soon. 🚀 #React #WebDev',
      avatar: avatar1,
      likes: 124,
      retweets: 28,
      replies: 15,
    },
    {
      id: 2,
      username: 'Michael Chen',
      handle: 'mikec_design',
      time: '4h',
      content: 'Beautiful UI/UX design is all about finding the perfect balance between functionality and aesthetics. Sometimes the simplest solutions are the most elegant ones.',
      avatar: avatar2,
      likes: 89,
      retweets: 42,
      replies: 23,
    },
    {
      id: 3,
      username: 'Alex Rivera',
      handle: 'alex_codes',
      time: '6h',
      content: 'Hot take: TypeScript has revolutionized the way we write JavaScript. The type safety and developer experience improvements are game-changing! 💪',
      avatar: avatar3,
      likes: 156,
      retweets: 67,
      replies: 31,
    },
    {
      id: 4,
      username: 'Dr. Margaret Thompson',
      handle: 'drmthompson',
      time: '8h',
      content: 'Excited to share our latest research findings on sustainable technology solutions. The future is looking brighter with innovative approaches to environmental challenges.',
      avatar: avatar4,
      likes: 203,
      retweets: 94,
      replies: 45,
    },
    {
      id: 5,
      username: 'Sarah Johnson',
      handle: 'sarahj_dev',
      time: '12h',
      content: 'Pro tip: Always write clean, readable code. Your future self (and your teammates) will thank you later! What are your favorite code organization strategies?',
      avatar: avatar1,
      likes: 78,
      retweets: 34,
      replies: 29,
    },
  ];

  return (
    <div className="flex-1 border-r border-border">
      {/* Header */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border p-4 z-10">
        <h1 className="text-xl font-bold">Home</h1>
      </div>

      {/* Tweet Composer */}
      <TweetComposer />

      {/* Feed */}
      <div>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            username={tweet.username}
            handle={tweet.handle}
            time={tweet.time}
            content={tweet.content}
            avatar={tweet.avatar}
            likes={tweet.likes}
            retweets={tweet.retweets}
            replies={tweet.replies}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;