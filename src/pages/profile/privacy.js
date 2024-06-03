import styles from "./infos.module.css"
import { BackIcon } from '@/../public/icons/BackIcon';
import { useRouter } from "next/router";

export default () => {
    const router = useRouter();
    return (
        <div className={styles.header}>
            <button
                className={styles.backButton}
                onClick={() => router.back()}
            >
                <BackIcon />
            </button>
            <h1>Privacy Policy</h1>
            <p className={styles.paragrafo}>
                1. Introduction
                Welcome to SheRoams. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and protect your personal information.
<br />
                2. Information We Collect
                We collect various types of information to provide and improve our services to you. This includes:
                <br />
                2.1. Personal Information
                Registration Data: Name, Email, Password, and Travel Interests.
                Profile Data: Name, Email, Profile Picture, Travel Interests, and Travel History.<br />
                2.2. Usage Data
                Interaction Data: Information on how you use our application, including posts, comments, and reviews.
                Location Data: Real-time location data when you use our location-sharing feature.<br />
                3. How We Use Your Information
                We use the information we collect for various purposes:
                <br />
                3.1. To Provide and Maintain Our Service
                To create and manage your account.
                To authenticate your identity.
                To provide personalized travel recommendations and checklists.<br />
                3.2. To Improve Our Service
                To understand how users interact with our application.
                To develop new features and functionalities.
                To improve user experience and interface design.<br />
                3.3. To Ensure Safety
                To enable and manage location-sharing features.
                To issue safety alerts and recommendations.<br />
                3.4. Communication
                To send you updates and notifications about our services.
                To respond to your inquiries and support requests.<br />
                4. Sharing Your Information
                We do not share your personal information with third parties except in the following circumstances:
                <br />
                4.1. With Your Consent
                When you explicitly provide consent to share your information with selected third parties.<br />
                4.2. For Legal Reasons
                If required by law, regulation, legal process, or governmental request.<br />
                4.3. To Protect Rights and Safety
                To protect the rights, property, or safety of SheRoams, our users, or others.<br />
                5. Data Security
                We implement a variety of security measures to ensure the safety of your personal information:<br />

                Encryption: All personal data is encrypted both in transit and at rest.
                Access Controls: Access to personal information is restricted to authorized personnel only.
                Regular Audits: We conduct regular security audits to identify and address vulnerabilities.<br />
                6. Your Rights
                You have the following rights regarding your personal information:
                <br />
                6.1. Access
                You can request access to the personal information we hold about you.<br />
                6.2. Correction
                You can request correction of inaccurate or incomplete information.<br />
                6.3. Deletion
                You can request deletion of your personal information.<br />
                6.4. Objection
                You can object to the processing of your personal information under certain circumstances.<br />
                7. Data Retention
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When your information is no longer needed, we will securely delete or anonymize it.<br />

                8. Changes to This Privacy Policy
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our application. You are advised to review this Privacy Policy periodically for any changes.
                <br />
                9. Contact Us
                If you have any questions or concerns about this Privacy Policy, please contact us through the support section of our application.
            </p>
        </div>
    )
}


