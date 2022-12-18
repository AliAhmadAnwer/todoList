export default function Radio({ p }){
  return (
    <svg
      {...p}
      width="9"
      height="10"
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="4.5"
        cy="5"
        rx="4.5"
        ry="5"
        fill="url(#paint0_linear_1_168)"
        fillOpacity="0.2"
      />
      <ellipse
        cx="4.50078"
        cy="5.0493"
        rx="2.7"
        ry="2.85789"
        fill="url(#paint1_linear_1_168)"
        fillOpacity="0.7"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_168"
          x1="0.332031"
          y1="-0.334873"
          x2="9.8991"
          y2="7.95048"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3477A" />
          <stop offset="1" stopColor="#884CB2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_168"
          x1="2"
          y1="2"
          x2="7.5"
          y2="7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3477A" />
          <stop offset="1" stopColor="#884CB2" />
        </linearGradient>
      </defs>
    </svg>
  );
};
