import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Legal.css';


const Legal = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const renderContent = () => {
    if (activeTab === 'privacy') {
      return (
        <div>
          <h2>Privacy Policy</h2>
          <p><strong>Last updated August 12, 2024</strong></p>
          <p>
            This privacy notice for Clink LLC ("we," "us," or "our"), describes how and why we might collect, 
            store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
          </p>
          <ul>
            <li>Download and use our mobile application (Clink), or any other application of ours that links to this privacy notice</li>
            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>
          <p>
            Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. 
            If you do not agree with our policies and practices, please do not use our Services. 
            If you still have any questions or concerns, please contact us at clinkllcnyc@gmail.com.
          </p>
          <h3>Summary of Key Points</h3>
          <p>
            This summary provides key points from our privacy notice, but you can find out more details about any of these topics 
            by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
          </p>
          <ul>
            <li>
              <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, 
              we may process personal information depending on how you interact with us and the Services, the choices you make, 
              and the products and features you use. Learn more about personal information you disclose to us.
            </li>
            <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
            <li><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</li>
            <li>
              <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, 
              communicate with you, for security and fraud prevention, and to comply with law. 
              We may also process your information for other purposes with your consent. 
              We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.
            </li>
            <li>
              <strong>In what situations and with which types of parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties. Learn more about when and with whom we share your personal information.
            </li>
            <li>
              <strong>How do we keep your information safe?</strong> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.
            </li>
            <li>
              <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.
            </li>
            <li>
              <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
            </li>
          </ul>
          <p>Want to learn more about what we do with any information we collect? Review the privacy notice in full.</p>
          <h3>Table of Contents</h3>
          <ol>
            <li>WHAT INFORMATION DO WE COLLECT?</li>
            <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
            <li>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</li>
            <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
            <li>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</li>
            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
            <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
            <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
            <li>DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
            <li>DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</li>
            <li>COPYRIGHT INFRINGEMENTS AND BINDING AGREEMENTS WITH ATTEMPTS TO COPY WORK</li>
            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
            <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
          </ol>

            <h3>1. WHAT INFORMATION DO WE COLLECT?</h3>
            <p>Personal information you disclose to us</p>
            <p>In Short: We collect personal information that you provide to us.</p>
            <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
            <p>Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
            <p>Names, phone numbers, email addresses, usernames, contact or authentication data, age, sex</p>
            <p>Sensitive Information. We do not process sensitive information.</p>
            <p>Application Data. If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
            <p>Geolocation Information. We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.</p>
            <p>Push Notifications. We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</p>
            <p>This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</p>
            <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
            <p>Information automatically collected:</p>
            <p>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
            <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
            <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
            <p>The information we collect includes:</p>
            <p>Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings). Google API – our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>

            <h3>2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
            <p>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
            <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
            <p>To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</p>
            <p>To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.</p>
            <p>To enable user-to-user communications. We may process your information if you choose to use any of our offerings that allow for communication with another user.</p>
            <p>To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.</p>
            <p>To deliver targeted advertising to you. We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more.</p>
            <p>To protect our Services. We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</p>
            <p>To identify usage trends. We may process information about how you use our Services to better understand how they are being used so we can improve them.</p>
            <p>To determine the effectiveness of our marketing and promotional campaigns. We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.</p>
            <p>To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</p>


            <h3>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h3>
            <p>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</p>
            <p>If you are located in the EU or UK, this section applies to you.</p>
            <p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
            <p>Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.</p>
            <p>Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</p>
            <p>Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</p>
            <p>Performance of a Contract. We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</p>
            <p>Legitimate Interests. We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to: Develop and display personalized and relevant advertising content for our users; Analyze how our Services are used so we can improve them to engage and retain users; Support our marketing activities; Diagnose problems and/or prevent fraudulent activities; Understand how our users use our products and services so we can improve user experience.</p>
            <p>If you are located in Canada, this section applies to you.</p>
            <p>We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</p>
            <p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
            <p>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way; For investigations and fraud detection and prevention; For business transactions provided certain conditions are met; If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim; For identifying injured, ill, or deceased persons and communicating with next of kin; If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse; If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province; If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records; If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced; If the collection is solely for journalistic, artistic, or literary purposes; If the information is publicly available and is specified by the regulations.</p>        
            
            <h3>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
            <p>In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.</p>
            <p>Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work.</p>
            <p>The categories of third parties we may share personal information with are as follows:</p>
            <p>Performance Monitoring Tools</p>
            <p>Sales & Marketing Tools</p>
            <p>Ad Networks</p>
            <p>We also may need to share your personal information in the following situations:</p>
            <p>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
            <p>When we use Google Maps Platform APIs. We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Places API). We use certain Google Maps Platform APIs to retrieve certain information when you make location-specific requests. This includes: Name, Age, Sex, Email, Posts; and other similar information. A full list of what we use information for can be found in this section and in the previous section titled "HOW DO WE PROCESS YOUR INFORMATION?" The Google Maps Platform APIs that we use store and access cookies and other information on your devices. If you are a user currently in the European Economic Area (EU countries, Iceland, Liechtenstein, and Norway) or the United Kingdom, please take a look at our Cookie Notice.</p>
            <p>Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</p>
            <p>Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions.</p>
            <p>Other Users. When you share personal information (for example, by posting comments, contributions, or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.</p>

            <h3>5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h3>
            <p>In Short: We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.</p>
            <p>The Services may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.</p>

            <h3>6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
            <p>In Short: We may use cookies and other tracking technologies to collect and store your information.</p>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
            <p>We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</p>
            <p>To the extent these online tracking technologies are deemed to be a "sale"/"sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"</p>
            <p>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>

            <h3>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
            <p>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
            <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than six (6) months past the start of the idle period of the user's account.</p>
            <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

            <h3>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
            <p>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>
            <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>

            <h3>9. DO WE COLLECT INFORMATION FROM MINORS?</h3>
            <p>In Short: We do not knowingly collect data from or market to minors.</p>
            <p>Users must be 21+ years of age to use this application.</p>

            <h3>10. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
            <p>In Short: Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
            <p>In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</p>
            <p>We will consider and act upon any request in accordance with applicable data protection laws.</p>
            <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.</p>
            <p>If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.</p>
            <p>Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below or updating your preferences.</p>
            <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
            <p>Account Information</p>
            <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
            <p>Log in to your account settings and update your user account.</p>
            <p>Contact us using the contact information provided.</p>
            <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
            <p>If you have questions or comments about your privacy rights, you may email us at clinkllcnyc@gmail.com.</p>

            <h3>11. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
            <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>
            <p>California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</p>
       
            <h3>12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h3>
            <p>In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Montana, New Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</p>
            <p>Categories of Personal Information We Collect:</p>
            <p>Have we collected the following in the past twelve (12) months:</p>
            <p>A. Identifiers</p>
            <p>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name: NO</p>
            <p>B. Personal information as defined in the California Customer Records statute</p>
            <p>Name, contact information, education, employment, employment history, and financial information: NO</p>
            <p>C. Protected classification characteristics under state or federal law</p>
            <p>Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data: NO</p>
            <p>D. Commercial information</p>
            <p>Transaction information, purchase history, financial details, and payment information: NO</p>
            <p>E. Biometric information</p>
            <p>Fingerprints and voiceprints: NO</p>
            <p>F. Internet or other similar network activity</p>
            <p>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements: NO</p>
            <p>G. Geolocation data</p>
            <p>Device location: NO</p>
            <p>H. Audio, electronic, sensory, or similar information</p>
            <p>Images and audio, video or call recordings created in connection with our business activities: NO</p>
            <p>I. Professional or employment-related information</p>
            <p>Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us: NO</p>
            <p>J. Education Information</p>
            <p>Student records and directory information: NO</p>
            <p>K. Inferences drawn from collected personal information</p>
            <p>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics: NO</p>
            <p>L. Sensitive personal Information</p>
            <p>NO</p>
            <p>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
            <p>Receiving help through our customer support channels;</p>
            <p>Participation in customer surveys or contests; and</p>
            <p>Facilitation in the delivery of our Services and to respond to your inquiries.</p>
            <p>We will use and retain the collected personal information as needed to provide the Services or for:</p>
            <p>Category H - As long as the user has an account with us</p>
            <p>Sources of Personal Information</p>
            <p>Learn more about the sources of personal information we collect in "WHAT INFORMATION DO WE COLLECT?"</p>
            <p>How We Use and Share Personal Information</p>
            <p>Learn about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"</p>
            <p>We collect and share your personal information through:</p>
            <p>Targeting cookies/Marketing cookies</p>
            <p>Social media cookies</p>
            <p>Beacons/Pixels/Tags</p>
            <p>Will your information be shared with anyone else?</p>
            <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</p>
            <p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</p>
            <p>We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:</p>
            <p>The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</p>
            <p>We have sold or shared the following categories of personal information to third parties in the preceding twelve (12) months:</p>
            <p>The categories of third parties to whom we sold personal information are:</p>
            <p>User Account Registration & Authentication Services</p>
            <p>Data Analytics Services</p>
            <p>Affiliate Marketing Programs</p>
            <p>Ad Networks</p>
            <p>The categories of third parties to whom we shared personal information with are:</p>
            <p>Ad Networks</p>
            <p>Affiliate Marketing Programs</p>
            <p>Social Networks</p>
            <p>User Account Registration & Authentication Services</p>
            <p>Your Rights</p>
            <p>You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
            <p>Right to know whether or not we are processing your personal data</p>
            <p>Right to access your personal data</p>
            <p>Right to correct inaccuracies in your personal data</p>
            <p>Right to request the deletion of your personal data</p>
            <p>Right to obtain a copy of the personal data you previously shared with us</p>
            <p>Right to non-discrimination for exercising your rights</p>
            <p>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California’s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</p>
            <p>Depending upon the state where you live, you may also have the following rights:</p>
            <p>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including California's and Delaware's privacy law)</p>
            <p>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including Oregon’s privacy law)</p>
            <p>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including California’s privacy law)</p>
            <p>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including Florida’s privacy law)</p>
            <p>How to Exercise Your Rights</p>
            <p>To exercise these rights, you can contact us by submitting a data subject access request, by emailing us at clinkllcnyc@gmail.com, or by referring to the contact details at the bottom of this document.</p>
            <p>You can opt out from the selling of your personal information, targeted advertising, or profiling by disabling cookies in Cookie Preference Settings.</p>
            <p>Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.</p>
            <p>Request Verification</p>
            <p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</p>
            <p>If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</p>
            <p>Appeals</p>
            <p>Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at clinkllcnyc@gmail.com. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</p>
            <p>California "Shine The Light" Law</p>
            <p>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</p>


            <h3>13. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h3>
            <p>In Short: You may have additional rights based on the country you reside in.</p>

            <h5>Australia and New Zealand</h5>
            <p>We collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act).</p>
            <p>This privacy notice satisfies the notice requirements defined in both Privacy Acts, in particular: what personal information we collect from you, from which sources, for which purposes, and other recipients of your personal information.</p>
            <p>If you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services, in particular:</p>
            <p>offer you the products or services that you want</p>
            <p>respond to or help with your requests</p>
            <p>manage your account with us</p>
            <p>confirm your identity and protect your account</p>
            <p>At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"</p>
            <p>If you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the Office of the Australian Information Commissioner and a breach of New Zealand's Privacy Principles to the Office of New Zealand Privacy Commissioner.</p>
            
            <h5>Republic of South Africa</h5>
            <p>At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"</p>
            <p>If you are unsatisfied with the manner in which we address any complaint with regard to our processing of personal information, you can contact the office of the regulator, the details of which are:</p>
            <p>The Information Regulator (South Africa)</p>
            <p>General enquiries: enquiries@inforegulator.org.za</p>
            <p>Complaints (complete POPIA/PAIA form 5): PAIAComplaints@inforegulator.org.za & POPIAComplaints@inforegulator.org.za</p>

            <h3>14. COPYRIGHT INFRINGEMENTS AND BINDING AGREEMENTS WITH ATTEMPTS TO COPY WORK</h3>
            <p>Any attempt to copy the idea or premise of Clink could result in legal action being pursued against the user. Clink has its property, both physical and intellectual, protected with a copyright submitted to the federal office in August 2024.</p>
            <p>In addition, any attempts to influence or pressure a non-user (of Clink) to copy or reproduce this Clink could result in legal action against both the user and non-user. Our objective is to create a welcoming social network where users can connect and interact in a secure environment. However, we take copyright infringement and unauthorized replication extremely seriously, and such actions may result in legal action.</p>

            <h3>15. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
            <p>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
            <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this privacy notice. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

            <h3>16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
            <p>If you have questions or comments about this notice, you may email us at clinkllcnyc@gmail.com.</p>

            <h3>17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
            <p>You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
       
        </div>
      );
    } else {
      return (
        <div>
          <h2>Terms and Conditions</h2>

<p>Agreement between User and Clink and/or https://clinkllcnyc.wixsite.com/clink</p>
<p>Welcome to Clink and/or https://clinkllcnyc.wixsite.com/clink. Both the iOS application Clink (the "Site") as well as https://clinkllcnyc.wixsite.com/clink website (the "Site") is comprised of various web pages operated by Clink LLC ("Clink"). https://clinkllcnyc.wixsite.com/clink is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of https://clinkllcnyc.wixsite.com/clink constitutes your agreement to all such Terms. Please read these terms carefully, and keep a copy of them for your reference.</p>

<p>https://clinkllcnyc.wixsite.com/clink is the website for social social networking app Clink.</p>

<p>At Clink, our mission is to enhance social experiences by providing an interface where friends can connect, share, rate, and review their favorite bars.</p>

<p>We aim to create a trusted community where honest recommendations and personal insights from friends guide you to discover new venues and enjoy memorable nights out.</p>

<p>Our goal is to empower users to make informed decisions about their nightlife choices, fostering connections and creating a vibrant social network centered around shared experiences and local hotspots.</p>

<h3>Privacy</h3>
<p>Your use of https://clinkllcnyc.wixsite.com/clink is subject to Clink's Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.</p>

<h3>Electronic Communications</h3>
<p>Visiting https://clinkllcnyc.wixsite.com/clink or sending emails to Clink constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing.</p>

<h3>Your Account</h3>
<p>If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. You may not assign or otherwise transfer your account to any other person or entity. You acknowledge that Clink is not responsible for third party access to your account that results from theft or misappropriation of your account. Clink and its associates reserve the right to refuse or cancel service, terminate accounts, or remove or edit content in our sole discretion.</p>

<h3>Children Under Thirteen, Users 21+</h3>
<p>Clink does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. Anyone may visit https://clinkllcnyc.wixsite.com/clink, but only people aged 21+ are allowed to create an account with Clink.</p>

<h3>Links to Third Party Sites/Third Party Services</h3>
<p>https://clinkllcnyc.wixsite.com/clink may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of Clink and Clink is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. Clink is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Clink of the site or any association with its operators.</p>

<p>Certain services made available via https://clinkllcnyc.wixsite.com/clink are delivered by third party sites and organizations. By using any product, service or functionality originating from the https://clinkllcnyc.wixsite.com/clink domain, you hereby acknowledge and consent that Clink may share such information and data with any third party with whom Clink has a contractual relationship to provide the requested product, service or functionality on behalf of https://clinkllcnyc.wixsite.com/clink users and customers.</p>

<h3>No Unlawful or Prohibited Use/Intellectual Property</h3>
<p>You are granted a non-exclusive, non-transferable, revocable license to access and use https://clinkllcnyc.wixsite.com/clink strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to Clink that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site.</p>

<p>All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Clink or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.</p>

<p>You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. Clink content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of Clink and the copyright owner. You agree that you do not acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of Clink or our licensors except as expressly authorized by these Terms.</p>

<h3>Use of Communication Services</h3>
<p>The Site may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable you to communicate with the public at large or with a group (collectively, "Communication Services"). You agree to use the Communication Services only to post, send and receive messages and material that are proper and related to the particular Communication Service.</p>

<p>By way of example, and not as a limitation, you agree that when using a Communication Service, you will not: defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others; publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information; upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents; upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another's computer; advertise or offer to sell or buy any goods or services for any business purpose, unless such Communication Service specifically allows such messages; conduct or forward surveys, contests, pyramid schemes or chain letters; download any file posted by another user of a Communication Service that you know, or reasonably should know, cannot be legally distributed in such manner; falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded; restrict or inhibit any other user from using and enjoying the Communication Services; violate any code of conduct or other guidelines which may be applicable for any particular Communication Service; harvest or otherwise collect information about others, including e-mail addresses, without their consent; violate any applicable laws or regulations.</p>

<p>Clink has no obligation to monitor the Communication Services. However, Clink reserves the right to review materials posted to a Communication Service and to remove any materials in its sole discretion. Clink reserves the right to terminate your access to any or all of the Communication Services at any time without notice for any reason whatsoever.</p>

<p>Clink reserves the right at all times to disclose any information as necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in Clink's sole discretion.</p>

<p>Always use caution when giving out any personally identifying information about yourself or your children in any Communication Service. Clink does not control or endorse the content, messages or information found in any Communication Service and, therefore, Clink specifically disclaims any liability with regard to the Communication Services and any actions resulting from your participation in any Communication Service. Managers and hosts are not authorized Clink spokespersons, and their views do not necessarily reflect those of Clink.</p>

<p>Materials uploaded to a Communication Service may be subject to posted limitations on usage, reproduction and/or dissemination. You are responsible for adhering to such limitations if you upload the materials.</p>

<h3>Materials Provided to Clink or https://clinkllcnyc.wixsite.com/clink or Posted on Any Clink Web Page</h3>
<p>Clink does not claim ownership of the materials you provide to https://clinkllcnyc.wixsite.com/clink (including feedback and suggestions) or post, upload, input or submit to any Clink Site or our associated services (collectively "Submissions"). However, by posting, uploading, inputting, providing or submitting your Submission you are granting Clink, our affiliated companies and necessary sublicensees permission to use your Submission in connection with the operation of their Internet businesses including, without limitation, the rights to: copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat your Submission; and to publish your name in connection with your Submission.</p>

<p>No compensation will be paid with respect to the use of your Submission, as provided herein. Clink is under no obligation to post or use any Submission you may provide and may remove any Submission at any time in Clink's sole discretion.</p>

<p>By posting, uploading, inputting, providing or submitting your Submission you warrant and represent that you own or otherwise control all of the rights to your Submission as described in this section including, without limitation, all the rights necessary for you to provide, post, upload, input or submit the Submissions.</p>

<h3>Third Party Accounts</h3>
<p>You will be able to connect your Clink account to third party accounts. By connecting your Clink account to your third party account, you acknowledge and agree that you are consenting to the continuous release of information about you to others (in accordance with your privacy settings on those third party sites). If you do not want information about you to be shared in this manner, do not use this feature.</p>

<h3>International Users</h3>
<p>The Service is controlled, operated and administered by Clink from our offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the Clink Content accessed through https://clinkllcnyc.wixsite.com/clink in any country or in any manner prohibited by any applicable laws, restrictions or regulations.</p>

<h3>Indemnification</h3>
<p>You agree to indemnify, defend and hold harmless Clink, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. Clink reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Clink in asserting any available defenses.</p>

<h3>Arbitration</h3>
<p>In the event the parties are not able to resolve any dispute between them arising out of or concerning these Terms and Conditions, or any provisions hereof, whether in contract, tort, or otherwise at law or in equity for damages or any other relief, then such dispute shall be resolved only by final and binding arbitration pursuant to the Federal Arbitration Act, conducted by a single neutral arbitrator and administered by the American Arbitration Association, or a similar arbitration service selected by the parties, in a location mutually agreed upon by the parties. The arbitrator's award shall be final, and judgment may be entered upon it in any court having jurisdiction. In the event that any legal or equitable action, proceeding or arbitration arises out of or concerns these Terms and Conditions, the prevailing party shall be entitled to recover its costs and reasonable attorney's fees. The parties agree to arbitrate all disputes and claims in regards to these Terms and Conditions or any disputes arising as a result of these Terms and Conditions, whether directly or indirectly, including Tort claims that are a result of these Terms and Conditions. The parties agree that the Federal Arbitration Act governs the interpretation and enforcement of this provision. The entire dispute, including the scope and enforceability of this arbitration provision shall be determined by the Arbitrator. This arbitration provision shall survive the termination of these Terms and Conditions.</p>

<h3>Class Action Waiver</h3>
<p>Any arbitration under these Terms and Conditions will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and Clink agree otherwise, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of a representative or class proceeding.</p>

<h3>Liability Disclaimer</h3>
<p>THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. CLINK LLC AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.</p>

<p>CLINK LLC AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. CLINK LLC AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.</p>

<p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CLINK LLC AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF CLINK LLC OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.</p>

<h3>Termination/Access Restriction</h3>
<p>Clink reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent permitted by law, this agreement is governed by the laws of the State of Michigan and you hereby consent to the exclusive jurisdiction and venue of courts in Michigan in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section.</p>
<p>You agree that no joint venture, partnership, employment, or agency relationship exists between you and Clink as a result of this agreement or use of the Site. Clink's performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of Clink's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Site or information provided to or gathered by Clink with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.</p>
<p>Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and Clink with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and Clink with respect to the Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English.</p>

<h3>Changes to Terms</h3>
<p>Clink reserves the right, in its sole discretion, to change the Terms under which https://clinkllcnyc.wixsite.com/clink is offered. The most current version of the Terms will supersede all previous versions. Clink encourages you to periodically review the Terms to stay informed of our updates.</p>

<h3>Contact Us</h3>
<p>Clink welcomes your questions or comments regarding the Terms:</p>
<p>Clink LLC</p>
<p>clinkllcnyc@gmail.com</p>
<p>Effective as of August 13, 2024</p>
</div>
      );
    }
};
  return (
    <div className="container my-5">
      <h1>Legal</h1>
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'privacy' ? 'active' : ''}`} onClick={() => setActiveTab('privacy')}>
            Privacy Policy
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'terms' ? 'active' : ''}`} onClick={() => setActiveTab('terms')}>
            Terms and Conditions
          </button>
        </li>
      </ul>
      {renderContent()}
    </div>
  );
};

export default Legal;

