import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { PageHeader } from "antd";

interface Props {
  styleTags: object;
}

export default class MyDocument extends Document<Props & DocumentInitialProps> {
  static async getInitialProps(context: DocumentContext) {
    const { renderPage } = context;

    // Collecting styles for server side rendering
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body style={{ maxWidth: "1800px", margin: "auto" }}>
          <PageHeader title="MentorcliQ" />
          <div style={{ padding: "4px 24px" }}>
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
