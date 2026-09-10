import { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { Loader2, Send, Mail } from 'lucide-react';
import { footerLinks } from '../data/data';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';

const Contact = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const inputChangeHandle = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim());

  const validationRules = [
    { validate: (v) => !v.user_name.trim(), message: 'All fields are required.' },
    { validate: (v) => v.user_name.trim().length < 2, message: 'Name must be at least 2 characters.' },
    { validate: (v) => v.user_name.trim().length > 20, message: 'Name cannot exceed 20 characters.' },
    { validate: (v) => !v.user_email.trim(), message: 'All fields are required.' },
    { validate: (v) => !isValidEmail(v.user_email), message: 'Please enter a valid email address.' },
    { validate: (v) => !v.message.trim(), message: 'All fields are required.' },
    { validate: (v) => v.message.trim().length < 20, message: 'Message must be at least 20 characters.' },
    { validate: (v) => v.message.trim().length > 300, message: 'Message cannot exceed 300 characters.' },
  ];

  const getValidationError = (values) => validationRules.find((r) => r.validate(values))?.message || '';

  const formSubmitHandle = (e) => {
    e.preventDefault();
    const error = getValidationError(formData);
    if (error) {
      toast.error(error);
      return;
    }
    if (!form.current) {
      toast.error('Unable to submit the form right now.');
      return;
    }

    setIsSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          toast.success('Your message has been sent.');
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error);
          toast.error('An unexpected error occurred. Please try again.');
        }
      )
      .finally(() => setIsSending(false));
  };

  const inputClass =
    'peer w-full rounded-xl border border-ink/15 dark:border-paper/15 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent placeholder:text-ink/30 dark:placeholder:text-paper/30';

  return (
    <div className="container">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's build something together"
        subtitle="Have a project in mind, a role to discuss, or just want to say hi? My inbox is open."
      />

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 max-w-5xl mx-auto">
        {/* Left: info panel */}
        <Reveal direction="right" className="flex flex-col gap-6">
          <div className="rounded-2xl border border-ink/10 dark:border-paper/10 bg-paper/60 dark:bg-ink-soft/60 p-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-accent/10 text-accent grid place-items-center">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-ink/50 dark:text-paper/50">Email</p>
                <p className="text-sm font-medium">rakeshkumarparida424@gmail.com</p>
              </div>
            </div>

            <div className="h-px bg-ink/10 dark:bg-paper/10" />

            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">Find me on</p>
              <div className="flex items-center gap-3">
                {footerLinks.map((val, i) => {
                  const Icon = val.icon;
                  return (
                    <motion.a
                      whileHover={{ y: -3 }}
                      key={i}
                      href={val.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 grid place-items-center rounded-full border border-ink/10 dark:border-paper/15 hover:text-accent hover:border-accent/50 transition-colors"
                    >
                      <Icon size={16} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal direction="left">
          <form ref={form} onSubmit={formSubmitHandle} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-ink/60 dark:text-paper/60">Name</label>
                <input
                  autoComplete="off"
                  name="user_name"
                  value={formData.user_name}
                  onChange={inputChangeHandle}
                  type="text"
                  placeholder="John Smith"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-ink/60 dark:text-paper/60">Email</label>
                <input
                  autoComplete="off"
                  name="user_email"
                  value={formData.user_email}
                  onChange={inputChangeHandle}
                  type="email"
                  placeholder="smith@gmail.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-ink/60 dark:text-paper/60">Message</label>
              <textarea
                autoComplete="off"
                name="message"
                rows={5}
                value={formData.message}
                onChange={inputChangeHandle}
                placeholder="Tell me a bit about your project or opportunity..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSending}
              className="self-start inline-flex items-center gap-2 rounded-full bg-ink dark:bg-paper text-paper dark:text-ink text-sm font-semibold px-7 py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSending ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={15} /> Send message
                </>
              )}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
