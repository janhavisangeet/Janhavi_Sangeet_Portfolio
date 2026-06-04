"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCircleCheckFilled, IconSend } from "@tabler/icons-react";

const defaultFormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple client-side validation
    let hasError = false;
    const newFormState = { ...formData };

    if (!formData.name.value.trim()) {
      newFormState.name.error = "Name is required";
      hasError = true;
    }
    if (!formData.email.value.trim() || !formData.email.value.includes("@")) {
      newFormState.email.error = "A valid email is required";
      hasError = true;
    }
    if (!formData.message.value.trim()) {
      newFormState.message.error = "Message cannot be empty";
      hasError = true;
    }

    if (hasError) {
      setFormData(newFormState);
      return;
    }

    setIsSubmitting(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form submitted:", {
      name: formData.name.value,
      email: formData.email.value,
      message: formData.message.value,
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(defaultFormState);
  };

  return (
    <div className="relative w-full max-w-xl">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="flex flex-col items-center justify-center p-8 text-center bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl"
          >
            <IconCircleCheckFilled className="h-12 w-12 text-emerald-500 dark:text-emerald-400 mb-4 animate-bounce" />
            <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-2">
              Message Sent!
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              Thank you for reaching out. I&apos;ve received your message and will get back to you as soon as possible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 active:scale-95"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`bg-neutral-50 dark:bg-neutral-900/50 border ${
                    formData.name.error
                      ? "border-red-500 focus:ring-red-500/20"
                      : "border-neutral-200 dark:border-neutral-800 focus:ring-sky-500/20"
                  } focus:outline-none focus:ring-2 px-3 py-2.5 rounded-lg text-sm text-neutral-800 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-600 w-full transition-all duration-200`}
                  value={formData.name.value}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      name: { value: e.target.value, error: "" },
                    });
                  }}
                />
                {formData.name.error && (
                  <p className="text-xs text-red-500 mt-1 pl-1">
                    {formData.name.error}
                  </p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`bg-neutral-50 dark:bg-neutral-900/50 border ${
                    formData.email.error
                      ? "border-red-500 focus:ring-red-500/20"
                      : "border-neutral-200 dark:border-neutral-800 focus:ring-sky-500/20"
                  } focus:outline-none focus:ring-2 px-3 py-2.5 rounded-lg text-sm text-neutral-800 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-600 w-full transition-all duration-200`}
                  value={formData.email.value}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: { value: e.target.value, error: "" },
                    });
                  }}
                />
                {formData.email.error && (
                  <p className="text-xs text-red-500 mt-1 pl-1">
                    {formData.email.error}
                  </p>
                )}
              </div>
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className={`bg-neutral-50 dark:bg-neutral-900/50 border ${
                  formData.message.error
                    ? "border-red-500 focus:ring-red-500/20"
                    : "border-neutral-200 dark:border-neutral-800 focus:ring-sky-500/20"
                } focus:outline-none focus:ring-2 px-3 py-2.5 rounded-lg text-sm text-neutral-800 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-600 w-full transition-all duration-200`}
                value={formData.message.value}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    message: { value: e.target.value, error: "" },
                  });
                }}
              />
              {formData.message.error && (
                <p className="text-xs text-red-500 mt-1 pl-1">
                  {formData.message.error}
                </p>
              )}
            </div>
            <button
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 text-sm shadow-md"
              type="submit"
            >
              {isSubmitting ? (
                <div className="h-4 w-4 border-2 border-neutral-300 dark:border-neutral-700 border-t-white dark:border-t-neutral-900 rounded-full animate-spin" />
              ) : (
                <>
                  <span>Send Message</span>
                  <IconSend className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

