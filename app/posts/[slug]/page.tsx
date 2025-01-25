import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const posts = {
  "impact-of-ai": {
    title: "The Impact of AI on Modern Software Development",
    date: "2023-07-15",
    content:
      "Artificial Intelligence (AI) is revolutionizing the software development industry in unprecedented ways. From automated code generation to intelligent debugging tools, AI is enhancing developer productivity and changing the way we approach software creation. This post explores the current state of AI in software development, its potential future applications, and the skills developers need to thrive in this AI-augmented landscape. We'll also discuss the ethical considerations and potential challenges that come with increased AI integration in our development processes.",
  },
  "future-of-web-design": {
    title: "Minimalism in Web Design: Less is More",
    date: "2023-07-01",
    content:
      "In the age of information overload, minimalist web design stands out by embracing the principle of 'less is more'. This approach focuses on simplicity, clarity, and functionality, stripping away unnecessary elements to highlight what truly matters. Our post delves into the key principles of minimalist design, including the use of white space, typography, and color. We'll explore how this design philosophy can improve user experience, increase engagement, and convey your message more effectively. Through case studies and practical tips, we'll show you how to implement minimalist design principles in your own projects.",
  },
  "coding-productivity": {
    title: "Boosting Coding Productivity: Tools and Techniques",
    date: "2023-06-15",
    content:
      "In the fast-paced world of software development, productivity is key. This post explores a range of tools and techniques that can help developers write better code, faster. We'll cover everything from integrated development environments (IDEs) and code editors to version control systems and automated testing tools. Additionally, we'll discuss productivity methodologies like the Pomodoro Technique and how to implement them in your coding routine. Whether you're a seasoned developer or just starting out, these insights will help you optimize your workflow and boost your coding efficiency.",
  },
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <article>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">{post.date}</p>
      <div className="post-content">{post.content}</div>
    </article>
  )
}

