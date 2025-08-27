import { Home, Search, Bell, Mail, Bookmark, User, MoreHorizontal } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Explore' },
    { icon: Bell, label: 'Notifications' },
    { icon: Mail, label: 'Messages' },
    { icon: Bookmark, label: 'Bookmarks' },
    { icon: User, label: 'Profile' },
    { icon: MoreHorizontal, label: 'More' },
  ];

  return (
    <div className="w-64 h-screen p-6 border-r border-border sticky top-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">Twitter</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`nav-item ${item.active ? 'nav-item-active' : ''}`}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xl">{item.label}</span>
          </div>
        ))}
      </nav>
      
      <button className="btn-tweet w-full mt-8">
        Tweet
      </button>
      
      <div className="mt-auto pt-8">
        <div className="flex items-center gap-3 p-3 rounded-full hover:bg-muted transition-colors">
          <div className="w-10 h-10 bg-primary rounded-full"></div>
          <div className="flex-1">
            <p className="font-semibold">Your Name</p>
            <p className="text-sm text-muted-foreground">@username</p>
          </div>
          <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;