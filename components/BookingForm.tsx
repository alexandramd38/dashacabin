"use client";
import { useState } from "react";
import type { Dict } from "@/lib/content";
import { site } from "@/lib/site";

export default function BookingForm({ d }: { d: Dict }) {
  const b = d.booking;
  const [form, setForm] = useState({ name: "", email: "", phone: "", checkin: "", checkout: "", guests: "2", message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const subject = encodeURIComponent(`Reservation request — ${form.checkin} → ${form.checkout}`);
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCheck-in: ${form.checkin}\nCheck-out: ${form.checkout}\nGuests: ${form.guests}\n\n${form.message}`
  );

  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      action={site.formspree}
      method="POST"
      onSubmit={(e) => {
        if (site.formspree.includes("YOUR_FORM_ID")) {
          e.preventDefault();
          window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
        }
      }}
    >
      <div>
        <label htmlFor="bf-name" className="mb-1 block text-sm font-medium">{b.formName}</label>
        <input id="bf-name" name="name" required className="input" value={form.name} onChange={set("name")} />
      </div>
      <div>
        <label htmlFor="bf-email" className="mb-1 block text-sm font-medium">{b.formEmail}</label>
        <input id="bf-email" name="email" type="email" required className="input" value={form.email} onChange={set("email")} />
      </div>
      <div>
        <label htmlFor="bf-phone" className="mb-1 block text-sm font-medium">{b.formPhone}</label>
        <input id="bf-phone" name="phone" type="tel" className="input" value={form.phone} onChange={set("phone")} />
      </div>
      <div>
        <label htmlFor="bf-guests" className="mb-1 block text-sm font-medium">{b.formGuests}</label>
        <select id="bf-guests" name="guests" className="input" value={form.guests} onChange={set("guests")}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="bf-in" className="mb-1 block text-sm font-medium">{b.formCheckin}</label>
        <input id="bf-in" name="checkin" type="date" required className="input" value={form.checkin} onChange={set("checkin")} />
      </div>
      <div>
        <label htmlFor="bf-out" className="mb-1 block text-sm font-medium">{b.formCheckout}</label>
        <input id="bf-out" name="checkout" type="date" required className="input" value={form.checkout} onChange={set("checkout")} />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="bf-msg" className="mb-1 block text-sm font-medium">{b.formMessage}</label>
        <textarea id="bf-msg" name="message" rows={4} className="input" value={form.message} onChange={set("message")} />
      </div>
      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-dark">{b.formSubmit}</button>
        <a
          href={`https://wa.me/${site.whatsapp}?text=${subject}`}
          target="_blank"
          rel="noopener"
          className="btn border border-gold/60 text-cream hover:bg-gold hover:text-forest-dark"
        >
          {b.whatsappCta}
        </a>
      </div>
      <p className="md:col-span-2 text-sm text-ink/60">{b.formNote}</p>
    </form>
  );
}
