'use client';

import { useEffect, useRef, useState } from 'react';

export default function CopyEmail({ email, className, linkClassName, buttonClassName }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (insecure context / permissions) — fall back to mail client
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <span className={className}>
      <a href={`mailto:${email}`} className={linkClassName}>
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className={buttonClassName}
        aria-label={copied ? 'Email address copied' : 'Copy email address'}
      >
        {copied ? '[copied]' : '[copy]'}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </span>
  );
}
