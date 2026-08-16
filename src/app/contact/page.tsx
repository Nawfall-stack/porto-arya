'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { SiGmail, SiTelegram, SiWhatsapp } from '@icons-pack/react-simple-icons';

interface SocialLink {
  label: string;
  title: string;
  description: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const socials: SocialLink[] = [
  {
    label: 'Telegram',
    title: 'Telegram',
    description: 'Chat via Telegram',
    href: 'https://t.me/username',
    Icon: SiTelegram,
  },
  {
    label: 'Whatsapp',
    title: 'Whatsapp',
    description: 'Fast response via WhatsApp',
    href: 'https://wa.me/6281234567890',
    Icon: SiWhatsapp,
  },
  {
    label: 'Email',
    title: 'Email',
    description: 'Send me an email',
    href: 'mailto:saynaufal55@gmail.com',
    Icon: SiGmail,
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
   const response = await fetch(
  process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!,
  {
    method: "POST",
    body: JSON.stringify(form),
  },
);

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error);
      }

      alert('Pesan berhasil dikirim!');

      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error(error);

      alert('Gagal mengirim pesan.');
    }
  };
  return (
    <div className="min-h-screen py-28">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Web Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">CONTACT</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4">
          {/* card 1 */}
          <form onSubmit={handleSubmit} className={cn('group relative overflow-hidden rounded-[28px] bg-neutral-900 text-white', 'w-full p-6', 'shadow-2xl shadow-black/40')}>
            <div className="flex flex-col mb-8 gap-2">
              <h2 className="text-3xl font-semibold tracking-tight">Get In Touch</h2>
              <p className="font-normal leading-tight">Send message to us by filling these fields</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <label className="mb-1 block text-sm">Full Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full rounded border px-2 py-2 border-accent-foreground" />
              </div>

              <div className="flex flex-col ">
                <label className="mb-1 block text-sm">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded border px-3 py-2 border-accent-foreground" />
              </div>

              <div className="flex flex-col ">
                <label className="mb-1 block text-sm">Phone Number</label>
                <input type="text" name="phone" value={form.phone} onChange={handleChange} className="w-full rounded border px-3 py-2 border-accent-foreground" />
              </div>

              <div className="flex flex-col ">
                <label className="mb-1 block text-sm">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full rounded border px-3 py-2 border-accent-foreground" />
              </div>

              <button type="submit" className="w-full rounded py-2 border-accent-foreground mt-8 bg-foreground text-background text-sm">
                Send Message
              </button>
            </div>
          </form>

          {/* card 2 */}
          <div className={cn('group relative overflow-hidden rounded-[28px] bg-neutral-900 text-white', 'w-full p-6', 'shadow-2xl shadow-black/40 md:h-full')}>
            <div className="flex flex-col mb-8 gap-2">
              <h2 className="text-3xl font-semibold tracking-tight">Via Platform</h2>
              <p className="font-normal leading-tight">Choose the platform you&apos;re most comfortable with</p>
            </div>

            <div className="flex flex-col gap-4">
              {socials.map(({ Icon, ...social }) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-800/40 p-4 transition hover:bg-neutral-800 hover:border-neutral-700"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-8 h-8 lg:w-12 lg:h-12" />
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-white">{social.title}</h3>
                      <p className="text-xs text-neutral-400">{social.description}</p>
                    </div>
                  </div>
                  <span className="text-neutral-400">&gt;</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
