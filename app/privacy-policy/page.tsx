import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Render Size Checker",
  description:
    "Privacy policy for the Render Size Checker Chrome extension — a technical SEO tool that detects pages exceeding Google's 2 MB rendering limit.",
};

const LAST_UPDATED = "April 23, 2026";
const CONTACT_EMAIL = "sebastiancastao379@gmail.com";
const EXT_NAME = "Render Size Checker";

export default function PrivacyPolicy() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">
          Chrome Extension
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          Last updated: {LAST_UPDATED}
        </p>
      </header>

      <div className="space-y-10 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        <Section title="1. About This Extension">
          <p>
            <strong>{EXT_NAME}</strong> is a free, open-source Chrome browser extension built for
            technical SEO professionals and web developers. It analyzes the rendered HTML size of the
            page currently open in your browser and alerts you when it exceeds{" "}
            <strong>2 MB (2,097,152 bytes)</strong> — the threshold at which Google&rsquo;s crawler
            (Googlebot) may truncate or ignore content during indexing.
          </p>
          <p>
            Because all analysis happens directly inside your browser, <strong>{EXT_NAME}</strong>{" "}
            does <strong>not</strong> collect, store, transmit, or share any of your personal data or
            browsing activity. This policy describes the limited information the extension interacts
            with and explains your rights.
          </p>
        </Section>

        <Section title="2. What Data the Extension Accesses">
          <p>
            To measure render size, the extension reads the following data <em>locally</em> on your
            device — nothing is sent to any external server:
          </p>
          <ul>
            <li>
              <strong>Rendered DOM content</strong> — the extension reads the{" "}
              <code>document.documentElement.outerHTML</code> of the active tab to calculate its byte
              size after the browser has finished rendering the page.
            </li>
            <li>
              <strong>Page URL</strong> — the current tab&rsquo;s URL is read solely to display it
              alongside the size result in the extension popup. It is never stored or transmitted.
            </li>
          </ul>
          <p>
            The extension does <strong>not</strong> access:
          </p>
          <ul>
            <li>Cookies, passwords, or form data.</li>
            <li>Browser history or bookmarks.</li>
            <li>Any data from other tabs or windows.</li>
            <li>Any information about you personally.</li>
          </ul>
        </Section>

        <Section title="3. How the Extension Works">
          <p>
            When you click the extension icon or visit a page (depending on your trigger setting),
            the extension:
          </p>
          <ol>
            <li>Injects a content script into the <strong>active tab only</strong>.</li>
            <li>
              Measures the byte length of the fully rendered HTML using the browser&rsquo;s built-in
              APIs (<code>TextEncoder</code> or <code>Blob</code>).
            </li>
            <li>
              Compares the result against the 2 MB limit and displays a pass/fail badge in the
              toolbar and a detailed breakdown in the popup.
            </li>
            <li>
              Discards all data as soon as the popup is closed or the tab navigates away — nothing
              is persisted.
            </li>
          </ol>
        </Section>

        <Section title="4. Data Storage">
          <p>
            <strong>{EXT_NAME}</strong> stores only the following minimal data locally in your browser
            via <code>chrome.storage.local</code>:
          </p>
          <ul>
            <li>
              <strong>User preferences</strong> — settings you configure (e.g., custom size
              thresholds, notification preferences). These never leave your device.
            </li>
          </ul>
          <p>
            No measurement results, URLs, or page content are ever persisted to local storage or any
            remote database.
          </p>
        </Section>

        <Section title="5. Data Sharing & Third Parties">
          <p>
            We do <strong>not</strong> sell, rent, or share any data with third parties — because we
            do not collect any data in the first place. The extension has no analytics SDK, no
            crash-reporting service, and no advertising network integrated into it.
          </p>
          <p>
            The extension does not make any outbound network requests on your behalf. You can verify
            this by inspecting the{" "}
            <code>content_security_policy</code> and <code>permissions</code> fields in the
            extension&rsquo;s <code>manifest.json</code>.
          </p>
        </Section>

        <Section title="6. Permissions Explained">
          <p>
            Chrome extensions must declare permissions upfront. Here is why{" "}
            <strong>{EXT_NAME}</strong> requests each permission it uses:
          </p>
          <table>
            <thead>
              <tr>
                <th>Permission</th>
                <th>Why it is needed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>activeTab</code></td>
                <td>Read the rendered HTML of the page you are currently viewing, on demand.</td>
              </tr>
              <tr>
                <td><code>scripting</code></td>
                <td>Inject the measurement content script into the active tab.</td>
              </tr>
              <tr>
                <td><code>storage</code></td>
                <td>Save your personal settings (thresholds, display preferences) locally.</td>
              </tr>
            </tbody>
          </table>
          <p>
            No <code>tabs</code>, <code>history</code>, <code>cookies</code>, or broad host
            permissions are requested.
          </p>
        </Section>

        <Section title="7. Children's Privacy">
          <p>
            This extension is a developer tool not directed at or designed for children under 13. We
            do not knowingly collect any information from children.
          </p>
        </Section>

        <Section title="8. Security">
          <p>
            Because no personal data ever leaves your browser, your exposure to data-breach risk from
            this extension is minimal. The extension&rsquo;s source code is available for public
            review. We follow Google&rsquo;s Manifest V3 security guidelines, which restrict
            background script capabilities and enforce a strict content security policy.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            If we make material changes to this policy (for example, if a future version of the
            extension adds a remote feature), we will update the &ldquo;Last updated&rdquo; date and
            publish the new version alongside the extension update. Continued use of the extension
            after an update constitutes acceptance of the revised policy.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Questions or concerns about this privacy policy? Reach out at:
          </p>
          <address className="not-italic mt-2 space-y-1">
            <p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-blue-600 dark:text-blue-400 underline underline-offset-2"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </address>
        </Section>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <div className="space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_code]:bg-zinc-100 [&_code]:dark:bg-zinc-800 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_table]:w-full [&_table]:border-collapse [&_th]:text-left [&_th]:py-2 [&_th]:px-3 [&_th]:border [&_th]:border-zinc-200 [&_th]:dark:border-zinc-700 [&_th]:bg-zinc-50 [&_th]:dark:bg-zinc-800 [&_td]:py-2 [&_td]:px-3 [&_td]:border [&_td]:border-zinc-200 [&_td]:dark:border-zinc-700 [&_td]:align-top">
        {children}
      </div>
    </section>
  );
}
