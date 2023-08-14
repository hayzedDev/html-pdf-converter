/// <reference types="node" />
import { PDFOptions } from 'puppeteer';
declare const generatePdf: (pdfOptions: PDFOptions, html: string) => Promise<Buffer>;
export { generatePdf };
