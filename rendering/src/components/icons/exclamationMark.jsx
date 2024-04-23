const sizes = {
  sm: 10,
  md: 20,
  lg: 40,
};

/**
 * @param {{
 * size: keyof(sizes)
 * }} param0
 * @returns
 */
export function ExclamationMark({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      width={sizes[size]}
      height={sizes[size]}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
      />
    </svg>
  );
}
