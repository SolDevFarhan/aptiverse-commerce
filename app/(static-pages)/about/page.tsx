import type { Metadata } from 'next';

import Prose from 'components/prose';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Aptiverse is a digital marketplace offering high-quality HTML, WordPress, CMS, and eCommerce templates for developers, marketers, and bloggers. All themes are downloadable instantly, with a clean and professional design focus.',
  openGraph: {
    title: 'About',
    description:
      'Aptiverse is a digital marketplace offering high-quality HTML, WordPress, CMS, and eCommerce templates for developers, marketers, and bloggers. All themes are downloadable instantly, with a clean and professional design focus.',
    type: 'article'
  }
};

export default async function Page() {
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">About</h1>
      <Prose className="mb-8">
        <div>
          <p>
            Welcome to <strong>Aptiverse.shop</strong> – your go-to destination for premium digital
            templates. We’re based in Bangladesh and specialize in providing high-quality:
          </p>
          <ul>
            <li>HTML & WordPress Themes</li>
            <li>eCommerce & Marketing Templates</li>
            <li>CMS & Blogging Templates</li>
          </ul>
          <p>
            All products are pre-designed and downloadable instantly — no live classes or seminars.
            Just ready-to-use templates to help you launch fast.
          </p>
          <p>
            <strong>Contact:</strong>
            <br />
            📍 Bangladesh
            <br />
            ✉️ info@aptiverse.shop
            <br />
            📧 support@aptiverse.shop
          </p>
        </div>
      </Prose>
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date('2025-04-28T14:30:00.000Z'))}.`}
      </p>
    </>
  );
}
