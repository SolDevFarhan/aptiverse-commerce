import type { Metadata } from 'next';

import Prose from 'components/prose';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Aptiverse.shop is committed to delivering high-quality online courses in Web Development, Design, and AI. We aim to empower learners worldwide through accessible and affordable digital education.',
  openGraph: {
    title: 'About',
    description:
      'Aptiverse.shop is committed to delivering high-quality online courses in Web Development, Design, and AI. We aim to empower learners worldwide through accessible and affordable digital education.',
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
            <strong>1. Our Mission</strong>
            <br />
            Aptiverse.shop is committed to delivering high-quality online courses in Web
            Development, Design, and AI. We aim to empower learners worldwide through accessible and
            affordable digital education.
          </p>

          <p>
            <strong>2. Our Location</strong>
            <br />
            Aptiverse is proudly based in Bangladesh, serving learners globally with premium digital
            products.
          </p>

          <p>
            <strong>3. Our Services</strong>
            <br />
            We specialize in providing downloadable online courses. Our platform is designed for a
            smooth and secure learning experience, using Paddle as our trusted payment processor.
          </p>

          <p>
            <strong>4. Contact Information</strong>
            <br />
            - General Inquiries: info@aptiverse.shop
            <br />- Support Requests: support@aptiverse.shop
          </p>

          <p>
            <strong>5. Legal Information</strong>
            <br />
            All purchases are subject to our Terms and Conditions, Privacy Policy, and Refund
            Policy. By using our services, you agree to abide by them.
          </p>

          <p>
            <strong>6. Stay Connected</strong>
            <br />
            For updates and announcements, visit our website at{' '}
            <a href="https://aptiverse.shop" target="_blank" rel="noopener noreferrer">
              aptiverse.shop
            </a>
            .
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
