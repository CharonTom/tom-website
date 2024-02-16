import { useRef, useState, useContext, useEffect } from "react";
import emailjs from "emailjs-com";
import translate from "../utils/translate";
import { LanguageContext } from "../contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { toast } from "react-toastify";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormError {
  name?: string;
  email?: string;
  message?: string;
}

function Contact() {
  const { language } = useContext(LanguageContext);

  const form = useRef(null);
  const ref = useRef(null);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<FormError>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormError((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const verifyInput = (formValues: FormValues) => {
    const errorFields: { [key: string]: string } = {};

    const regexName = /^[a-zA-ZÀ-ÿ\s'-]{1,20}$/;
    if (!formValues.name)
      errorFields.name =
        translate[language as keyof typeof translate].errorName2;
    else if (!regexName.test(formValues.name))
      errorFields.name =
        translate[language as keyof typeof translate].errorName1;

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formValues.email)
      errorFields.email =
        translate[language as keyof typeof translate].errorEmail2;
    else if (!regexEmail.test(formValues.email))
      errorFields.email =
        translate[language as keyof typeof translate].errorEmail1;

    const regexMessage = /^.{1,400}$/;
    if (!formValues.message)
      errorFields.message =
        translate[language as keyof typeof translate].errorForm2;
    else if (!regexMessage.test(formValues.message))
      errorFields.message =
        translate[language as keyof typeof translate].errorForm1;

    return errorFields;
  };

  useEffect(() => {
    setFormError({});
  }, [language]);

  const handleEmailSending = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = verifyInput(formValues);

    if (form.current && Object.keys(errors).length === 0 && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const response = await emailjs.sendForm(
          "service_zz9atbd",
          "template_1em0drt",
          form.current,
          "Btv5aHQm0kJBcOmXo"
        );

        // Traitement en cas de succès
        console.log("Email sent successfully:", response);
        toast("Message envoyé !", { type: "success" });
        setFormError({});
        setFormValues(initialValues);
        (form.current as HTMLFormElement).reset();
      } catch (error) {
        // Traitement en cas d'échec
        console.error("Error sending email:", error);
        toast("Erreur lors de l'envoi du message", { type: "error" });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setFormError(errors);
    }
  };

  const isInView = useInView(ref, { once: true });

  return (
    <section className="section relative" id="contact">
      <div
        style={{ transform: "translate3d(0,0,0)" }}
        className="blur-[100px] bg-primary rounded-full absolute top-[30%] right-[-15%] w-[25%] h-[25%]"
      ></div>
      <div
        style={{ transform: "translate3d(0,0,0)" }}
        className="blur-[100px] bg-tertiary rounded-full absolute top-[40%] left-[-15%] w-[15%] h-[25%]"
      ></div>
      <div
        style={{ transform: "translate3d(0,0,0)" }}
        className="blur-[100px] bg-primary rounded-full absolute bottom-[-50%] left-[10%] w-[15%] h-[25%]"
      ></div>
      <div className="container mx-auto">
        <h2 className="mb-12">
          {translate[language as keyof typeof translate].contact}
        </h2>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={isInView && { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-[80%] lg:w-fit mx-auto flex flex-col gap-5 "
          >
            <a href="mailto:charon.s.tom@gmail.com">
              <article className="contact-btn">
                <p>
                  Email <i className="fa-solid fa-envelope"></i>
                </p>
                <p>charon.s.tom@gmail.com</p>
              </article>
            </a>
            <a href="tel:+33621042123">
              <article className="contact-btn">
                <p>
                  {translate[language as keyof typeof translate].phone}{" "}
                  <i className="fa-solid fa-phone"></i>
                </p>
                <p> +33 6 21 04 21 23</p>
              </article>
            </a>
            <a
              href="https://goo.gl/maps/XjHhxR6dQaAVUMWu9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="contact-btn">
                <p>
                  Location <i className="fa-solid fa-location-dot"></i>
                </p>
                <p> 69000 Lyon, France</p>
              </article>
            </a>
          </motion.div>

          {/*---------------------------- form--------------------------- */}

          <motion.form
            initial={{ opacity: 0, x: 120 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-[10px] "
            onSubmit={handleEmailSending}
          >
            <div className="flex gap-[10px]">
              <div className="flex-1">
                <input
                  className="w-full p-2 rounded-lg bg-transparent border border-1 border-primary  dark:text-white text-secondary"
                  type="text"
                  name="name"
                  placeholder={
                    translate[language as keyof typeof translate].nameInput
                  }
                  value={formValues.name}
                  onChange={handleChange}
                />
                {formError.name && (
                  <p className="text-red-500 text-xs sm:text-sm mt-2 ml-1">
                    {formError.name}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <input
                  className="w-full p-2 rounded-lg bg-transparent border border-1 border-primary  dark:text-white text-secondary"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                {formError.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-2 ml-1">
                    {formError.email}
                  </p>
                )}
              </div>
            </div>
            <textarea
              className="p-2 rounded-lg resize-none bg-transparent border border-1 border-primary  dark:text-white text-secondary"
              name="message"
              rows={10}
              placeholder="Message"
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
            {formError.message && (
              <p className="text-red-500 text-xs sm:text-sm ml-1">
                {formError.message}
              </p>
            )}

            <button
              type="submit"
              className="second-btn"
              disabled={isSubmitting}
            >
              {translate[language as keyof typeof translate].sendButton}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
