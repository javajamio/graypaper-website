import type { PageProps } from "gatsby";
import React from "react";
import { CommonHead } from "../components/Head/CommonHead";
import { Layout } from "../components/Layout";
import Graypaper from "../images/graypaper.png";
const Page: React.FC<PageProps> = (props) => {
  return (
    <Layout {...props}>
      <main>
        <article>
          <nav className="toc">
            <h2 id="Resources">Resources</h2>
            <ol>
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
              <li>
                <a href="#contribute">Contribute</a>
              </li>
            </ol>
          </nav>
          <h3 id="news">1. News</h3>
          <table className="borders-custom">
            <tbody>
              <tr>
                <td>18/04/2024</td>
                <td>
                  <a
                    href="https://github.com/paritytech/polkajam"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
                  >
                    Graypaper JAM specification published
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 id="download">2. Download</h3>
          <p>Get a copy of the Graypaper here:</p>
          <p className="pl-10">
            <a href={Graypaper} className="underline" rel="noopener noreferrer">
              https://graypaper.com/graypaper.pdf
            </a>
          </p>
          <h3 id="contribute">3. Contribute</h3>
          <p>
            To connect to the{" "}
            <span className="jam">
              <span>J</span>am
            </span>{" "}
            community, join our [matrix] space:
          </p>
          <p className="pl-10">
            <a
              className="underline"
              href="https://matrix.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              #jam:parity.io
            </a>
          </p>
        </article>
      </main>
    </Layout>
  );
};

export default Page;

export const Head = () => (
  <>
    <title>Resources</title>
    <CommonHead />
  </>
);
