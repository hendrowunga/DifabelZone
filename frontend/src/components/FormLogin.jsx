import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const FormLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error saat user mulai mengetik
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form kosong
    let formErrors = {};
    if (user.username === "") formErrors.username = "Username tidak boleh kosong.";
    if (user.password === "") formErrors.password = "Password tidak boleh kosong.";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      toast.error("Mohon isi semua data!");
      return;
    }

    // Ambil data akun yang terdaftar dari localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Cari user yang cocok berdasarkan username dan password
    const registeredUser = users.find(
      (u) => u.name === user.username && u.password === user.password
    );

    if (!registeredUser) {
      toast.error("Username atau password salah!");
      return;
    }

    // Simpan user login ke localStorage
    const loggedInUser = {
      ...registeredUser,
      loginAt: new Date(),
    };
    localStorage.setItem("user", JSON.stringify(loggedInUser));

    // Tampilkan pesan sukses dan arahkan ke dashboard
    toast.success("Login berhasil!");
    setTimeout(() => {
      setUser({ username: "", password: "" }); // Clear input form
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
              value={user.username}
              onChange={handleChange}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
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
              value={user.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
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
