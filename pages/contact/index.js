import React, { useState } from "react";
import Form from "../../components/ContactComps/Form/Form";
import Head from "next/head";
import Confirm from "../../components/ConfirmComps/Confirm";
const Contact = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>Contact Aryse Tansy</title>
        <meta
          name="description"
          content="Get in touch with Aryse Tansy!"
        ></meta>
      </Head>
      <div className="heroDiv">
        {hasSubmitted ? (
          <Confirm setHasSubmitted={setHasSubmitted} />
        ) : (
          <Form setHasSubmitted={setHasSubmitted} />
        )}
      </div>
    </React.Fragment>
  );
};
export default Contact;
