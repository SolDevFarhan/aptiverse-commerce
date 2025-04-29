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
          <strong>1. Digital Products</strong>
          <br />
          Aptiverse offers digital courses delivered electronically. Once accessed or downloaded,
          the product is considered "used."
        </p>

        <p>
          <strong>2. No Refunds After Access</strong>
          <br />
          We do not offer refunds once access to a course has been provided. By purchasing, you
          agree to this policy.
        </p>

        <p>
          <strong>3. Exceptional Cases</strong>
          <br />
          If you believe you were incorrectly charged or faced technical access issues, contact
          support@aptiverse.shop within 3 days of purchase.
        </p>

        <p>
          <strong>4. Contact for Support</strong>
          <br />
          Email: support@aptiverse.shop
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
