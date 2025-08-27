import { Bookmark, Eye, Plus } from 'lucide-react';

const LinkedInSidebar = () => {
  return (
    <div className="w-64 space-y-4">
      {/* Profile Card */}
      <div className="sidebar-card">
        <div className="profile-card">
          <div className="profile-cover"></div>
          <div className="pt-10 px-4 pb-4 text-center">
            <img
              src="/src/assets/avatar1.jpg"
              alt="Profile"
              className="profile-avatar"
            />
            <h3 className="text-lg font-semibold text-foreground mt-2">John Doe</h3>
            <p className="text-sm text-muted-foreground">Software Engineer at TechCorp</p>
          </div>
          <div className="border-t border-border px-4 py-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Profile views</span>
              <span className="text-primary font-semibold">142</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-muted-foreground">Post impressions</span>
              <span className="text-primary font-semibold">1,204</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="sidebar-card">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <Bookmark className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground">Saved items</span>
          </div>
          <div className="flex items-center gap-3">
            <Eye className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-foreground">Recent searches</span>
          </div>
        </div>
      </div>

      {/* Groups */}
      <div className="sidebar-card">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-foreground">Groups</span>
            <Plus className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">React Developers</div>
            <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">JavaScript Community</div>
            <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">UI/UX Designers</div>
          </div>
        </div>
      </div>

      {/* Followed Hashtags */}
      <div className="sidebar-card">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-foreground">Followed Hashtags</span>
            <Plus className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">#react</div>
            <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">#javascript</div>
            <div className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">#webdevelopment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInSidebar;