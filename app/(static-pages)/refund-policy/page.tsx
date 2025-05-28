import type { Metadata } from 'next';

const termsPageBody =
  'Understand Aptiverse’s policy on refunds for digital products accessed or downloaded after purchase.';
const bodySummary = `${termsPageBody.slice(0, 100)}...`;

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: bodySummary,
  openGraph: {
    title: 'Refund Policy',
    description: bodySummary,
    type: 'article'
  }
};

export default async function Page() {
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">Refund Policy</h1>
      {/* <Prose className="mb-8" html={termsPageBody} /> */}
      <div className="mb-8">
        <p>
          Due to the nature of digital goods, all sales are generally final. However, we offer
          refunds under specific conditions:
        </p>
        <h2>Eligible Refund Cases</h2>
        <ul className="my-5 list-disc pl-8">
          <li>The product is corrupted or broken beyond use</li>
          <li>You have not yet downloaded the item and request a refund within 24 hours</li>
        </ul>
        <p>
          To request a refund, please contact us at <strong>support@aptiverse.shop</strong> with
          your order ID.
        </p>
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
