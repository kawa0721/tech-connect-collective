
import { Heart, MessageSquare, Share2 } from "lucide-react";

const PostFeed = () => {
  const posts = [
    {
      id: 1,
      author: "TechCoder",
      handle: "@techcoder",
      timeAgo: "2h ago",
      content: "Just discovered an amazing performance optimization technique in React 🚀",
      code: `const MemoizedComponent = React.memo(({ data }) => {
  return <div>{data}</div>
});`,
      likes: 124,
      comments: 23,
      tags: ["react", "performance"]
    },
    {
      id: 2,
      author: "JavaScriptNinja",
      handle: "@jsninja",
      timeAgo: "4h ago",
      content: "Here's a cool TypeScript trick for better type safety:",
      code: `type User = {
  id: string;
  name: string;
  email: string;
};

type UserKeys = keyof User; // "id" | "name" | "email"`,
      likes: 89,
      comments: 15,
      tags: ["typescript", "webdev"]
    }
  ];

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article key={post.id} className="neo-blur rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ring-1 ring-white/10">
              {post.author[0]}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-foreground">{post.author}</h3>
                <span className="text-muted-foreground text-sm">{post.handle}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground text-sm">{post.timeAgo}</span>
              </div>
              <p className="mt-2 mb-4 text-foreground/90">{post.content}</p>
              <pre className="bg-black/50 rounded-lg p-4 mb-4 overflow-x-auto font-mono text-sm text-foreground/90">
                <code>{post.code}</code>
              </pre>
              <div className="flex items-center space-x-6 mt-4">
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
              <div className="flex gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 text-xs text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PostFeed;
