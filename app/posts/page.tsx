
type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function PostsPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=8",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Помилка завантаження публікацій");
  }

  const posts: Post[] = await res.json();

  return (
    <main style={{ padding: "30px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Список публікацій
      </h1>

      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>
            {post.id}. {post.title}
          </h2>
          <p>{post.body}</p>
        </article>
      ))}
    </main>
  );
}
