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
        <h2>1. Products</h2>
        <ul className="my-5 list-disc pl-8">
          <li>Blockchain-related tools and HTML templates</li>
          <li>Provided as downloadable or GitHub-based access</li>
        </ul>
        <h2>2. Licensing</h2>
        <ul className="my-5 list-disc pl-8">
          <li>Personal/commercial use allowed unless stated otherwise</li>
          <li>Redistribution or resale without permission is prohibited</li>
        </ul>
        <h2>3. Access & Delivery</h2>
        <ul className="my-5 list-disc pl-8">
          <li>Delivered via GitHub access through email</li>
          <li>Typically within a few hours after purchase</li>
        </ul>
        <h2>4. Support</h2>
        <ul className="my-5 list-disc pl-8">
          <li>Free support for 1 year from purchase date</li>
        </ul>
        <h2>5. Payments</h2>
        <ul className="my-5 list-disc pl-8">
          <li>Prices in USD</li>
          <li>Payments processed via Lemon Squeezy or other available gateways</li>
        </ul>
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
