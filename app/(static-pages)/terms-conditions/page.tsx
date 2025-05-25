import type { Metadata } from 'next';

const termsPageBody =
  'Review the terms governing your use of Aptiverse, purchases, intellectual property, and legal rights.';
const bodySummary = `${termsPageBody.slice(0, 100)}...`;

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: bodySummary,
  openGraph: {
    title: 'Terms & Conditions',
    description: bodySummary,
    type: 'article'
  }
};

export default async function Page() {
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">Terms & Conditions</h1>
      {/* <Prose className="mb-8" html={termsPageBody} /> */}
      <div className="mb-8">
        <h2>1. Acceptance</h2>
        <p>
          By using Aptiverse, you agree to these terms. If you disagree, please do not use the site.
        </p>
        <h2>2. Product Usage</h2>
        <p>
          All our products are digital and for personal or commercial use only — resale is
          prohibited.
        </p>
        <h2>3. Account Responsibility</h2>
        <ul>
          <li>Provide accurate information</li>
          <li>Keep login credentials secure</li>
          <li>Report any unauthorized use</li>
        </ul>
        <h2>4. Payments</h2>
        <p>
          All transactions are handled securely through third-party payment providers. Prices are in
          USD or BDT.
        </p>
        <h2>5. Intellectual Property</h2>
        <p>All content and templates are owned by Aptiverse and protected under copyright law.</p>
      </div>
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
