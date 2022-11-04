export default function Footer() {
  const attributeElements = {
    "xmlns:dct": "http://purl.org/dc/terms/",
    "xmlns:vcard": "http://www.w3.org/2001/vcard-rdf/3.0#"
  }

  return (
    <footer className="footer">
      <p {...attributeElements}>
        <a rel="license"
          href="http://creativecommons.org/publicdomain/zero/1.0/">
          <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" alt="CC0" />
        </a>
        <span>
          To the extent possible under law,
          <span resource="[_:publisher]" rel="dct:publisher">
            <span property="dct:title"> Vincente Aggrippino </span>
          </span>
          has waived all copyright and related or neighboring rights to
          this work.
          This work is published from:
          <span
            property="vcard:Country"
            datatype="dct:ISO3166"
            content="US"
            about="[_:publisher]"
          >United States</span>.
        </span>
      </p>
    </footer>
  );
}