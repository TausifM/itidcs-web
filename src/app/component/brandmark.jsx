export default function BrandMark() {
  return (
    <span className="brand-lockup" aria-hidden="true">
      <span className="brand-symbol">
        <svg viewBox="0 0 38 38" fill="none">
          <path d="M8 24.5 19 7l11 17.5H8Z" fill="url(#brand-fill)" />
          <path d="M13 28h12" stroke="#1f2940" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="29.5" cy="9" r="4.5" fill="#baf2d1" stroke="white" strokeWidth="1.5" />
          <defs><linearGradient id="brand-fill" x1="9" y1="9" x2="28" y2="27" gradientUnits="userSpaceOnUse"><stop stopColor="#aa9bff" /><stop offset="1" stopColor="#685bd2" /></linearGradient></defs>
        </svg>
      </span>
      <span className="brand-type"><strong>ITIDCS<span>.</span></strong><small>Technology with purpose</small></span>
    </span>
  );
}
