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
        <p>
          <strong>1. General</strong>
          <br />
          By using Aptiverse, you agree to these Terms. If you do not agree, please discontinue use.
        </p>

        <p>
          <strong>2. Intellectual Property</strong>
          <br />
          All course materials and site content are owned by Aptiverse. You may not reproduce or
          distribute without permission.
        </p>

        <p>
          <strong>3. Purchases and Payment</strong>
          <br />
          All payments are processed through Paddle. Prices are in USD or Bangladeshi Taka (BDT);
          currency conversion fees may apply.
        </p>

        <p>
          <strong>4. Delivery</strong>
          <br />
          Courses are delivered electronically after successful payment via email or site account
          access.
        </p>

        <p>
          <strong>5. Refund Policy</strong>
          <br />
          No refunds are provided after a course has been accessed or downloaded.
        </p>

        <p>
          <strong>6. Disclaimer</strong>
          <br />
          Courses are provided "as is" without warranties of any kind.
        </p>

        <p>
          <strong>7. Limitation of Liability</strong>
          <br />
          Aptiverse is not liable for damages resulting from the use of our products.
        </p>

        <p>
          <strong>8. Governing Law</strong>
          <br />
          These Terms are governed by the laws of Bangladesh.
        </p>

        <p>
          <strong>9. Contact Us</strong>
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
