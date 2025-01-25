import Link from "next/link"

// This would typically come from a database or CMS
const posts = [
  {
    slug: "impact-of-ai",
    title: "The Impact of AI on Modern Software Development",
    date: "2023-07-15",
    excerpt:
      "Exploring how artificial intelligence is reshaping the landscape of software development and what it means for developers.",
  },
  {
    slug: "future-of-web-design",
    title: "Minimalism in Web Design: Less is More",
    date: "2023-07-01",
    excerpt:
      "Discussing the principles of minimalist web design and why it's becoming increasingly popular in the digital age.",
  },
  {
    slug: "coding-productivity",
    title: "Boosting Coding Productivity: Tools and Techniques",
    date: "2023-06-15",
    excerpt: "A deep dive into various tools and techniques that can significantly improve a developer's productivity.",
  },
]

export default function Home() {
  return (
    <div>
      <h1 className="post-title">Behind Computer</h1>
      <p className="post-content" style={{ marginBottom: "2rem" }}>
        A place to publish my writing.
      </p>
      {posts.map((post) => (
        <article key={post.slug} style={{ marginBottom: "2rem" }}>
          <h2 className="post-title" style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="post-date" style={{ marginBottom: "0.5rem" }}>
            {post.date}
          </p>
          <p className="post-content">{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}

