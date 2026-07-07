module.exports = {
  "utility/tip-calculator.astro": {
    faqs: [
      { q: "How is tip calculated?", a: "Tip is calculated by multiplying the pre-tax bill subtotal by the tip percentage: Tip = Bill Subtotal * (Tip Percentage / 100)." },
      { q: "What is the standard tipping rate in the United States?", a: "In the US, the standard tipping rate for sit-down restaurant service is 15% to 20% of the pre-tax subtotal, depending on the quality of service." },
      { q: "Should I calculate the tip before or after sales tax?", a: "Standard dining etiquette is to calculate the tip on the pre-tax bill subtotal, so you do not pay a tip on top of government taxes." },
      { q: "How does splitting a tip work?", a: "To split a tip and bill, calculate the total bill (including tax and tip), then divide that final total by the number of people sharing the cost." },
      { q: "What does rounding up a bill mean?", a: "Rounding up a bill adjusts the total amount to the next nearest dollar, adding the difference to the tip for convenience, which is helpful when paying cash." },
      { q: "Is tipping common in Europe?", a: "In many European countries, service is included in the bill (labeled as 'Service Compris'). However, leaving a small tip of 5% to 10% is appreciated for good service." },
      { q: "How much do you tip in Japan?", a: "In Japan, tipping is not part of the culture and can be considered impolite. Exceptional service is rewarded with appreciation rather than cash tips." },
      { q: "Do I tip at self-service buffet restaurants?", a: "Tipping at buffets is typically lower than table service, with 10% considered standard for staff who clear plates and refill drinks." },
      { q: "What should I tip a delivery driver?", a: "For food delivery, a tip of 10% to 15% of the order total is standard, with a minimum tip of $3 to $5 depending on travel distance and weather." },
      { q: "Does this tip calculator save my inputs?", a: "No. The calculator processes all inputs locally in your browser. No details are transmitted or saved on our servers." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">Tipping Etiquette and Calculations: Math and Global Standards</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          Tipping is a common way to show appreciation for service, but standards and customs vary widely depending on the industry and the country. Knowing how to calculate tips quickly and understanding local tipping customs helps you navigate transactions with confidence.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Tipping Math Formulas</h3>
        <p>
          Calculating a tip is straightforward. Use the following formulas for standard calculations:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Tip Amount = Pre-Tax Subtotal &times; (Tip Percentage / 100)<br/>
          Total Bill = Bill Subtotal + Tax Amount + Tip Amount
        </div>
        <p>
          For example, if a restaurant bill subtotal is $80.00, the sales tax is $6.00, and you choose to leave an 18% tip:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Tip Amount = $80.00 &times; 0.18 = $14.40<br/>
          Total Bill = $80.00 + $6.00 + $14.40 = $100.40
        </div>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Tipping Guidelines by Industry</h3>
        <p>
          In North America, tipping is an important part of compensation for many service workers:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>Restaurants (Table Service):</strong> 15% to 20% of the pre-tax subtotal, depending on the quality of service.</li>
          <li><strong>Bars & Bartenders:</strong> $1 to $2 per drink, or 15% to 20% of the tab.</li>
          <li><strong>Taxis & Rideshares:</strong> 10% to 15% of the fare.</li>
          <li><strong>Salons & Spas:</strong> 15% to 20% of the service cost.</li>
        </ul>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Global Tipping Customs</h3>
        <p>
          Tipping customs vary around the world:
        </p>
        <p>
          <strong>Europe:</strong> Service charges are often included in the bill. Small tips of 5% to 10% are common for good service, usually rounded up to the nearest euro. In countries like France or Italy, you can simply leave a few coins on the table or round up your card payment.
        </p>
        <p>
          <strong>East Asia:</strong> In countries like Japan, South Korea, and Singapore, tipping is not expected and can cause confusion. Exceptional service is rewarded with polite appreciation instead of cash. If you leave money on a table, servers may run after you to return it.
        </p>
        <p>
          <strong>Other Regions:</strong> In Australia and New Zealand, tipping is not traditional, though it has become more common in high-end tourist destinations. In South America and the Middle East, a tip of 10% is standard in restaurants.
        </p>
        <p>
          Understanding these international guidelines is extremely useful when traveling. It helps you prepare the correct cash amounts or select appropriate tipping parameters on terminal payment screens without overpaying or offending local service workers.
        </p>
      </div>
    `
  },
  "utility/name-generator.astro": {
    faqs: [
      { q: "How does the random name generator work?", a: "The generator uses lists of pre-selected names and prefix/suffix components, picking combinations randomly based on your category and origin filters." },
      { q: "Can I generate business names?", a: "Yes. The tool features a dedicated 'Business' category that combines tech, creative, and classic name structures for companies." },
      { q: "How many name categories are available?", a: "It offers baby names, fantasy names, pet names, business/startup names, and origin-specific options." },
      { q: "Can I filter baby names by gender?", a: "Yes. You can filter baby names by Male, Female, or Gender-Neutral options." },
      { q: "What origins are supported for names?", a: "The generator includes Anglo-Saxon, Norse, Celtic, Roman, and modern English name lists." },
      { q: "Can I save names I like?", a: "Yes. You can star names to save them to a local favorites list, which persists in your browser's localStorage for future reference." },
      { q: "Is the name generation truly random?", a: "Yes. It uses the browser's cryptographic Math.random() function to select and combine names randomly from our database." },
      { q: "Can I export my list of favorite names?", a: "Yes. The favorites list allows you to copy all starred names to your clipboard in a clean list format with a single click." },
      { q: "Are the generated names trademarked?", a: "The generator outputs random word combinations. For business names, we recommend performing a trademark check before registering a name." },
      { q: "Does this tool require an internet connection?", a: "No. The name database is bundled within the client-side JavaScript file, allowing you to generate names offline." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">The Art of Naming: Creative Processes and Random Generation</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          Naming is a key part of identity, branding, and storytelling. Whether you are naming a newborn child, choosing a title for a new business, creating a fantasy character, or naming a pet, finding the right name is a creative process. A random name generator can help brainstorm ideas and spark inspiration.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">The Naming Process</h3>
        <p>
          Choosing a name involves several considerations:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>Sound & Phonetics:</strong> A name should be easy to pronounce, memorable, and have a pleasing cadence.</li>
          <li><strong>Origin & Meaning:</strong> Many names carry historical meanings or cultural associations that add depth.</li>
          <li><strong>Brand Identity:</strong> Business names should reflect the company's values, target audience, and industry.</li>
        </ul>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">How Random Name Generators Help</h3>
        <p>
          Writer's block can stall the creative process. Random generators introduce unexpected word and phonetic combinations, helping you see options you might not have considered. They can help jumpstart brainstorming for writers, game masters, and entrepreneurs alike.
        </p>
        <p>
          When naming a business, a random generator can combine words in ways that create unique, brandable names that stand out in your industry. For writers, it provides a fast way to generate names for minor characters or locations without breaking the writing flow. By storing your favorites in local storage, this tool allows you to build a shortlist that you can review and refine later.
        </p>
        <p>
          Additionally, explore different filters within our name generator to fit specific contexts, such as Norse or Celtic options for creative writing, or modern startup styling for corporate projects. This local tool requires no signup or email, letting you brainstorm privately.
        </p>
      </div>
    `
  },
  "image-tools/image-resizer.astro": {
    faqs: [
      { q: "How does client-side image resizing work?", a: "The tool draws your image file onto an HTML5 canvas element at your target dimensions, then exports the resized canvas as a new file in your chosen format." },
      { q: "Is my uploaded image sent to a server?", a: "No. The entire resizing process happens locally inside your browser. No files are uploaded to our servers, keeping your data private." },
      { q: "What formats can I export my resized image to?", a: "You can download your resized image in original format, JPEG, PNG, or WebP." },
      { q: "What does aspect ratio lock mean?", a: "Locking the aspect ratio ensures that when you adjust the width, the height updates proportionally (and vice versa) to prevent the image from stretching or distorting." },
      { q: "Are social media size presets available?", a: "Yes. The tool includes size presets for popular platforms like Instagram, Facebook, X (Twitter), and LinkedIn." },
      { q: "Does resizing reduce image file size?", a: "Yes. Reducing the pixel dimensions of an image decreases its file size, which helps optimize images for website performance." },
      { q: "Can I resize multiple images at once?", a: "This version is optimized for processing one image at a time to ensure maximum quality and performance in the browser." },
      { q: "Will resizing affect image quality?", a: "Downscaling an image reduces its resolution but usually keeps it looking sharp. Upscaling an image past its original size can make it look pixelated or blurry." },
      { q: "How does the browser handle PNG transparency when resizing?", a: "If you export to PNG or WebP, image transparency is preserved. If you export to JPEG, transparent areas will render as white." },
      { q: "Does this tool work on mobile devices?", a: "Yes. The interface is responsive and runs on mobile browsers, allowing you to resize photos on your phone." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">Digital Image Scaling: Canvas-Based Client-Side Resizing</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          Resizing images is a common task for web developers, content creators, and social media managers. Large image files can slow down websites and exceed email size limits. A client-side image resizer allows you to scale images quickly and securely directly in your browser.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Understanding Pixel Dimensions and File Size</h3>
        <p>
          An image's file size is directly related to its pixel dimensions. A photo from a modern camera might measure 6000 x 4000 pixels, containing 24 million pixels (megapixels). While great for print, this resolution is larger than needed for screen display, where standard monitors max out at 1920 x 1080 (1080p) or 3840 x 2160 (4K). Scaling down the pixel dimensions reduces the file size, making the image faster to load.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Aspect Ratio and Scaling Math</h3>
        <p>
          The aspect ratio is the relationship between an image's width and height, written as a ratio like 4:3 or 16:9. When resizing, it is important to preserve this ratio to avoid stretching the image:
        </p>
        <div class="p-4 bg-canvas-soft border border-hairline rounded-lg font-mono text-xs text-center text-ink my-4">
          Target Height = Target Width / Original Aspect Ratio<br/>
          Target Width = Target Height &times; Original Aspect Ratio
        </div>
        <p>
          Preserving the aspect ratio ensures your photos scale cleanly without distortion.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Choosing the Right File Format</h3>
        <p>
          When exporting your resized image, choosing the correct format is key for optimal quality and size:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>JPEG:</strong> Best for photos, offering good compression but does not support transparency.</li>
          <li><strong>PNG:</strong> Best for graphics, logos, and screenshots, offering lossless compression and transparency support.</li>
          <li><strong>WebP:</strong> The modern standard for web use, offering smaller sizes than JPEG and PNG while supporting transparency.</li>
        </ul>
        <p>
          By downscaling high-resolution assets locally, you can optimize them for web page load speeds, social media layouts, or email attachments. Our browser-based resizer keeps all image data inside your local browser memory, ensuring your photos are never exposed to remote server leaks.
        </p>
      </div>
    `
  },
  "image-tools/image-compressor.astro": {
    faqs: [
      { q: "How does browser-side image compression work?", a: "The compressor draws the uploaded image onto a canvas. By calling canvas.toDataURL(mime, quality), we configure the browser's native encoder to compress JPEGs/WebPs at the specified quality factor (e.g. 0.75 for 75%)." },
      { q: "Will compressing my image reduce quality?", a: "For JPEG and WebP formats, compression is lossy, meaning it removes subtle details to reduce size. A quality setting between 70% and 85% usually yields a 50%+ file size reduction without visible quality loss." },
      { q: "Does this tool support WebP conversion?", a: "Yes. You can select WebP as the export format. WebP offers superior compression ratios compared to traditional JPEGs and PNGs." },
      { q: "Is my data uploaded to TinyPNG-like servers?", a: "No. Unlike other compression utilities, all optimization steps occur locally on your machine. Your images are never transmitted over the internet." },
      { q: "How is PNG compression handled?", a: "Standard HTML5 canvases do not support lossy PNG compression natively. For PNGs, the quality slider adjusts the export compression level when supported, or you can convert PNGs to JPEGs or WebPs for major size savings." },
      { q: "What is the difference between lossy and lossless compression?", a: "Lossless compression reduces file size without losing any pixel data. Lossy compression removes less noticeable pixel data to achieve much smaller file sizes." },
      { q: "What is the best format for web images?", a: "WebP is generally the best format for web use, as it offers smaller file sizes than JPEG and PNG while supporting transparency." },
      { q: "How much file size savings can I expect?", a: "Most JPEGs can be compressed by 50% to 75% at a quality setting of 75% without visible loss in quality." },
      { q: "Can I compress images on my smartphone?", a: "Yes. This tool is fully responsive and runs on mobile browsers, allowing you to compress images directly on your phone." },
      { q: "Does the tool support batch compression?", a: "This version is optimized for single-image processing to ensure stability and performance in your browser." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">Lossless vs. Lossy Image Compression: Client-Side Optimization Explained</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          Heavy assets are a primary cause of slow web page load times. Because images often make up a large portion of a page's total weight, compressing images before uploading them is a core web optimization practice.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Compression Formats and Algorithms</h3>
        <p>
          Image compression methods differ depending on the file format:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>JPEG (Lossy):</strong> Discards less noticeable color details using discrete cosine transforms (DCT) to reduce file size.</li>
          <li><strong>PNG (Lossless):</strong> Preserves 100% pixel data using compression patterns. Converting PNGs to WebP is often necessary for significant size savings.</li>
          <li><strong>WebP (Modern):</strong> Uses predictive compression based on surrounding pixels, creating files that are 25% to 35% smaller than JPEGs at similar quality settings.</li>
        </ul>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Zero Server Uploads</h3>
        <p>
          ToolzTotal uses native HTML5 canvas encoders to convert and compress images locally in your device's memory. This means your private media stays completely safe on your device, offering a fast, zero-upload alternative to cloud compressors.
        </p>
        <p>
          By keeping all processing local, you avoid wait times associated with uploading files to remote servers. This local workflow is especially useful for processing large photos, where upload bandwidth is often the primary bottleneck. It also ensures that confidential graphics or personal photos remain secure, since no data ever traverses the network during compression.
        </p>
        <p>
          In addition, compressing photos reduces hosting costs, speeds up website load times, and improves SEO scores. By using our local compressor, you can optimize your image library on demand without file size caps or monthly usage limits, maintaining a private and efficient workflow.
        </p>
      </div>
    `
  },
  "image-tools/pdf-merger.astro": {
    faqs: [
      { q: "How does client-side PDF merging work?", a: "This tool loads your PDF documents as array buffers into the browser memory. It utilizes the bundled pdf-lib.js library to copy pages from each source document, combine them sequentially, and serialize the final merged PDF for instant local download." },
      { q: "Is my confidential document data uploaded to a server?", a: "No, never. Unlike other PDF sites that store your documents on their servers, ToolzTotal compiles everything completely client-side in your local browser sandbox. No bytes are sent across the network." },
      { q: "Can I reorder PDF files before merging?", a: "Yes. After uploading your PDFs, you can use the interactive reorder list to shift files up or down, ensuring that pages assemble in the correct sequence." },
      { q: "Is there a page limit for merging PDFs?", a: "Because the combining processes run entirely in your browser memory, page counts are limited only by your device's RAM capacity. It handles hundreds of pages comfortably." },
      { q: "Does this tool work with password-protected PDFs?", a: "No. To protect document privacy, we do not decrypt password-secured PDF documents. Please decrypt protected files before attempting to combine them." },
      { q: "Can I merge scanned PDFs?", a: "Yes. The tool merges any standard PDF file, including scanned documents and forms, while preserving the original page layouts." },
      { q: "Will merging PDFs affect the file quality?", a: "No. The tool copies pages from the source documents without re-compressing them, maintaining the original text and image quality." },
      { q: "Can I extract specific pages before merging?", a: "This tool is designed to merge entire PDF files. To extract specific pages, you can use a PDF printer or editor before merging." },
      { q: "Does this tool run on mobile devices?", a: "Yes. You can select and merge PDF files directly from your phone or tablet's file storage using a mobile web browser." },
      { q: "What library does this tool use to merge PDFs?", a: "The tool uses the popular open-source pdf-lib library to handle PDF loading, page copying, and file generation locally in the browser." }
    ],
    article: `
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-ink font-sans mb-6">Securing Document Operations: The Integrity of Client-Side PDF Merging</h2>
      <div class="text-body text-sm md:text-base font-sans leading-relaxed space-y-6">
        <p>
          The Portable Document Format (PDF) is the standard for sharing business agreements, financial statements, and legal contracts. Because these documents often contain sensitive information like tax IDs, bank account details, or personal signatures, uploading them to online PDF tools can pose a security risk. A client-side PDF merger offers a secure alternative.
        </p>

        <h3 class="text-lg font-bold text-ink font-sans mt-8 mb-3">Client-Side PDF Merging with pdf-lib</h3>
        <p>
          ToolzTotal uses the pdf-lib library running directly in your browser's memory to merge files:
        </p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-body font-sans">
          <li><strong>Buffer Parsing:</strong> The browser reads selected PDFs into raw binary ArrayBuffers.</li>
          <li><strong>Page Cloning:</strong> The engine creates a new PDF document and copies the pages from your uploaded files into the new document in your chosen order.</li>
          <li><strong>Local Saving:</strong> Saves the merged document as a local Blob, triggering a direct download without transmitting any data over the network.</li>
        </ul>
        <p>
          This client-side workflow ensures that your documents never leave your local environment. In contrast to online PDF services that process your files on remote servers, ToolzTotal performs all page collation, structural indexing, and file compilation inside your browser tab. This design eliminates data security risks and is ideal for legal teams, accounting professionals, and private individuals.
        </p>
        <p>
          Using client-side merging also yields substantial performance advantages. Since the files do not need to be uploaded to a remote server or downloaded after compilation, the merging process takes only a few seconds, even for large documents with hundreds of pages. You can reorder pages on demand, verify file sizes locally, and download your unified document instantly.
        </p>
      </div>
    `
  }
};
