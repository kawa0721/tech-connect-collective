
import { Home, TrendingUp, Bookmark, Hash } from "lucide-react";
import PostFeed from "./PostFeed";
import TrendingTopics from "./TrendingTopics";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar */}
      <nav className="w-64 glass-card m-4 rounded-lg p-4 h-[calc(100vh-2rem)] flex flex-col space-y-2">
        <h2 className="text-xl font-bold px-4 mb-4">Navigation</h2>
        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover-glass">
          <Home className="w-5 h-5" />
          <span>Feed</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover-glass">
          <TrendingUp className="w-5 h-5" />
          <span>Trending</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover-glass">
          <Bookmark className="w-5 h-5" />
          <span>Bookmarks</span>
        </button>
        <div className="mt-8">
          <h3 className="text-sm text-muted-foreground px-4 mb-2">Popular Tags</h3>
          <div className="space-y-1">
            <button className="flex items-center space-x-2 px-4 py-2 w-full text-left hover-glass rounded-lg">
              <Hash className="w-4 h-4" />
              <span>typescript</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 w-full text-left hover-glass rounded-lg">
              <Hash className="w-4 h-4" />
              <span>react</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-4 overflow-auto">
        <div className="glass-card rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Trending</h1>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              See all
            </button>
          </div>
        </div>
        <PostFeed />
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 p-4">
        <TrendingTopics />
      </aside>
    </div>
  );
};

export default Layout;
