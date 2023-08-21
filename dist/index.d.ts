/// <reference types="node" />
import { pdfOptions } from './common/interfaces/interface';
declare const generatePdf: (pdfOptions: pdfOptions, html: string) => Promise<Buffer>;
export { generatePdf, pdfOptions };
