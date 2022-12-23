import { LinkNoStyle } from "../components/ui/hyperlink/HyperlinkNoStyles";

const Custom404 = () => {
  return (
    <>
      <h1>
        NotFound
      </h1>
      <button>
        <LinkNoStyle href="/"> GO back home </LinkNoStyle>
      </button>
    </>
  );
}

export default Custom404;