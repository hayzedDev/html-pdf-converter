export interface pdfOptions {
    /**
     *  Whether to show the header and footer. Defaults to `false`
     */
    displayHeaderFooter?: boolean;
    /**
     *  Valid HTML template for the header
     */
    headerTemplate?: string;
    /**
     * Valid HTML template for the footer
     */
    footerTemplate?: string;
    /**
     *  Set to `true` to print background graphics. Defaults to `false`
     */
    printBackground?: boolean;
    /**
     * Whether to print in landscape orientation. Defaults to `false`
     */
    landscape?: boolean;
    /**
     * The format of the pdf. It can be either of:  'Letter', 'Legal', 'Tabloid', 'Ledger', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5','A6' Defaults to `letter`
     */
    format?: 'Letter' | 'Legal' | 'Tabloid' | 'Ledger' | 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6';
    /**
     * path where the file get written to in the disc. If not defined, pdf would not be saved to the disk
     */
    path?: string;
}
