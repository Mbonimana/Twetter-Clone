import { Plus, X, ArrowRight } from 'lucide-react';

const LinkedInRightSidebar = () => {
  return (
    <div className="w-80 space-y-4">
      {/* LinkedIn News */}
      <div className="sidebar-card">
        <div className="p-4">
          <h3 className="text-base font-semibold text-foreground mb-3">LinkedIn News</h3>
          <div className="space-y-3">
            <div className="cursor-pointer hover:bg-accent p-2 rounded -m-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">Tech layoffs continue across industry</p>
                  <p className="text-xs text-muted-foreground">3h ago • 12,453 readers</p>
                </div>
              </div>
            </div>
            <div className="cursor-pointer hover:bg-accent p-2 rounded -m-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">AI adoption surges in healthcare</p>
                  <p className="text-xs text-muted-foreground">5h ago • 8,721 readers</p>
                </div>
              </div>
            </div>
            <div className="cursor-pointer hover:bg-accent p-2 rounded -m-2">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">Remote work policies evolving</p>
                  <p className="text-xs text-muted-foreground">8h ago • 15,692 readers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* People You May Know */}
      <div className="sidebar-card">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-foreground">People you may know</h3>
            <X className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/avatar2.jpg"
                alt="Alice Cooper"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Alice Cooper</p>
                <p className="text-xs text-muted-foreground">Frontend Developer at Meta</p>
                <button className="btn-linkedin-outline mt-2 text-xs px-4 py-1">
                  Connect
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/avatar3.jpg"
                alt="Bob Smith"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Bob Smith</p>
                <p className="text-xs text-muted-foreground">Data Scientist at Netflix</p>
                <button className="btn-linkedin-outline mt-2 text-xs px-4 py-1">
                  Connect
                </button>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mt-3">
            Show more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Promoted Content */}
      <div className="sidebar-card">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-foreground">Promoted</h3>
            <X className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
          </div>
          <div className="space-y-3">
            <div className="cursor-pointer hover:bg-accent p-2 rounded -m-2">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">AD</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Master React in 30 Days</p>
                  <p className="text-xs text-muted-foreground">CodeAcademy • Learn modern React development</p>
                </div>
              </div>
            </div>
            <div className="cursor-pointer hover:bg-accent p-2 rounded -m-2">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">AD</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">AWS Cloud Certification</p>
                  <p className="text-xs text-muted-foreground">Amazon Web Services • Get certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInRightSidebar;