export default function Button({ children, onPress }) {
  return (
    <button
      className=" hover:text-customOrange transition-colors duration-300 ease-in-out"
      onClick={onPress}
    >
      {children}
    </button>
  );
}
