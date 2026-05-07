import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Janhavi Sangeet",
  description:
    "I am an MCA graduate with MERN stack skills, strong problem-solving ability, and a willingness to learn. I am motivated, adaptable, and eager to contribute to the organization while growing professionally.",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}
