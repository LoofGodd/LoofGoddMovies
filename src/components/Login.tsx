import { FormEvent, useState } from "react";
import Button from "./Button";
import useUser from "../store";
import { useNavigate } from "react-router-dom";

function Login() {
  const setUser = useUser((s) => s.setUser);
  const [user, setUSER] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(user);
    if (user !== "") navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="grid h-screen w-screen place-items-center bg-slate-300"
    >
      <div className="flex flex-col gap-y-6 border border-slate-500 bg-slate-200 px-10 py-4 shadow-lg shadow-slate-400">
        <label className="text-4xl uppercase">Please Enter your name</label>
        <input
          type="text"
          placeholder="Your name"
          className="px-6 py-4 outline-none "
          onChange={(e) => setUSER(e.target.value)}
        />
        <Button size="md" className="text-slate-200">
          Enter
        </Button>
      </div>
    </form>
  );
}

export default Login;
