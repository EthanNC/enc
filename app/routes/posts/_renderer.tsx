import { jsxRenderer } from "hono/jsx-renderer";
import SnsButton from "../../islands/ShareButton";
import type { PropsWithChildren } from "hono/jsx";

export default jsxRenderer(
  ({ children, Layout, frontmatter }: PropsWithChildren<Props>) => {
    const _title = `${frontmatter?.title} | Blog Name`;

    return (
      <Layout title={_title} description={frontmatter?.description}>
        <div class="markdown">{children}</div>
        <SnsButton title={_title} />
      </Layout>
    );
  }
);
