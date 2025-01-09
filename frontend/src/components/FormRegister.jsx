import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(null); // Reset error saat pengguna mengetik ulang
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, confirmPassword } = formData;

    // Validasi form kosong
    if (!name || !password || !confirmPassword) {
      setError("Semua field harus diisi!");
      return;
    }

    // Validasi password dan confirmPassword
    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok!");
      return;
    }

    // Cek apakah username sudah terdaftar
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.name === name);

    if (userExists) {
      setError("Username sudah digunakan, pilih username lain!");
      return;
    }

    // Simpan data ke localStorage
    const newUser = { name, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    toast.success("Akun berhasil dibuat!");
    setTimeout(() => {
      navigate("/login"); // Arahkan ke halaman login
    }, 1000);
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Username
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
            Confirm Password
          </label>
          <div className="mt-2">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div>
          <button
            type="submit"
            className="submit-btn flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-normal leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            SIGN UP
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Login here
        </a>
      </p>
    </div>
  );
};

export default SignupForm;
