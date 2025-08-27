import { Search, Home, Users, Briefcase, MessageCircle, Bell, User } from 'lucide-react';

const LinkedInHeader = () => {
  return (
    <header className="nav-header">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo and Search */}
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-primary">in</div>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              className="bg-input border border-border rounded-md pl-10 pr-4 py-2 w-64 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          <div className="nav-item-linkedin nav-item-active-linkedin">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </div>
          <div className="nav-item-linkedin">
            <Users className="w-5 h-5" />
            <span>Network</span>
          </div>
          <div className="nav-item-linkedin">
            <Briefcase className="w-5 h-5" />
            <span>Jobs</span>
          </div>
          <div className="nav-item-linkedin">
            <MessageCircle className="w-5 h-5" />
            <span>Messaging</span>
          </div>
          <div className="nav-item-linkedin">
            <Bell className="w-5 h-5" />
            <span>Notifications</span>
          </div>
          <div className="nav-item-linkedin">
            <User className="w-5 h-5" />
            <span>Me</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default LinkedInHeader;