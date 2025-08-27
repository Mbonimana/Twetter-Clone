import { Search, MoreHorizontal } from 'lucide-react';

const TrendingSidebar = () => {
  const trends = [
    { category: 'Technology', title: 'React 19', tweets: '125K' },
    { category: 'Sports', title: 'World Cup', tweets: '89.2K' },
    { category: 'Entertainment', title: 'New Movie', tweets: '56.8K' },
    { category: 'Politics', title: 'Elections 2024', tweets: '203K' },
    { category: 'Gaming', title: 'New Console', tweets: '78.9K' },
  ];

  const suggestions = [
    { name: 'Sarah Johnson', handle: 'sarahj_dev', avatar: '/placeholder.svg' },
    { name: 'Michael Chen', handle: 'mikec_design', avatar: '/placeholder.svg' },
    { name: 'Emily Davis', handle: 'emily_writes', avatar: '/placeholder.svg' },
  ];

  return (
    <div className="w-80 p-4 space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="w-full bg-muted rounded-full py-3 pl-12 pr-4 text-foreground placeholder-muted-foreground border-none outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Trending */}
      <div className="bg-muted rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">What's happening</h2>
        <div className="space-y-3">
          {trends.map((trend, index) => (
            <div key={index} className="flex justify-between items-start hover:bg-background p-2 rounded cursor-pointer transition-colors">
              <div>
                <p className="text-sm text-muted-foreground">{trend.category} · Trending</p>
                <p className="font-bold text-foreground">{trend.title}</p>
                <p className="text-sm text-muted-foreground">{trend.tweets} Tweets</p>
              </div>
              <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
            </div>
          ))}
        </div>
        <button className="text-primary hover:underline mt-2">Show more</button>
      </div>

      {/* Who to follow */}
      <div className="bg-muted rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">Who to follow</h2>
        <div className="space-y-3">
          {suggestions.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full"></div>
                <div>
                  <p className="font-bold text-foreground hover:underline cursor-pointer">
                    {user.name}
                  </p>
                  <p className="text-sm text-muted-foreground">@{user.handle}</p>
                </div>
              </div>
              <button className="bg-foreground text-background px-4 py-1.5 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
        <button className="text-primary hover:underline mt-2">Show more</button>
      </div>
    </div>
  );
};

export default TrendingSidebar;