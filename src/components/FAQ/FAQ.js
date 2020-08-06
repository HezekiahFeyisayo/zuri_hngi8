import React, { useState  } from 'react';
import FAQ2 from "./FAQ2";
import "./FAQ.css";


function FAQ() {
    const [faqs, setfaqs] = useState([
      {
        question: 'What is HNGi8 all about?',
        answer: 'A Remote internship that enables you learn or improve skill by working on real-world projects',
        open: false
      },
      {
        question: 'What Benefits can I get from the internship?',
        answer: 'Benefits upon completion include access to HNG network comprising of past finalists, improving your portfolio (via the product/project you worked on), access to job opportunities and occasional data stipends depending on performance during the internship',
        open: false
      },
      {
        question: 'When will the Internship begin?',
        answer: 'Follow @hnginternship on twitter for more information about the starting date (Check countdown on homepage)',
        open: false
      },
      {
        question: 'How long does the internship last?',
        answer: 'About 3 months.',
        open: false
      },
      {
        question: 'Will I be employed by HNG upon completion of the internship?',
        answer: 'Numerous job opportunities will be offered for those who make it to the final stage.',
        open: false
      },
      {
        question: 'Will mentors be available for physical mentorship?',
        answer: 'Meetups will be held where mentors around your region will be available to answer to any question.',
        open: false
      },
      {
        question: 'Do I get to have a personal mentor?',
        answer: 'Mentors can be contacted privately for guidance during the internship.',
        open: false
      },
      {
        question: 'How often do we build new projects?',
        answer: 'Every week new projects are assigned to interns as tasks to complete and present to be promoted to the next stage.',
        open: false
      },
      {
        question: 'Error: Select a Country from the list',
        answer: 'if you get this error, you are advised to use updated chrome browser, Ensure your network is good, There is a dropdown list of countries you can select from, choose your country, If the error persist, type the name of your country without trailing space.',
        open: false
      }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i ) => {
            if (i == index) {
                faq.open =!faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }

    return (
        <div className="FAQ">
          <div className="text-center faq-title">
          <p className="faq-heading">
              FREQUENTLY ASKED QUESTIONS
          </p>
          <h3 className="font-weight-bold">
              Here are some of the most frequently
          </h3>
          <h3 className="font-weight-bold">
              asked questions about HNG 8.0
          </h3>
        </div>
          <div className="faqs">
            {faqs.map((faq, i) => (
              <FAQ2 faq={faq} index={i} toggleFAQ={toggleFAQ} />
              ))}
          </div>
          <div className="sub-footer-1 text-center">
              <h5>Not a Frequently Asked Question?</h5>
              <h5>Contact Us</h5>
              <button className="btn btn-danger text-white px-4">Here</button>
          </div>
          <div className="sub-footer-2 text-center">
              <h5 className="text-white pb-5">Break into the tech industry like a pro</h5>
              <button className="btn btn-danger text-white px-4">Enroll Today</button>
          </div>
  
        </div>
      );
    }
    
    export default FAQ;