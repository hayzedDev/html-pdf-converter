# HTML to PDF converter

This library converts HTML template to pdf. It works only on **Node.js** runtime for now. Subsequent releases would run on the client side (browser) 

## How to install
```
$ npm install --save @hayzeddev/html-pdf-converter
```

## Usage

This works with both CJS and ESM. 

```javascript
import { generatePdf, pdfOptions } from '@hayzeddev/html-pdf-converter';
import { join } from 'path';

const options: pdfOptions = {
  path: join(__dirname, 'result.pdf'),
};

(async function () {
  const buffer: Buffer = await generatePdf(
    options,
    '<h3>Generated pdf from @hayzeddev/html-pdf-converter</h3>'
  );
  console.log(buffer);
})();
```

```
const generatePdf: (options: pdfOptions, html: string) => Promise<Buffer>;
```

## Config
```
Options = {
    displayHeaderFooter?: boolean; //  Whether to show the header and footer. Defaults to `false`
 
    headerTemplate?: string; // Valid HTML template for the header
 
    footerTemplate?: string; // Valid HTML template for the footer
 
    printBackground?: boolean; // Set to `true` to print background graphics. Defaults to `false`
 
    landscape?: boolean; //  Whether to print in landscape orientation. Defaults to `false`

    format?: PaperFormatEnum; // The format of the pdf. It can be either of:  'Letter', 'Legal', 'Tabloid', 'Ledger', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5','A6' Defaults to `letter`

    path?: string; // path where the file get written to in the disc. If not defined, pdf would not be saved to the disk
}
```
