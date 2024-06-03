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
        <h1>Terms and Conditions</h1>
        <p className={styles.paragrafo}>
            1. Introduction
            Welcome to SheRoams, an application dedicated to ensuring the safety of women traveling around the world. By using our application, you agree to the following Terms and Conditions. Please read them carefully.
            <br/>
            2. Definitions
            User: Any person using the SheRoams application.
            We/SheRoams: The development and management team of the SheRoams application.
            <br/>
            3. Registration and Login<br/>
            3.1. Registration
            To use our services, users must register by providing information such as Name, Email, Password, and Travel Interests. If an account already exists with the provided email, the message "User already exists" will be displayed.
            <br/>
            3.2. Login
            Users can log in using their email and password. If a user already exists with the provided email, the message "User already exists with this email" will be displayed.
            <br/>
            3.3. Logout
            Users can terminate their session at any time using the logout functionality.
            <br/>
            4. Profile
            4.1. Viewing and Editing the Profile
            Users can view and edit their personal information, including Name, Email, Profile Picture, and Travel Interests. The travel history, with visited countries and virtual stamps, will also be available.
            <br/>
            4.2. Updating the Profile
            Users can update their profile information at any time.
            <br/>
            5. Community and Interaction<br/>
            5.1. Forums and Posts
            Users can participate in discussion forums, create posts, and comment on existing posts. All interactions must follow standards of respect and courtesy.
            <br/>
            5.2. Reviews and Alerts
            Users can share reviews of destinations, accommodations, and restaurants, as well as issue safety alerts.
            <br/>
            6. Countries and Travel Details<br/>
            6.1. Country Information
            Users can access detailed information about various countries, including tips for solo female travelers and personalized checklists.
            <br/>
            6.2. Virtual Passport
            Users can manage their virtual stamps, representing the countries visited.
            <br/>
            7. Location Sharing<br/>
            7.1. Functionality
            SheRoams allows users to share their real-time location with friends and family. This functionality should be used responsibly.
            <br/>
            7.2. Safety Warning
            We recommend that users share their location only with people they fully trust to ensure their safety.
            <br/>
            8. Data Use and Protection<br/>
            8.1. Data Collection
            We collect information provided by users during registration, as well as data on application usage.
            <br/>
            8.2. Data Usage
            The collected data is used to provide and improve our services and ensure user safety.
            <br/>
            9. Modifications to the Terms and Conditions
            We reserve the right to modify these Terms and Conditions at any time. We will notify users of any significant changes.
            <br/>  
            10. Contact
            For any questions or concerns regarding these Terms and Conditions, please contact us through the application support.
        </p>
    </div>
)}


