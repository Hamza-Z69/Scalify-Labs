"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

const projectTypes = [
  "Recrutement de franchisés",
  "Trafic local points de vente",
  "Accompagnement digital",
  "Autre",
];

const budgetOptions = [
  "< 10 000 MAD/mois",
  "10 000 - 30 000 MAD/mois",
  "30 000 - 100 000 MAD/mois",
  "> 100 000 MAD/mois",
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
  budget: string;
  honeypot: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  message: "",
  budget: "",
  honeypot: "",
};

const inputClasses =
  "w-full rounded-[10px] border px-4 py-3 text-sm outline-none transition-colors duration-200";

const inputStyle: React.CSSProperties = {
  background: "rgba(232,134,42,0.04)",
  borderColor: "rgba(232,134,42,0.10)",
  color: "#f0ece5",
};

const focusBorder = "rgba(232,134,42,0.30)";
const restBorder = "rgba(232,134,42,0.10)";

function handleFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = focusBorder;
}
function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = restBorder;
}

const selectChevron = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(240,236,229,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`;

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Le nom est requis.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) return;

    if (!validate()) return;

    console.log("Form submitted:", formData);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-4 rounded-2xl p-10 text-center"
        style={{
          background: "rgba(34, 197, 94, 0.04)",
          border: "1px solid rgba(34, 197, 94, 0.15)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: "rgba(34, 197, 94, 0.12)" }}
        >
          <CheckCircle className="h-8 w-8" style={{ color: "#22c55e" }} />
        </div>
        <h3 className="font-serif text-xl font-bold" style={{ color: "#f0ece5" }}>
          Demande envoyée avec succès !
        </h3>
        <p className="g-text max-w-sm">
          Merci pour votre message. Notre équipe vous répondra sous 24 heures.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-hp">Ne pas remplir</label>
        <input
          id="contact-hp"
          type="text"
          name="honeypot"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={handleChange}
        />
      </div>

      {/* Nom */}
      <div>
        <label htmlFor="fullName" className="sf-label">
          Nom <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          autoComplete="name"
          placeholder="Votre nom complet"
          value={formData.fullName}
          onChange={handleChange}
          className={inputClasses}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {errors.fullName && (
          <p className="mt-1 text-xs" style={{ color: "#ef4444" }} role="alert">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email pro */}
      <div>
        <label htmlFor="email" className="sf-label">
          Email pro <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="vous@entreprise.com"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {errors.email && (
          <p className="mt-1 text-xs" style={{ color: "#ef4444" }} role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <label htmlFor="phone" className="sf-label">
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+212 6XX XXX XXX"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      {/* Enseigne */}
      <div>
        <label htmlFor="company" className="sf-label">
          Enseigne
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Nom de votre enseigne"
          value={formData.company}
          onChange={handleChange}
          className={inputClasses}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      {/* Type de projet */}
      <div>
        <label htmlFor="projectType" className="sf-label">
          Type de projet
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className={inputClasses}
          style={{
            ...inputStyle,
            appearance: "none",
            backgroundImage: selectChevron,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 14px center",
            paddingRight: "40px",
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="" style={{ background: "#1a1510", color: "rgba(240,236,229,0.25)" }}>
            Sélectionnez un type de projet
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type} style={{ background: "#1a1510", color: "#f0ece5" }}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="sf-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Décrivez brièvement votre projet et vos objectifs..."
          value={formData.message}
          onChange={handleChange}
          className={inputClasses}
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="sf-label">
          Budget indicatif{" "}
          <span className="g-text-muted font-normal">(optionnel)</span>
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className={inputClasses}
          style={{
            ...inputStyle,
            appearance: "none",
            backgroundImage: selectChevron,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 14px center",
            paddingRight: "40px",
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="" style={{ background: "#1a1510", color: "rgba(240,236,229,0.25)" }}>
            Sélectionnez une fourchette
          </option>
          {budgetOptions.map((option) => (
            <option key={option} value={option} style={{ background: "#1a1510", color: "#f0ece5" }}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 font-semibold rounded-full cursor-pointer text-[15px] transition-all duration-300"
        style={{
          background: "#E8862A",
          color: "#ffffff",
          padding: "14px 32px",
          border: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = "brightness(1.15)";
          e.currentTarget.style.boxShadow =
            "0 0 24px rgba(232,134,42,0.4), 0 0 48px rgba(232,134,42,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = "brightness(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <Send className="h-4 w-4" />
        Envoyer ma demande
      </button>

      {/* Scoped styles */}
      <style>{`
        .sf-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(240,236,229,0.55);
          margin-bottom: 6px;
        }
        form input::placeholder,
        form textarea::placeholder {
          color: rgba(240,236,229,0.25) !important;
        }
        form select {
          color-scheme: dark;
        }
      `}</style>
    </form>
  );
}
