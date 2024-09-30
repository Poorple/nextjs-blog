import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <b>Ivan.</b> 😄
        </p>
        <p>
          An aspiring front-end developer, my focus so far has been on learning
          TypeScript and React, two tools that have become essential in modern
          web development. Currently, I am expanding my skill set by diving
          deeper into Next.js, a React framework that simplifies server-side
          rendering (SSR) and static site generation (SSG).
        </p>
        <p>
          While I still have a lot to learn, I’m enthusiastic about the journey
          ahead. Combining TypeScript, React, and Next.js is giving me a
          powerful toolkit to build high-performance, scalable applications. I'm
          eager to continue honing my skills and working on projects that
          challenge me to think critically and grow as a developer. The
          knowledge I've gained so far has made me more adaptable and
          resourceful, and I'm excited to keep pushing forward in my front-end
          development journey.
        </p>
      </section>
    </Layout>
  );
}
