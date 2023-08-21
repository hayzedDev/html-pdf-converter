export interface pdfOptions {
  displayHeaderFooter?: boolean; //  Whether to show the header and footer. Defaults to `false`

  headerTemplate?: string; // Valid HTML template for the header

  footerTemplate?: string; // Valid HTML template for the footer

  printBackground?: boolean; // Set to `true` to print background graphics. Defaults to `false`

  landscape?: boolean; //  Whether to print in landscape orientation. Defaults to `false`

  format?:
    | 'Letter'
    | 'Legal'
    | 'Tabloid'
    | 'Ledger'
    | 'A0'
    | 'A1'
    | 'A2'
    | 'A3'
    | 'A4'
    | 'A5'
    | 'A6'; // Defaults to `letter`; // The format of the pdf. It can be either of:  'Letter', 'Legal', 'Tabloid', 'Ledger', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5','A6' Defaults to `letter`

  path?: string; // path where the file get written to in the disc. If not defined, pdf would not be saved to the disk
}
