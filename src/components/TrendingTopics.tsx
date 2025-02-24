
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
    <div className="neo-blur rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4 text-gradient">Trending Topics</h2>
      <div className="space-y-3">
        {topics.map((topic) => (
          <div
            key={topic.title}
            className="p-4 rounded-lg hover-glass cursor-pointer transition-all"
          >
            <h3 className="font-medium text-foreground/90">{topic.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{topic.posts} posts</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
