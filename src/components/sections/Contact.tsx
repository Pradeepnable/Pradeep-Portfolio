import React, { useState } from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Button from "../ui/Button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare form data for Netlify
      const formData = new FormData(e.target as HTMLFormElement);
      formData.append("form-name", "contact"); // Must match your form's name attribute

      // Submit to Netlify
      const response = await fetch("/", {
        method: "POST",
        body: new URLSearchParams(formData as any).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form after successful submission
        setFormState({ name: "", email: "", message: "" });
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      // Reset status after 5 seconds (whether success or error)
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a question or want to work together? Send me a message!"
      className="bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Information
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Feel free to reach out to me for any inquiries or opportunities. I'm
            always excited to connect and explore new projects.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 bg-indigo-100 dark:bg-gray-700 rounded-full mr-4">
                <Mail className="w-5 h-5 text-indigo-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Email
                </h4>
                <a
                  href="mailto:pradpydev@gmail.com"
                  className="text-indigo-600 dark:text-purple-400 hover:underline"
                >
                  pradpydev@gmail.com
                </a>
              </div>
            </div>

            {/* <div className="flex items-start">
              <div className="p-3 bg-indigo-100 dark:bg-gray-700 rounded-full mr-4">
                <Phone className="w-5 h-5 text-indigo-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Social</h4>
                <p className="text-gray-600 dark:text-gray-400">+91 9876543210</p>
              </div>
            </div> */}

            <div className="flex items-start">
              <div className="p-3 bg-indigo-100 dark:bg-gray-700 rounded-full mr-4">
                <MapPin className="w-5 h-5 text-indigo-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-400">India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Send Me a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              custom={0}
              variants={formItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your name"
                disabled={isSubmitting || submitStatus === "success"}
              />
            </motion.div>

            <motion.div
              custom={1}
              variants={formItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your email address"
                disabled={isSubmitting || submitStatus === "success"}
              />
            </motion.div>

            <motion.div
              custom={2}
              variants={formItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your message"
                disabled={isSubmitting || submitStatus === "success"}
              />
            </motion.div>

            <motion.div
              custom={3}
              variants={formItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6"
            >
              <Button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="w-full"
                variant="primary"
                icon={isSubmitting ? null : <Send className="w-4 h-4" />}
              >
                {isSubmitting
                  ? "Sending..."
                  : submitStatus === "success"
                  ? "Message Sent"
                  : "Send Message"}
              </Button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>
                    Thank you! Your message has been sent successfully.
                  </span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-md flex items-center"
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span>
                    There was an error sending your message. Please try again.
                  </span>
                </motion.div>
              )}
            </motion.div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
