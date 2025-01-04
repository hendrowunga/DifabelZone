import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const FormLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });

  const VALID_USERNAME = "david";
  const VALID_PASSWORD = "12345";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.username === "" || user.password === "") {
      toast.error("Username dan Password Tidak Boleh Kosong!");
      return;
    }

    if (user.username !== VALID_USERNAME || user.password !== VALID_PASSWORD) {
      toast.error("Username harus dengan nama depan dan password harus 5 digit NPM!");
      return;
    }

    const newUser = {
      ...user,
      loginAt: new Date(),
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    toast.success("Login berhasil!");
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-900">
            Username
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
