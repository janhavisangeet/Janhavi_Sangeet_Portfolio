import About from "@/components/About";
import { Blogs } from "@/components/Blogs";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Contact } from "@/components/Contact";
import { getAllBlogs } from "../../lib/getAllBlogs";
import { WorkHistory } from "@/components/WorkHistory";

export default async function Home() {
  const allBlogs = await getAllBlogs();

  const blogs = allBlogs.map(({ component, ...rest }) => rest);
  return (
    <Container>
      <ThemeToggle />
      <section id="home" className="scroll-mt-20">
        <span className="text-4xl">👋</span>
        <Heading className="font-black">
          Hello there! I&apos;m Janhavi Sangeet
        </Heading>
        <Paragraph className="max-w-xl mt-4">
          I&apos;m a full-stack developer specializing in the MERN stack,
          passionate about{" "}
          <Highlight>building modern and scalable web applications</Highlight>.
        </Paragraph>
        <Paragraph className="max-w-xl mt-4">
          I&apos;ve built projects like a{" "}
          <Highlight>SaaS-based project management system</Highlight> and
          continuously work on improving my skills in full-stack development.
        </Paragraph>
        <TechStack />
      </section>

      <section id="projects" className="scroll-mt-20 mt-20">
        <Heading
          as="h2"
          className="font-black text-lg md:text-lg lg:text-lg mb-4"
        >
          Projects I&apos;ve been working On
        </Heading>
        <Products />
      </section>

      <section id="experience" className="scroll-mt-20 mt-20">
        <Heading
          as="h2"
          className="font-black text-lg md:text-lg lg:text-lg mb-4"
        >
          Work Experience
        </Heading>
        <WorkHistory />
      </section>

      <section id="about" className="scroll-mt-20 mt-20">
        <Heading
          as="h2"
          className="font-black text-lg md:text-lg lg:text-lg mb-4"
        >
          About Me
        </Heading>
        <About />
      </section>

      <section id="blog" className="scroll-mt-20 mt-20">
        <Heading
          as="h2"
          className="font-black text-lg md:text-lg lg:text-lg mb-4"
        >
          Articles & Blogs
        </Heading>
        <Blogs blogs={blogs} />
      </section>

      <section id="contact" className="scroll-mt-20 mt-20">
        <Heading
          as="h2"
          className="font-black text-lg md:text-lg lg:text-lg mb-4"
        >
          Contact
        </Heading>
        <Contact />
      </section>
    </Container>
  );
}
