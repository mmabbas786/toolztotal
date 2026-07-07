import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';

const fontPath = path.resolve('src/assets/fonts/Inter-SemiBold.ttf');
const fontBuffer = fs.readFileSync(fontPath);

export async function generateOgImageBuffer(title: string, category: string): Promise<Buffer> {
  const markup = html`
    <div style="display: flex; flex-direction: column; width: 1200px; height: 630px; padding: 80px; background-color: #09090b; color: #f4f4f5; justify-content: space-between; font-family: 'Inter';">
      <!-- Top Section -->
      <div style="display: flex; flex-direction: column;">
        <!-- Category Badge -->
        <div style="display: flex; font-size: 16px; font-weight: 600; text-transform: uppercase; color: #a1a1aa; border: 1px solid #27272a; border-radius: 9999px; padding: 6px 16px; align-self: flex-start; margin-bottom: 40px; background-color: #18181b;">
          ${category.replace('-', ' ')}
        </div>
        <!-- Title -->
        <div style="display: flex; font-size: 56px; font-weight: 700; color: #ffffff; line-height: 1.2; max-width: 1000px; margin-top: 10px;">
          ${title}
        </div>
      </div>
      
      <!-- Bottom Section -->
      <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #27272a; padding-top: 40px;">
        <!-- Logo -->
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="display: flex; width: 24px; height: 24px; border-radius: 4px; background-color: #3b82f6;"></div>
          <span style="font-size: 28px; font-weight: 700; color: #ffffff; font-family: 'Inter';">
            Toolz<span style="color: #71717a;">Total</span>
          </span>
        </div>
        <!-- Tagline / URL -->
        <div style="display: flex; font-size: 18px; color: #a1a1aa; font-family: 'Inter';">
          toolztotal.com • Free & Privacy-First
        </div>
      </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: fontBuffer.buffer.slice(fontBuffer.byteOffset, fontBuffer.byteOffset + fontBuffer.byteLength),
        weight: 600,
        style: 'normal',
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  });

  const pngData = resvg.render();
  return pngData.asPng();
}
