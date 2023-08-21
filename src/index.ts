import puppeteer, { Browser, Page } from 'puppeteer';
import { Options } from './common/interfaces/interface';

const generatePdf = async (pdfOptions: Options, html: string) => {
  // Create a browser instance
  const browser: Browser = await puppeteer.launch({
    headless: 'new',
    args: [`--window-size=827,992`, `-webkit-print-color-adjust`],
  });

  // Create a new page
  const page: Page = (await browser.pages())[0];

  // render HTML file on browser page
  await page.setContent(html, {
    waitUntil: ['domcontentloaded', 'networkidle0'],
  });

  // To reflect CSS used for screens instead of print
  await page.emulateMediaType('screen');

  // Downlaod the PDF
  const pdfBuffer: Buffer = await page.pdf(pdfOptions);

  // Close the browser instance
  await browser.close();
  return pdfBuffer;
};

export { generatePdf, Options };
