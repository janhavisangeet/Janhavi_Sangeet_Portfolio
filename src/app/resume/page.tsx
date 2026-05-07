import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work Experience</Heading>
      <Paragraph className="max-w-xl mt-4">
        Sharing my journey as a <Highlight>MERN stack developer</Highlight> —
        building projects, learning new technologies, and solving real-world
        problems.
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
