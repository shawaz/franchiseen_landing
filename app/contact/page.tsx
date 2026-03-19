"use client";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-1.5 bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400 text-xs font-bold tracking-widest uppercase rounded-full border border-brand-100 dark:border-brand-800/50 inline-block mb-4">
                Get In Touch
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Let&apos;s Build the <span className="text-brand-600">Future</span> Together
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Have a question about Franchiseen? We&apos;d love to hear from you.
                Reach out and our team will get back to you within 1–2 business days.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Info Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass shadow-premium rounded-3xl p-8 border border-white/20 dark:border-stone-800">
                <h2 className="text-2xl font-bold text-foreground mb-6">Company Information</h2>
                <div className="space-y-6">
                  <div className="group transition-all">
                    <p className="text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">Company Name</p>
                    <p className="text-foreground font-semibold text-lg">House Of Guzarishh FZE LLC</p>
                  </div>
                  <div className="group transition-all">
                    <p className="text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">Registered In</p>
                    <p className="text-foreground font-semibold text-lg">Ajman NuVentures Centre Free Zone, UAE</p>
                  </div>
                  <div className="group transition-all">
                    <p className="text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">Platform</p>
                    <p className="text-foreground font-semibold text-lg">Franchiseen</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900 rounded-3xl p-8 text-white shadow-premium relative overflow-hidden group border border-white/5">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />
                <h2 className="text-2xl font-bold mb-8 relative z-10 font-serif italic">Direct Channels</h2>
                <div className="space-y-6 relative z-10">
                  <a 
                    href="mailto:help@codelude.com" 
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover/item:scale-110 transition-transform border border-white/10">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Email Support</p>
                      <p className="text-lg font-bold tracking-tight">help@codelude.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Our Location</p>
                      <p className="text-lg font-bold tracking-tight">Ajman NuVentures, UAE</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass shadow-premium rounded-3xl p-8 sm:p-10 border border-white/20 dark:border-stone-800"
            >
              <h2 className="text-2xl font-bold text-foreground mb-8 font-serif italic">Send a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const resp = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (resp.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-foreground font-serif italic">Message Received</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-brand-600 font-bold hover:underline mt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-foreground/70 mb-2 px-1">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full px-5 py-4 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-stone-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-foreground/70 mb-2 px-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className="w-full px-5 py-4 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-stone-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-bold text-foreground/70 mb-2 px-1">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="How can we help?"
          className="w-full px-5 py-4 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-stone-400"
        />
      </div>

      <div>
        <label htmlFor="body" className="block text-sm font-bold text-foreground/70 mb-2 px-1">
          Message
        </label>
        <textarea
          id="body"
          name="body"
          rows={5}
          required
          placeholder="Tell us what's on your mind..."
          className="w-full px-5 py-4 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-foreground focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-stone-400 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-5 bg-stone-900 text-white font-bold rounded-2xl hover:bg-black hover:shadow-glow transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Oops! Something went wrong. Please try again or email us directly at help@codelude.com.
        </p>
      )}

      <p className="text-sm text-muted-foreground text-center">
        Our team usually responds within 1–2 business days.
      </p>
    </form>
  );
}
