"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePdf = void 0;
const tslib_1 = require("tslib");
const puppeteer_1 = tslib_1.__importDefault(require("puppeteer"));
const generatePdf = async (pdfOptions, html) => {
    // Create a browser instance
    const browser = await puppeteer_1.default.launch({
        headless: true,
        args: [`--window-size=827,992`, `-webkit-print-color-adjust`],
    });
    // Create a new page
    const page = (await browser.pages())[0];
    // render HTML file on browser page
    await page.setContent(html, {
        waitUntil: ['domcontentloaded', 'networkidle0'],
    });
    // To reflect CSS used for screens instead of print
    await page.emulateMediaType('screen');
    // Downlaod the PDF
    const pdfBuffer = await page.pdf(pdfOptions);
    // Close the browser instance
    await browser.close();
    console.log(pdfBuffer);
    return pdfBuffer;
};
exports.generatePdf = generatePdf;
//# sourceMappingURL=index.js.map