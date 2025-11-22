import { useState } from 'react';

type Path = 'pledge' | 'volunteer' | 'project' | 'subscribe';

const options: { label: string; value: Path; description: string }[] = [
  {
    value: 'pledge',
    label: 'Take the Perjanjian Bawana (Pledge)',
    description: 'Make a covenant to act as guardian and healer.'
  },
  {
    value: 'volunteer',
    label: 'Volunteer my skills',
    description: 'Offer specific talents to ongoing circles and missions.'
  },
  {
    value: 'project',
    label: 'Propose a project / collaboration',
    description: 'Co-create a new program rooted in local wisdom.'
  },
  {
    value: 'subscribe',
    label: 'Just subscribe to updates',
    description: 'Receive monthly field notes from guardians everywhere.'
  }
];

export default function GetInvolvedForm() {
  const [path, setPath] = useState<Path>('pledge');

  return (
    <form
      className="bg-white border border-accent-earth/70 shadow-card rounded-3xl p-6 md:p-10 space-y-6"
      method="POST"
      action="https://formspree.io/f/mgvqkekk"
    >
      <input type="hidden" name="path" value={path} />
      <input type="hidden" name="_next" value="/thank-you" />
      <div>
        <label className="block text-sm font-heading text-text mb-2" htmlFor="full-name">
          Full name
        </label>
        <input
          id="full-name"
          name="name"
          type="text"
          required
          className="w-full border border-accent-earth/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-heading text-text mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-accent-earth/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
          placeholder="you@email.com"
        />
      </div>
      <fieldset className="space-y-3">
        <legend className="text-sm font-heading text-text mb-2">
          How would you like to get involved?
        </legend>
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-start gap-3 border rounded-2xl px-4 py-3 cursor-pointer transition-colors ${
              path === option.value ? 'border-brand-green bg-brand-green/5' : 'border-accent-earth/60'
            }`}
          >
            <input
              type="radio"
              name="pathSelection"
              value={option.value}
              checked={path === option.value}
              onChange={() => setPath(option.value)}
              className="mt-1"
            />
            <span>
              <span className="block font-heading text-text">{option.label}</span>
              <span className="block text-sm text-text/70">{option.description}</span>
            </span>
          </label>
        ))}
      </fieldset>
      {path === 'volunteer' && (
        <div>
          <label className="block text-sm font-heading text-text mb-2" htmlFor="skills">
            Skills you wish to offer
          </label>
          <textarea
            id="skills"
            name="skills"
            rows={4}
            className="w-full border border-accent-earth/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
            placeholder="Design, agroforestry, permaculture facilitation..."
          />
        </div>
      )}
      {path === 'project' && (
        <div>
          <label className="block text-sm font-heading text-text mb-2" htmlFor="proposal">
            Project proposal
          </label>
          <textarea
            id="proposal"
            name="proposal"
            rows={4}
            className="w-full border border-accent-earth/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
            placeholder="Share the vision, partners, and needs."
          />
        </div>
      )}
      {path === 'pledge' && (
        <div>
          <label className="block text-sm font-heading text-text mb-2" htmlFor="message">
            Optional message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full border border-accent-earth/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green"
            placeholder="Share why the covenant calls to you."
          />
        </div>
      )}
      {path === 'subscribe' && (
        <p className="text-sm text-text/70">
          We will only send essential field notes and opportunities. No noise, only resonance.
        </p>
      )}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-brand-green to-brand-green-light text-white font-heading text-base py-3 rounded-xl hover:scale-[1.01] transition-transform"
      >
        Send my commitment
      </button>
    </form>
  );
}
