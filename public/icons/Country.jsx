export function Country({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3rem"
      height="3rem"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.125 15.625L10 18.125L8.75 22.5L10 26.25M21.25 25.625L20.625 22.5L17.5 21.25V16.875L21.25 15.625L26.875 16.25M23.75 6.875L23.125 8.75L18.75 9.375V13.125L21.875 11.875H24.375L26.875 13.125M3.125 13.125L6.25 10.625L9.375 10L11.875 6.25L10.625 3.75"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
