import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Janhavi Sangeet",
  description:
    "I am an MCA graduate with MERN stack skills, strong problem-solving ability, and a willingness to learn. I am motivated, adaptable, and eager to contribute to the organization while growing professionally.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">I write about technology</Heading>
      <Paragraph className="pb-10">
        Sharing insights on <Highlight>web development</Highlight> and my
        learning journey.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
