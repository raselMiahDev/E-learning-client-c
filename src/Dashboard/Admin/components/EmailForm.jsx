// EmailForm.js (React Component)

import React, { useState } from "react";
import axios from "axios";
import { TextInput, Textarea } from "keep-react";
import { Envelope, Article, PaperPlaneRight } from "phosphor-react";
import { SEND_EMAIL_API_REQUEST } from "../../../apiRequest/API";
import SubmitButton from "../../../components/common/SubmitButton";
import { ErrorToast, IsEmail, IsEmpty } from "../../../utility/FormHelper";
const EmailForm = () => {
  const [recipients, setRecipients] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [btnLoader, setBtnLoader] = useState(false);

  const handleSendEmails = async () => {
    if (IsEmail(recipients)) {
      ErrorToast("Email is required");
      return false;
    } else if (IsEmpty(subject)) {
      ErrorToast("Subject is required");
      return false;
    } else if (IsEmpty(text)) {
      ErrorToast("Text is required");
      return false;
    } else {
      setBtnLoader(true);
      await SEND_EMAIL_API_REQUEST(recipients, subject, text);
      setBtnLoader(false);
    }
  };
  return (
    <div className="md:px-32">
      <TextInput
        type="text"
        handleOnChange={(e) => setRecipients(e.target.value)}
        placeholder="example@gmail.com"
        color="gray"
        sizing="md"
        addon={<Envelope size={20} color="#5E718D" />}
        addonPosition="left"
      />
      <br />
      <TextInput
        type="text"
        handleOnChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        color="gray"
        sizing="md"
        addon={<Article size={20} color="#5E718D" />}
        addonPosition="left"
      />
      <br />
      <Textarea
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Leave a message..."
        withBg={true}
        color="gray"
        border={true}
        rows={4}
      />

      <br />

      <SubmitButton
        onClick={handleSendEmails}
        icon={<PaperPlaneRight size={25} />}
        text="Send Email"
        submit={btnLoader}
        className="btn bg-sky-500 hover:bg-sky-700 border-none px-7 text-white"
      />
    </div>
  );
};

export default EmailForm;
