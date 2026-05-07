import efficio from "public/images/efficio.png";
import efficio2 from "public/images/efficio-2.png";
import efficio3 from "public/images/efficio-3.png";
import efficio4 from "public/images/efficio-4.png";
import efficio5 from "public/images/efficio-5.png";
import efficio6 from "public/images/efficio-6.png";
import LMS1 from "public/images/LMS-1.png";
import LMS2 from "public/images/LMS-2.png";
import LMS3 from "public/images/LMS-3.png";
import LMS4 from "public/images/LMS-4.png";
import LMS5 from "public/images/LMS-5.png";
import LMS6 from "public/images/LMS-6.png";

export const products = [
  {
    href: "https://efficio-app.vercel.app",
    title: "Efficio",
    description:
      "A full-stack B2B team project management SaaS platform for managing tasks, projects, and team collaboration with role-based access and email notifications.",
    thumbnail: efficio,
    images: [efficio2, efficio3, efficio4, efficio5, efficio6],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "Brevo",
    ],
    slug: "Efficio",
    content: (
      <div>
        <p>
          Efficio is an advanced MERN-based project management platform designed
          for teams to efficiently manage workflows, tasks, and collaboration in
          a centralized environment. It supports multi-workspace architecture,
          enabling organizations to manage multiple projects and teams
          seamlessly.
        </p>

        <p>
          The platform includes features such as task assignment with due dates,
          role-based access control (Owner, Admin, Member), document management,
          and request approval workflows. It also integrates email notifications
          using Brevo for task assignments and automated due date reminders
          using cron jobs.
        </p>

        <p>
          Efficio enhances productivity by providing real-time updates, clear
          task tracking, and a scalable architecture suitable for
          enterprise-level applications. It is deployed using Vercel (frontend)
          and Render (backend), ensuring high performance and reliability.
        </p>
      </div>
    ),
  },
  {
    href: "https://edura-app.vercel.app",
    title: "Edura",
    description:
      "A modern EdTech platform designed for seamless online learning, course management, and student-teacher interaction with a user-friendly interface.",
    thumbnail: LMS1,
    images: [LMS2, LMS3, LMS4, LMS5, LMS6],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "Cloudinary",
    ],
    slug: "Edura",
    content: (
      <div>
        <p>
          Edura is a full-stack EdTech platform built to provide an interactive
          and efficient online learning experience for students and educators.
          It enables users to access courses, track progress, and engage with
          educational content in a structured manner.
        </p>

        <p>
          The platform includes features such as course creation and enrollment,
          video-based learning modules, user authentication, and role-based
          dashboards for students and instructors. It ensures smooth navigation
          and responsiveness across devices.
        </p>

        <p>
          Edura focuses on enhancing digital education by offering a scalable
          and user-friendly system that simplifies course delivery and learning
          management. It is deployed using modern cloud platforms to ensure
          reliability and performance.
        </p>
      </div>
    ),
  },
];
