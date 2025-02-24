
const TrendingTopics = () => {
  const topics = [
    {
      title: "React Server Components",
      posts: "1,234"
    },
    {
      title: "TypeScript 5.0",
      posts: "892"
    },
    {
      title: "Next.js App Router",
      posts: "567"
    }
  ];

  return (
    <div className="glass-card rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Trending Topics</h2>
      <div className="space-y-4">
        {topics.map((topic) => (
          <div
            key={topic.title}
            className="p-4 rounded-lg hover-glass cursor-pointer transition-all"
          >
            <h3 className="font-medium">{topic.title}</h3>
            <p className="text-sm text-muted-foreground">{topic.posts} posts</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
