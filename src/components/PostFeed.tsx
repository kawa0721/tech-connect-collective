
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
        <article key={post.id} className="glass-card rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              {post.author[0]}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold">{post.author}</h3>
                <span className="text-muted-foreground">{post.handle}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{post.timeAgo}</span>
              </div>
              <p className="mt-2 mb-4">{post.content}</p>
              <pre className="code-block mb-4 overflow-x-auto">
                <code>{post.code}</code>
              </pre>
              <div className="flex items-center space-x-4 mt-4">
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
              <div className="flex gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full bg-secondary text-xs text-secondary-foreground"
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
