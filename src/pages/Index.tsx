import Sidebar from '@/components/Sidebar';
import Feed from '@/components/Feed';
import TrendingSidebar from '@/components/TrendingSidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto flex">
        <Sidebar />
        <Feed />
        <TrendingSidebar />
      </div>
    </div>
  );
};

export default Index;
