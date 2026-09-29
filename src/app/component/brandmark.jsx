export default function BrandMark() {
  return (
    <span className="brand-lockup" aria-hidden="true">
      <span className="brand-symbol">
        <svg viewBox="0 0 44 44" fill="none">
          <path d="M22 3.5 38.5 13v18L22 40.5 5.5 31V13L22 3.5Z" fill="url(#brand-fill)" stroke="#fff" strokeWidth="1.4" />
          <path d="m14 25 6.2-10 9.8 15M16.5 25h11" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="30.2" cy="14.4" r="3.4" fill="#baf2d1" stroke="#fff" strokeWidth="1.4" />
          <path d="M9.5 32.5 22 40l12.5-7.5" stroke="#6e61d7" strokeWidth="1.2" opacity=".7" />
          <defs><linearGradient id="brand-fill" x1="7" y1="7" x2="37" y2="38" gradientUnits="userSpaceOnUse"><stop stopColor="#c4bbff" /><stop offset=".52" stopColor="#7668df" /><stop offset="1" stopColor="#403791" /></linearGradient></defs>
        </svg>
      </span>
      <span className="brand-type"><strong>ITIDCS<span>.</span></strong><small>Technology with purpose</small></span>
    </span>
  );
}
