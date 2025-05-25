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
          At Aptiverse, we respect your privacy and are committed to protecting your data. This
          Privacy Policy outlines how we handle your information.
        </p>
        <h2>1. Information We Collect</h2>
        <ul>
          <li>Your name, email, and billing information</li>
          <li>Technical data like IP, browser type, and device</li>
        </ul>
        <h2>2. Use of Information</h2>
        <p>We use your data to process orders, provide support, and improve our site.</p>
        <h2>3. Sharing</h2>
        <p>
          We never sell your information. Payments are processed via trusted third-party gateways.
        </p>
        <h2>4. Data Security</h2>
        <p>We use secure protocols to keep your data safe.</p>
        <h2>5. Contact</h2>
        <p>Email us at support@aptiverse.shop for any privacy concerns.</p>
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
