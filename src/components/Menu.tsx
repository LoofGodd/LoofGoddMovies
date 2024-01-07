import MenuItem from "./MenuItem";

function Menu() {
  return (
    <ul className="text-dar flex w-full flex-col items-start justify-start gap-y-2 rounded-lg bg-primary px-4 py-2 text-lg font-semibold md:w-40">
      <MenuItem heading="Home" href="/" />
      <MenuItem heading="Movie" href="/movies" />
    </ul>
  );
}

export default Menu;
