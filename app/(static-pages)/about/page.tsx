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
            Welcome to Aptiverse — your Web3 development partner and digital product studio. We're
            based in Bangladesh and focused on building innovative blockchain-related solutions such
            as NFT minting platforms, token bridges (Hyperlane, LayerZero), and infrastructure
            tools. We also offer sleek HTML templates and UI kits crafted for Web3 startups. Our
            mission is to empower global developers and creators with production-ready tools and
            exceptional support.
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
