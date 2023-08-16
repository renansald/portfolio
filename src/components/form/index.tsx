import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import CustomModal from '../modal';

type Props = {}

const FormComponent = (props: Props) => {

  const [errorOnSubmit, setErroOnSubmit] = useState(false);
  const [successOnSubmit, setSuccessOnSubmit] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = async (values : any, { setSubmitting } : any) => {
    try {
      const response = await fetch('https://formspree.io/f/xbjvgpog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSuccessOnSubmit(true);
      } else {
        setErroOnSubmit(true);
      }
    } catch (error) {
      setErroOnSubmit(true);
    }

    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center gap-10 w-full pb-8">
      <CustomModal
        isOpen={errorOnSubmit}
        onClose={() => setErroOnSubmit(false)}
        title="I'm Sorry, I Encountered an Issue"
        message='While trying to send your message, I faced a problem. Please give me another chance later or feel free to reach out to me on social media.'
      />

      <CustomModal
        isOpen={successOnSubmit}
        onClose={() => setSuccessOnSubmit(false)}
        title="Message Sent Successfully"
        message='Thank you for reaching out to me. I will get back to you as soon as possible.'
      />
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form
          className={`flex flex-col gap-4 md:w-[40%] w-full border-2 border-solid 
          border-primary-color rounded-md p-3 shadow-about`}
        >
          <label htmlFor="name" className="text-primary-color font-bold">
            Name:
          </label>
          <Field
            type="text"
            id="name"
            name="name"
            required
            className={`border-2 border-solid border-primary-color focus:border-secondary-color 
            dark:bg-slate-800 dark:text-white focus:outline-none rounded-md p-1 text-black`}
          />
          <ErrorMessage name="name" component="div" className="text-red-500 font-bold"/>

          <label htmlFor="email" className="text-primary-color font-bold">
            Email:
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            required
            className={`border-2 border-solid border-primary-color focus:border-secondary-color 
            dark:bg-slate-800 dark:text-white focus:outline-none rounded-md p-1 text-black`}
          />
          <ErrorMessage name="email" component="div" className="text-red-500 font-bold"/>

          <label htmlFor="message" className="text-primary-color font-bold">
            Message:
          </label>
          <Field
            as="textarea"
            id="message"
            name="message"
            required
            className={`border-2 border-solid border-primary-color focus:border-secondary-color 
            dark:bg-slate-800 dark:text-white focus:outline-none rounded-md p-1 text-black`}
          />
          <ErrorMessage name="message" component="div" className="text-red-500 font-bold"/>
          <button
            type="submit"
            className="bg-primary-color text-white rounded-md p-1 hover:bg-secondary-color hover:text-primary-color transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;