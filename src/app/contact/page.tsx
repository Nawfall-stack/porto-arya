"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("halo");
  };
  return (
    <div className="min-h-screen py-28">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Web Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            CONTACT
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4">
          {/* card 1 */}
          <form
            onSubmit={handleSubmit}
            className={cn(
              "group relative overflow-hidden rounded-[28px] bg-neutral-900 text-white",
              "w-full p-6",
              "shadow-2xl shadow-black/40",
            )}
          >
            <div className="flex flex-col mb-8">
              <h2 className="text-3xl font-semibold tracking-tight">
                Get In Touch
              </h2>
              <p className="font-normal">
                Send message to us by filling these fields
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label className="mb-1 block text-sm">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded border px-2 py-2 border-accent-foreground"
                />
              </div>

              <div className="flex flex-col ">
                <label className="mb-1 block text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded border px-3 py-2 border-accent-foreground"
                />
              </div>

              <div className="flex flex-col ">
                <label className="mb-1 block text-sm">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded border px-3 py-2 border-accent-foreground"
                />
              </div>

              <div className="flex flex-col ">
                <label className="mb-1 block text-sm">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded border px-3 py-2 border-accent-foreground"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded py-2 border-accent-foreground mt-8 bg-foreground text-background text-sm"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* card 2 */}
          <div
            className={cn(
              "group relative overflow-hidden rounded-[28px] bg-neutral-900",
              "w-full aspect-3/4",
              "shadow-2xl shadow-black/40",
            )}
          >
            {/* ── Gradient overlay ── */}
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/5 to-black/20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
