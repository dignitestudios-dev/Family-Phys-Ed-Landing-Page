// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function page() {
  return (
    <div className="w-full bg-[#1C1C1E] ">
      <div className="text-white text-4xl text-center  font-bold p-12">Privacy Policy for <span className="text-[#FDFC22]">Family Phys. Ed.</span></div>
      <div className="text-white leading-relaxed   px-12 pb-12 space-y-5">
      <p className="mb-6 px-8">
  Effective Date: <span className="font-bold text-[#FDFC22]">07/18/2025</span>
</p> 
<p className="mb-6">
  Family Phys. Ed. ("we," "our," or "us") is committed to protecting the privacy and security of our
  users' personal information. This Privacy Policy explains how we collect, use, store, and protect
  your information in compliance with applicable laws, including the California Consumer Privacy
  Act (CCPA) and the Children's Online Privacy Protection Act (COPPA).
</p>

<h2 className="text-3xl font-bold mt-10 mb-2 text-[#FDFC22]">1. Information We Collect</h2>
<p className="mb-4">We collect the following types of information to provide and enhance our services:</p>

<p className="font-semibold mb-2">Personal Identifiable Information (PII):</p>
<ul className="list-disc list-inside mb-6 space-y-1">
  <li><strong>For Customers:</strong> Name or username, email address, phone number, mailing address, profile picture, and activity level.</li>
  <li><strong>For Coaches:</strong> Name, email address, phone number, mailing address, profile picture, certifications, and experience-related data that you upload.</li>
</ul>
<h3 className="text-xl font-bold mt-10 mb-2">Usage Data</h3>
<ul className="list-disc list-inside mb-6 space-y-1">
  <li>
    While we do not directly collect data about your device (such as IP address or browser
    information), certain data may be collected by the app stores (Apple App Store, Google
    Play Store) as per their respective privacy policies.
  </li>
  <li>
    We store your booking history and upcoming sessions, which can be viewed through
    your profile.
  </li>
  <li>
    We utilize general analytics to track customer numbers and coach availability. This data
    helps us ensure that the appropriate number of coaches are hired in each area.
  </li>
</ul>
<h3 className="text-xl font-bold mt-10 mb-2">Transaction Data</h3>
<ul className="list-disc list-inside mb-6 space-y-1">
  <li>
    We collect payment information (e.g., credit card details) and other transaction-related
    data when making or receiving payments within the app.
  </li>
  <li>
    Stripe handles payment processing securely through its API. Coaches and users enter
    their payment information directly into the app, and they have the ability to update,
    add, or delete their card information at any time via the app's account settings.
  </li>
</ul>

<h3 className="text-xl font-bold mt-10 mb-2">Communication Data</h3>
<ul className="list-disc list-inside mb-6 space-y-1">
  <li>
    We store chat logs between customers and coaches to facilitate communication and
    service delivery.
  </li>
  <li>
    We also maintain reviews left by customers for coaches.
  </li>
  <li>
    Customers can contact us directly via email through the app for any issues or inquiries.
  </li>
</ul>
<h3 className="text-xl font-bold mt-10 mb-2">Location Data</h3>
<ul className="list-disc list-inside mb-6 space-y-1">
  <li>
    We use location services to show coaches within a customer’s set radius and enable
    coaches to set session locations.
  </li>
  <li>
    Customers can create private session requests that are sent as bids to coaches within
    their radius, or view a list of public sessions created by coaches that they can sign up for.
  </li>
  <li>
    Coaches can create public sessions or respond to private session requests and see the
    location of the session for logistical purposes.
  </li>
  <li>
    <strong>Location Visibility:</strong> Only the location selected for the session will be visible to both the
    customer and the coach. Addresses are not publicly visible, and location data is only
    shared as necessary to facilitate the booking and scheduling of sessions.
  </li>
</ul>

<h2 className="text-3xl font-bold mt-10 mb-2 text-[#FDFC22]">2. How We Use Your Information</h2>
<p className="mb-4">We use the information we collect for the following purposes:</p>
<ul className="list-disc list-inside mb-6 space-y-1">
  <li>
    <strong>To provide and manage services:</strong>
    <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
      <li>
        Facilitate the creation of private sessions by matching customers with coaches
        within their location radius.
      </li>
      <li>
        Allow coaches to set and manage public sessions and respond to private
        requests.
      </li>
      <li>
        Process payments and facilitate any related financial transactions securely via
        Stripe. Coaches and users can add, update, or delete their payment information
        at any time via the app’s account settings.
      </li>
    </ul>
  </li>
</ul>
<ul className="list-disc list-inside mb-6 space-y-1">
  <li>
    <strong>For marketing and promotional communications:</strong>
    <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
      <li>
        With your consent, we may send marketing and promotional emails related to
        our services, including new features, offers, or updates.
      </li>
      <li>
        You may opt-out of these communications at any time via the settings in the app
        or through the unsubscribe link in emails.
      </li>
    </ul>
  </li>
  <li>
    <strong>For operational and legal communications:</strong>
    <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
      <li>
        Send alerts related to changes or updates in the Terms of Service, Privacy Policy,
        or other important operational matters.
      </li>
      <li>
        Communicate with customers and coaches about session details, cancellations,
        or updates.
      </li>
    </ul>
  </li>
</ul>

<h2 className="text-3xl font-bold mt-10 mb-2 text-[#FDFC22]">3. Legal Basis for Processing (for Users in the U.S.)</h2>
<p className="mb-4">
  We process your personal data based on the following legal bases:
</p>

<h3 className="text-2xl font-semibold mb-2">1. Consent</h3>
<p className="mb-6">
  We process personal data for marketing communications, such as promotional emails, only
  with your explicit consent. You can opt-out of receiving these communications at any time by
  using the unsubscribe button included in all promotional emails or by adjusting your
  preferences in the app.
</p>
<h3 className="text-2xl font-semibold mb-2">2. Performance of a Contract</h3>
<p className="mb-4">
  We process personal data to fulfill our contractual obligations with you, including:
</p>
<ul className="list-disc list-inside mb-6 space-y-1">
  <li>Facilitating the creation of private sessions and responding to session requests.</li>
  <li>Processing payments for bookings and coach services through Stripe.</li>
  <li>Managing communication between customers and coaches.</li>
</ul>

<h3 className="text-2xl font-semibold mb-2">3. Compliance with Legal Obligations</h3>
<p className="mb-6">
  We process your personal data as necessary to comply with our legal obligations, such as
  keeping transaction records for accounting and tax purposes and handling refunds or disputes.
</p>

<h3 className="text-2xl font-semibold mb-2">4. Legitimate Business Interests</h3>
<p className="mb-4">We process personal data for our legitimate business interests, such as:</p>
<ul className="list-disc list-inside mb-6 space-y-1">
  <li>
    Improving the app and service by using general analytics to track customer numbers and
    coach availability.
  </li>
  <li>
    Ensuring we meet user demand and maintain operational efficiency, including hiring
    coaches in different areas based on usage patterns.
  </li>
  <li>
    Storing communication logs to assist with customer support inquiries.
  </li>
</ul>
<h2 className="text-3xl text-[#FDFC22] font-semibold mt-10 mb-4">4. Data Sharing and Disclosure</h2>
<p className="mb-4">
  We do not sell, rent, or lease your personal data. We may share your information with trusted
  third-party service providers solely for operational purposes, under strict confidentiality
  agreements. These third parties are:
</p>

<h3 className="text-xl font-semibold mb-2">1. Payment Processing (Stripe)</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    We use Stripe to securely process payments within the app. Payment information, such as
    credit card details, is entered directly into the app by users and coaches, and Stripe handles the transaction processing.
  </li>
  <li>
    Stripe has access to certain personal data for payment purposes but is bound by their own
    privacy policy and terms.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">2. App Development and Maintenance (Dignite Studios)</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    To ensure the continued functionality, security, and performance of the Family Phys Ed
    application, we have entered into a maintenance agreement with Dignite Studios, a
    third-party service provider.
  </li>
  <li>
    As part of this agreement, Dignite Studios may access certain data within the app solely
    for the purpose of performing maintenance, troubleshooting, updates, and support services.
  </li>
  <li>
    This access is granted under strict confidentiality and data protection obligations. Dignite
    Studios is not permitted to use or disclose any data for purposes other than those outlined
    in the scope of their maintenance responsibilities.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">3. Legal Obligations</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    We may disclose personal data if required to do so by law, in response to a valid legal
    request (such as a subpoena or court order), or to comply with applicable legal processes.
  </li>
  <li>
    We may also disclose data to law enforcement, regulatory authorities, or other third
    parties in situations involving illegal activity, fraud prevention, or as otherwise required by law.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">4. No Other Sharing</h3>
<p className="mb-6">
  Apart from the aforementioned cases, we do not share your personal data with third parties for
  any other purpose, including marketing or advertising.
</p>
<h2 className="text-3xl text-[#FDFC22] font-semibold mt-10 mb-4">5. Data Retention</h2>

<p className="mb-4">
  We will retain your personal data for as long as necessary to fulfill the purposes outlined in this
  Privacy Policy, including:
</p>

<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    <strong>To provide and improve our services:</strong> We retain data to facilitate ongoing access to the
    app, session history, and payment information.
  </li>
  <li>
    <strong>To comply with legal obligations:</strong> We may need to retain certain data to comply with
    financial, legal, and regulatory requirements, such as tax obligations or dispute
    resolution.
  </li>
  <li>
    <strong>For business purposes:</strong> We may retain data for legitimate business interests, such as
    ensuring smooth operational functionality, improving services, and maintaining accurate
    records.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">Data Deletion:</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    You have the right to request the deletion of your personal data. Upon request, we will
    delete your data, unless we are required to retain it for legal or business purposes.
  </li>
  <li>
    Personal data may be retained in backup storage for a limited period to ensure recovery
    in case of data loss, but it will not be used for any other purposes.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">Ongoing Updates:</h3>
<p className="mb-6">
  We will periodically review our data retention practices and may update this section as
  necessary to comply with applicable laws or operational needs.
</p>
<h2 className="text-3xl text-[#FDFC22] font-semibold mt-10 mb-4">6. Security Measures</h2>

<p className="mb-4">
  We are committed to protecting your personal data and employ a range of security measures to ensure it remains secure. These measures include:
</p>

<h3 className="text-xl font-semibold mb-2">1. Data Encryption</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    We use encryption protocols to protect your personal data during transmission. This ensures that any sensitive data, such as payment details, is securely transmitted to Stripe for payment processing.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">2. Access Controls</h3>
<ul className="list-disc list-inside mb-6 space-y-1">
  <li>
    We implement strict access controls to ensure that only authorized personnel and contractors (e.g., Dignite Studios) have access to your data. Access is granted on a need-to-know basis for operational and maintenance purposes.
  </li>
  <li>
    User data is stored securely, and we maintain strict controls to prevent unauthorized access, alteration, or disclosure.
  </li>
</ul>
<h3 className="text-xl font-semibold mb-2">3. Third-Party Security Compliance</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    Stripe, as a third-party service provider, complies with industry-standard security practices for payment processing, including PCI-DSS (Payment Card Industry Data Security Standard).
  </li>
  <li>
    Dignite Studios, our contracted maintenance team, adheres to confidentiality and data protection obligations to ensure that your data is handled securely during the app's development and maintenance.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">4. Regular Security Audits and Assessments</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    We perform regular security audits and assessments to identify potential vulnerabilities and improve our data protection practices.
  </li>
  <li>
    Any identified vulnerabilities are addressed promptly to ensure the ongoing security of our services.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">5. Employee Training</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    All employees and contractors are provided with security training to ensure they understand the importance of safeguarding user data and follow best practices for data protection.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">6. Incident Response Plan</h3>
<ul className="list-disc list-inside mb-6 space-y-1">
  <li>
    In the event of a data breach or security incident, we have an incident response plan in place to mitigate any potential harm, notify affected users, and comply with legal obligations for breach notifications.
  </li>
</ul>
<h2 className="text-3xl text-[#FDFC22] font-semibold mt-10 mb-4">7. Your Rights and Choices</h2>

<p className="mb-4">
  As a user, you have certain rights and choices regarding your personal data. These rights include:
</p>

<h3 className="text-xl font-semibold mb-2">1. Right to Access</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    You have the right to request access to the personal data we hold about you. This allows you to review, correct, or update your information.
  </li>
  <li>
    To request access, you can contact us at the contact details provided at the end of this Privacy Policy.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">2. Right to Correct or Update</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    If any of your personal data is inaccurate or incomplete, you have the right to request that it be corrected or updated.
  </li>
  <li>
    You can update most of your information directly through your account settings in the app.
  </li>
</ul>
<h3 className="text-xl font-semibold mb-2">3. Right to Delete</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    You have the right to request the deletion of your personal data, subject to certain exceptions (e.g., if we need to retain the data for legal or business purposes).
  </li>
  <li>
    If you would like to delete your account or personal information, you can do so through your account settings or by contacting us.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">4. Right to Opt-Out of Marketing Communications</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    You can opt out of receiving marketing and promotional emails at any time. You can do this by clicking the unsubscribe link included in every marketing email or by adjusting your email preferences in the app settings.
  </li>
  <li>
    Even if you opt out of marketing communications, we may still send you important operational messages related to the services we provide, such as updates to the Terms of Service or Privacy Policy.
  </li>
</ul>
<h3 className="text-xl font-semibold mb-2">5. Right to Data Portability</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    You have the right to request a copy of your personal data in a structured, commonly
    used, and machine-readable format, which you can transfer to another service provider
    if you choose.
  </li>
  <li>
    To exercise this right, please contact us as specified below.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">6. Right to Object to Processing</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    In certain circumstances, you may have the right to object to the processing of your
    personal data, such as when the processing is based on our legitimate business interests.
  </li>
  <li>
    You can contact us to exercise this right and discuss your options.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">7. Right to Restrict Processing</h3>
<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    You can request that we restrict the processing of your personal data in specific
    circumstances, such as when you contest the accuracy of the data or object to our processing.
  </li>
</ul>

<h3 className="text-xl font-semibold mb-2">8. Right to Lodge a Complaint</h3>
<ul className="list-disc list-inside mb-6 space-y-1">
  <li>
    If you believe your data rights have been violated, you have the right to lodge a
    complaint with a supervisory authority in your jurisdiction.
  </li>
  <li>
    In the United States, you may contact the Federal Trade Commission (FTC) or your local
    state authorities.
  </li>
</ul>
<h2 className="text-3xl text-[#FDFC22] font-semibold mt-10 mb-4">8. Children's Privacy</h2>

<p className="mb-4">
  Our services are not intended for individuals under the age of 13, and we do not knowingly
  collect personal information from children under 13, in accordance with the Children’s Online
  Privacy Protection Act (COPPA). However, children under 13 are welcome to participate in
  physical education sessions, as long as a parent or guardian provides the necessary information
  for their participation.
</p>

<p className="mb-2 font-semibold">To clarify:</p>

<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    <strong>Parents/Guardians:</strong> As the customer, you are responsible for providing personal
    information on behalf of the children participating in sessions, such as the child's age,
    and any relevant health or activity information that you feel is necessary to share with a
    coach for any specific reason or request. This data is used solely to facilitate the sessions
    and ensure the safety and well-being of the child.
  </li>
  <li>
    <strong>Coaches' Interaction with Children:</strong> Coaches, who are contract employees of Family
    Phys. Ed., may interact with children during sessions. However, we ensure that all
    coaches comply with our child protection policies and are trained in maintaining the
    privacy and safety of children during interactions.
  </li>
  <li>
    <strong>Data Collection and Usage:</strong> Any personal information related to children is collected and
    used exclusively for the purpose of providing services through Family Phys. Ed., such as
    organizing physical education sessions and ensuring appropriate coaching for each
    child’s activity level.
  </li>
  <li>
    <strong>No Direct Data Collection from Children:</strong> Children under 13 should not directly input
    any personal information into the app. All data must be provided by the parent or
    guardian.
  </li>
</ul>
<p className="mb-4">
  If we learn that we have inadvertently collected personal data from a child under the age of 13,
  we will take steps to delete that information as soon as possible.
</p>

<p className="mb-6">
  If you are a parent or guardian and believe that your child has provided us with personal
  information, please contact us so we can take appropriate action.
</p>
<h2 className="text-3xl text-[#FDFC22] font-semibold mt-10 mb-4">9. Changes to This Policy</h2>

<p className="mb-4">
  We may update this Privacy Policy from time to time to reflect changes in our practices,
  services, or legal requirements. If we make material changes to the way we collect, use, or share
  your personal data, we will provide notice to users via the app or through email.
</p>

<ul className="list-disc list-inside mb-4 space-y-1">
  <li>
    <strong>Date of Last Update:</strong> The date of the most recent update will be indicated at the top of
    this Privacy Policy.
  </li>
  <li>
    <strong>Notification of Changes:</strong> If we make any significant changes to this policy, we will notify
    users through in-app notifications or email, where applicable. We encourage you to
    periodically review this Privacy Policy to stay informed about how we are protecting your
    information.
  </li>
  <li>
    <strong>Continued Use:</strong> By continuing to use the app after changes are made, you are agreeing
    to the updated Privacy Policy.
  </li>
</ul>
<h2 className="text-3xl text-[#FDFC22] font-semibold mt-10 mb-4">10. Contact Information</h2>

<p className="mb-4">
  If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle
  your personal data, please feel free to contact us:
</p>

<ul className="list-disc list-inside mb-6 space-y-1">
  <li><strong>Email:</strong> <a href="mailto:info@familyphysed.com" className="text-blue-600 underline">info@familyphysed.com</a></li>
  <li><strong>Phone:</strong> 215-669-7955</li>
</ul>

    </div>
    </div>
  );
}
