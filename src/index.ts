import puppeteer, { Browser, PDFOptions, Page } from 'puppeteer';

const generatePdf = async (pdfOptions: PDFOptions, html: string) => {
  // Create a browser instance
  const browser: Browser = await puppeteer.launch({
    headless: true,
    args: [`--window-size=827,992`],
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
  console.log(pdfBuffer);
  return pdfBuffer;
};

export default { generatePdf };
