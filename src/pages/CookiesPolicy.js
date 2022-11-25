import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Title from "components/Title";
import React from "react";

function CookiesPolicy() {
  return (
    <div>
      <div className="mb-4 sm:mb-6 lg:mb-10 z-50 relative">
        <Navbar />
      </div>

      <div className="container-two mb-20">
        <div className="mb-14 lg:mb-20">
          <Title variant="44">Cookies Policy</Title>
        </div>

        <div class="dictator-content">
          <div class="dictator-section">
            <h4 class="dictator-title">1. About this Policy</h4>
            <p class="dictator-desc  dictator-indented-2">
              {" "}
              Our Privacy Policy&nbsp;explains our principles when it comes to
              the collection, processing, and storage of your personal
              information. This policy explains the use of cookies in more
              details, such as what cookies are and how they are used. However,
              to get a full picture of how we handle your privacy this policy
              should be read together with our Privacy Policy.
            </p>
          </div>
          <div class="dictator-section">
            <h4 class="dictator-title">2. What are cookies?</h4>
            <p class="dictator-desc  dictator-indented-2">
              {" "}
              Cookies are text files, containing small amounts of information,
              which are downloaded to your browsing device, such as your
              computer, mobile device or smartphone, when you visit our website
              or use our services. Cookies can be recognised by the website that
              downloaded them — or other websites that use the same cookies.
              This helps websites know if the browsing device has visited them
              before.
            </p>
            <p class="dictator-desc  dictator-indented-2">
              {" "}
              We use two types of cookies: persistent cookies and session
              cookies. A persistent cookie lasts beyond the current session and
              is used for many purposes, such as recognizing you as an existing
              user, so it’s easier to return to us and interact with our
              services. Since a persistent cookie stays in your browser, it will
              be read by us when you return to one of our sites or visit a
              third-party site that uses our services. Session cookies last only
              as long as the session (usually the current visit to a website or
              a browser session).
            </p>
            <p class="dictator-desc  dictator-indented-2">
              2.3. Script TV is operating under the legislation of England and
              Wales. The services provided by the Website are not considered to
              be financial or custodian services under this jurisdiction, and
              therefore does not require any licenses to operate. As laws and
              regulations are different in other countries the right to access
              and/or use the Website (including any, or all of, the products
              offered via the Website) may be illegal in certain countries. You
              are responsible for determining whether your accessing and/or use
              of the Website is compliant with applicable laws in your
              jurisdiction and that the service offered on this Website is not
              illegal in the territory where you reside,
            </p>
          </div>
          <div class="dictator-section">
            <h4 class="dictator-title">3. Do I need to accept cookies?</h4>
            <p class="dictator-desc  dictator-indented-2">
              {" "}
              No, you do not need to accept cookies. But, pleased be advised
              that if you do not accept cookies the service might be difficult
              or impossible to use.
            </p>
            <p class="dictator-desc  dictator-indented-2">
              {" "}
              You can adjust settings on your browser so that you will be
              notified when you receive a cookie. Please refer to your browser
              documentation to check if cookies have been enabled on your
              computer or to request not to receive cookies. As cookies allow
              you to take advantage of some of the Website’s essential features,
              we recommend that you accept cookies. For instance, if you block
              or otherwise reject our cookies, you will not be able to use any
              products or services on the website that may require you to log
              in.
            </p>
          </div>
          <div class="dictator-section">
            <h4 class="dictator-title">4. What are the cookies used for?</h4>
            <h6 class="dictator-title-center">Functional cookies</h6>
            <p class="dictator-desc  dictator-indented-2">
              Functional cookies are essential to provide our services as we
              want to provide them. They are used to remember your preferences
              on our website and to provide an enhanced and personalised
              experience. The information collected by these cookies is usually
              anonymised, so we cannot identify you personally. Functional
              cookies do not track your internet usage or gather information
              that could be used for selling advertising. These cookies are
              usually session cookies that will expire when you close your
              browsing session, but some are also persistent cookies.
            </p>
          </div>
          <div class="dictator-section">
            <h6 class="dictator-title-center">
              {" "}
              Essential or ‘Strictly Necessary’ Cookies
            </h6>
            <p class="dictator-desc  dictator-indented-2">
              {" "}
              These cookies are essential to provide our services. Without these
              cookies, parts of our website will not function. These cookies do
              not track where you have been on the internet or remember
              preferences beyond your current visit and do not gather
              information about you that could be used for marketing purposes.
              These cookies are usually session cookies which will expire when
              you close your browsing session.
            </p>
          </div>
          <div class="dictator-section">
            <h6 class="dictator-title-center">
              {" "}
              Essential or ‘Strictly Necessary’ Cookies
            </h6>
            <p class="dictator-desc  dictator-indented-2">
              {" "}
              Analytical performance cookies are used to monitor the performance
              of our website and services, for example, to determine the number
              of page views and the number of unique users a website has. Web
              analytics services may be designed and operated by third parties.
              The information provided by these cookies allows us to analyse
              patterns of user behaviour and we use that information to enhance
              user experience or identify areas of the website which may require
              maintenance. The information is anonymous, cannot be used to
              identify you, does not contain personal information and is only
              used for statistical purposes
            </p>
          </div>
          <div class="dictator-section">
            <h6 class="dictator-title-center"> Advertising Cookies</h6>
            <p class="dictator-desc  dictator-indented-2">
              {" "}
              These cookies remember that you have visited a website and use
              that information to provide you with content or advertising which
              is tailored to your interests. They are also used to limit the
              number of times you see an advertisement as well as help measure
              the effectiveness of the advertising campaign. The information
              collected by these cookies may be shared with trusted third-party
              partners such as advertisers. We may update this Cookie Policy
              from time to time for operational, legal or regulatory reasons. If
              you have any questions regarding our policy on cookies please
              contact support@script.tv
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CookiesPolicy;
