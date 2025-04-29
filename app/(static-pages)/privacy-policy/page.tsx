import type { Metadata } from 'next';

const termsPageBody =
  'Learn how Aptiverse collects, uses, and protects your personal information when you use our services.';
const bodySummary = `${termsPageBody.slice(0, 100)}...`;

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: bodySummary,
  openGraph: {
    title: 'Privacy Policy',
    description: bodySummary,
    type: 'article'
  }
};

export default async function Page() {
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">Privacy Policy</h1>
      {/* <Prose className="mb-8" html={termsPageBody} /> */}
      <div className="mb-8">
        <p>
          <strong>1. Introduction</strong>
          <br />
          We operates the website aptiverse.shop and is committed to protecting your privacy.
        </p>

        <p>
          <strong>2. Information We Collect</strong>
          <br />
          - Personal Information: name, email address, billing information.
          <br />- Non-Personal Information: browser type, IP address, device info via cookies.
        </p>

        <p>
          <strong>3. How We Use Your Information</strong>
          <br />
          - To process payments and deliver courses.
          <br />
          - To send order updates and customer service messages.
          <br />
          - To improve our website and services.
          <br />- To comply with legal obligations.
        </p>

        <p>
          <strong>4. Payment Processing</strong>
          <br />
          Payments are processed securely through Paddle. We do not store your payment details.
        </p>

        <p>
          <strong>5. Data Protection</strong>
          <br />
          We implement security measures but cannot guarantee 100% security.
        </p>

        <p>
          <strong>6. Your Rights</strong>
          <br />
          Contact us at support@aptiverse.shop to access, correct, or delete your data.
        </p>

        <p>
          <strong>7. Changes to this Policy</strong>
          <br />
          Updates will be posted on this page.
        </p>

        <p>
          <strong>8. Contact Us</strong>
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
