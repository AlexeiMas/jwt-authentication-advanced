import { FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ERoute } from "@/routes/constants"
import { useRegisterMutation } from "@/entities/user/api/userApi"
import { ERole } from "@/entities/user/api/typesApi"
import { useForm } from "react-hook-form"
import { clsx } from "clsx"

type TForm = {
  email: string
  password: string
  role: ERole
}

const RegisterPage = () => {
  const {
    watch,
    register,
    formState: { errors, isValid },
  } = useForm<TForm>({
    mode: "onChange",
    reValidateMode: "onBlur",
  })
  const form = watch()
  const navigate = useNavigate()
  const [logUp] = useRegisterMutation()

  const onRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isValid) {
      logUp(form).then((res) => {
        if (res.hasOwnProperty("data")) {
          navigate(ERoute.PostsPage)
        }
      })
    }
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <div className="text-xl">Register Page</div>
      <form
        className="flex flex-col gap-2 w-[300px]"
        onSubmit={onRegister}
        id="logup-form"
      >
        <label>
          <input
            className={clsx("border p-2 w-full", {
              "border-red-600 placeholder:text-red-600": errors.email,
            })}
            id="email"
            type="email"
            placeholder="Email"
            required
            {...register("email", {
              required: "Field is important for filling",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not watch email format",
              },
              maxLength: {
                value: 25,
                message: "max length is 25",
              },
            })}
          />
          {errors.email && (
            <span role="alert" className="text-red-600 px-1 text-sm">
              {errors.email.message}
            </span>
          )}
        </label>
        <label>
          <input
            className={clsx("border p-2 w-full", {
              "border-red-600 placeholder:text-red-600": errors.password,
            })}
            id="password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Field is important for filling",
              minLength: {
                value: 3,
                message: "min length is 3",
              },
              maxLength: {
                value: 50,
                message: "max length is 50",
              },
            })}
          />
          {errors.password && (
            <span role="alert" className="text-red-600 px-1 text-sm ">
              {errors.password.message}
            </span>
          )}
        </label>
        <div>
          <label
            htmlFor="roleSelect"
            className="block text-sm font-medium text-gray-700"
          >
            Select Role
          </label>
          <select
            id="roleSelect"
            // name="role"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:border-black-500 focus:ring focus:ring-black"
            {...register("role", {
              required: "Field is important for filling",
            })}
          >
            {Object.entries(ERole).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
          {errors.role && (
            <span role="alert" className="text-red-600 px-1 text-sm ">
              {errors.role.message}
            </span>
          )}
        </div>
      </form>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-50 disabled:pointer-events-none"
        type={"submit"}
        disabled={!isValid}
        form="logup-form"
      >
        Register
      </button>
      <Link
        className="text-center text-sm hover:underline hover:underline-offset-4"
        to={ERoute.LoginPage}
      >
        Have account? Log in
      </Link>
    </div>
  )
}

export default RegisterPage
