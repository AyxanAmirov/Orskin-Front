import React from "react";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <div className="mt-[250px] mb-[120px]">
      <div className="container">
        <div className="flex flex-col gap-[20px]">
          <p>
            Our site, www.orksin.ae is operated by Orskin Aesthetics Clinic LLC
            <span className="font-bold">(We, The Company)</span>. We are a
            registered company in United Arab Emirates, Licence number 857110,
            with trading address at 285D Al Wasl Road, Dubai, UAE, and VAT
            number: 100502096900003.z
          </p>
          <h3>Information you give us:</h3>

          <ul className="pl-[30px]">
            <li className="list-disc">
              You may give us information about you by filling in forms on our
              site or by corresponding with us by phone, e-mail or otherwise.
            </li>
            <li className="list-disc">
              This may include information you provide when you register to use
              our site, search for our service or products, place an order on
              our site, participate in discussion forums or other social media
              functions, enter a competition, promotion or survey and when you
              report a problem with our site.
            </li>{" "}
            <li className="list-disc">
              The information you give us may include your name, address, e-mail
              address and phone number, personal description, and photograph.
            </li>
          </ul>
          <h3>Information we collect about you:</h3>
          <ul className="pl-[30px]">
            <li className="list-disc">
              With each of your visit to our site we may automatically collect
              the following information: technical information, including the
              internet protocol (IP) address used to connect your computer to
              the internet, your login information, browser type and version,
              time zone setting, browser plug-in types and versions, operating
              system and platform; and information about your visit, including
              the full uniform resource locators (URL) clickstream to, through
              and from our site (including date and time); services or products
              you viewed or searched for; page response times, download errors,
              length of visits to certain pages, page interaction information
              (such as scrolling, clicks, and mouse-overs), and methods used to
              browse away from the page and any phone number used to call us.
            </li>
          </ul>
          <p>Online Card Payments:</p>
          <ul className="pl-[30px]">
            <li className="list-disc">
              All credit/debit cards’ details and personally identifiable
              information will NOT be stored, sold, shared, rented or leased to
              any third parties.
            </li>
            <li className="list-disc">
              <Link to={"/"} className="text-[#B9E3DC]">
                www.orskin.ae
              </Link>{" "}
              will not pass any debit/credit card details to third parties.
            </li>
            <li className="list-disc">
              <Link to={"/"} className="text-[#B9E3DC]">
                www.orskin.ae
              </Link>{" "}
              takes appropriate steps to ensure data privacy and security
              including through various hardware and software methodologies.
              However, (
              <Link to={"/"} className="text-[#B9E3DC]">
                www.orskin.ae
              </Link>
              ) cannot guarantee the security of any information that is
              disclosed online.
            </li>
            <li className="list-disc">
              <Link to={"/"} className="text-[#B9E3DC]">
                www.orskin.ae
              </Link>{" "}
              is not responsible for the privacy policies of websites to which
              it links. If you provide any information to such third parties
              different rules regarding the collection and use of your personal
              information may apply. You should contact these entities directly
              if you have any questions about their use of the information that
              they collect.
            </li>
            <li className="list-disc">
              The Website Policies and Terms & Conditions may be changed or
              updated occasionally to meet the requirements and standards.
              Therefore, the Customers’ are encouraged to frequently visit these
              sections to be updated about the changes on the website.
              Modifications will be effective on the day they are posted.
            </li>
          </ul>
          <p>
            Where content is specifically made available for redistribution, it
            may only be redistributed within your organisation.
          </p>
          <h3>Information we receive from other sources:</h3>

          <ul className="pl-[30px]">
            <li className="list-disc">
              We may receive information about you from other sources, including
              Google Analytics. We also work with third parties (including, for
              example, sub-contractors in technical and delivery services,
              search information providers, credit reference agencies) and may
              receive information about you from them.
            </li>
          </ul>
          <h3>User Content Rights:</h3>
          <ul className="pl-[30px]">
            <li className="list-disc">
              We will only use your user content for the purpose of processing
              and fulfilling your orders.
            </li>
            <li className="list-disc">
              We reserve the right to use any user content such as reviews or
              comments we deem appropriate, for inclusion in our marketing
              materials.
            </li>
            <li className="list-disc">
              We reserve the right to preserve and/or disclose any and all User
              Content if required to do so by law or in the good faith belief
              that such preservation or disclosure is reasonably necessary to
              comply with legal requirements, enforce the terms of this
              Agreement, respond to any claims that User Content violates the
              law or rights of third parties, or to protect the rights of our
              company, site or its customers or the public.
            </li>
          </ul>
          <h3>Restricted Access:</h3>

          <ul className="pl-[30px]">
            <li className="list-disc">
              We reserve the right to restrict access to other areas of this
              site, or indeed this entire site. If we provide you with a user ID
              and passport for accessing restricted areas of this site or other
              content or service, you must ensure that the user ID and password
              are kept confidential. If in breech, we reserve the right to
              disable your access to restricted content.
            </li>
            <li className="list-disc">
              User is responsible for maintaining the confidentiality of his
              account. Use of password and access to your account from any
              devices must be restricted to the user, and you agree to accept
              responsibility for all activities that occur under your account or
              password. We are not be responsible or liable, directly or
              indirectly, in any way for any loss or damage of any kind incurred
              as a result of, or in connection with, your failure to comply with
              this.
            </li>
            <li className="list-disc">
              You must not attempt to gain unauthorised access to our site, the
              server on which our site is stored or any server, computer or
              database connected to our site.
            </li>
          </ul>

          <h3>Reviews, Comments & Questions:</h3>
          <ul className="pl-[30px]">
            <li className="list-disc">
              Visitors may send reviews, comments, and other communications, and
              submit suggestions, ideas, or questions, to info@orskin.ae
            </li>
            <li className="list-disc">
              By doing so, you acknowledge that we will be free to use,
              disclose, reproduce, modify, license, transfer and exploit any of
              the foregoing suggestions or ideas in any manner.
            </li>
          </ul>
          <p>Contact:</p>
          <p>
            Questions, comments, and requests regarding this policy are welcomed
            and should be addressed to info@orskin.ae
          </p>
          <p>Thank you for visiting our site.</p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
