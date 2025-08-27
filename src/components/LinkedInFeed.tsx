import PostComposer from './PostComposer';
import LinkedInPost from './LinkedInPost';

const LinkedInFeed = () => {
  const posts = [
    {
      id: 1,
      author: "Sarah Johnson",
      title: "Senior Product Manager at Google",
      time: "2h",
      content: "Just launched our new AI-powered feature! It's been an incredible journey working with such a talented team. The future of product development is here, and I'm excited to see how our users will benefit from this innovation. Special thanks to everyone who made this possible! 🚀",
      avatar: "/src/assets/avatar2.jpg",
      likes: 127,
      comments: 23,
      shares: 8
    },
    {
      id: 2,
      author: "Michael Chen",
      title: "Full Stack Developer at Microsoft",
      time: "4h",
      content: "Attended an amazing tech conference today! Key takeaways: 1) Cloud computing is evolving faster than ever 2) AI integration is becoming mainstream 3) Remote collaboration tools are the future. Great networking opportunities and learned so much from industry leaders.",
      avatar: "/src/assets/avatar3.jpg",
      likes: 89,
      comments: 15,
      shares: 12
    },
    {
      id: 3,
      author: "Emily Rodriguez",
      title: "UX Designer at Spotify",
      time: "6h",
      content: "Design thinking workshop was incredibly insightful! We explored user empathy, ideation techniques, and rapid prototyping. The collaborative approach really highlighted how diverse perspectives lead to better solutions. Can't wait to apply these methodologies to our upcoming projects.",
      avatar: "/src/assets/avatar4.jpg",
      likes: 156,
      comments: 31,
      shares: 19
    },
    {
      id: 4,
      author: "David Kim",
      title: "DevOps Engineer at Amazon",
      time: "8h",
      content: "Successfully migrated our entire infrastructure to containerized services! The performance improvements are remarkable - 40% faster deployment times and 60% better resource utilization. Kubernetes has been a game-changer for our team's productivity and system reliability.",
      avatar: "/src/assets/avatar1.jpg",
      likes: 203,
      comments: 47,
      shares: 25
    }
  ];

  return (
    <main className="flex-1 max-w-xl mx-auto px-4 py-4">
      <PostComposer />
      
      <div className="space-y-4">
        {posts.map((post) => (
          <LinkedInPost
            key={post.id}
            author={post.author}
            title={post.title}
            time={post.time}
            content={post.content}
            avatar={post.avatar}
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
          />
        ))}
      </div>
    </main>
  );
};

export default LinkedInFeed;