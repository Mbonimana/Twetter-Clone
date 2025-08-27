import LinkedInHeader from '@/components/LinkedInHeader';
import LinkedInSidebar from '@/components/LinkedInSidebar';
import LinkedInFeed from '@/components/LinkedInFeed';
import LinkedInRightSidebar from '@/components/LinkedInRightSidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LinkedInHeader />
      <div className="max-w-7xl mx-auto flex gap-6 pt-6">
        <LinkedInSidebar />
        <LinkedInFeed />
        <LinkedInRightSidebar />
      </div>
    </div>
  );
};

export default Index;
