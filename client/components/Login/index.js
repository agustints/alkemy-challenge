import {
  LoginContainer,
  LogoContainer,
  FormContainer,
  LoginFormBox,
  LoginBtn,
  UsernameInput,
  PasswordInput,
  LabelEmail,
  LabelPassword,
  LabelHasAccount,
  RegisterFormBox,
  FormContainerRow,
} from "./styles";
import { useForm } from "react-hook-form";
import { UseLogin } from "../../services/Auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { ThreeDots } from "@agney/react-loading";
import { registerPeople } from "../../services/register";

function index() {
  const router = useRouter();
  const [registro, setRegistro] = useState(false);
  const { mutateAsync: login } = UseLogin();
  let notify = () => toast.success("¡Logueo Exitoso!");
  let notifyRegister = () => toast.success("¡La Persona fue creada con éxito!");
  let notifyError = () => toast.error("¡Usuario y/o Contraseña Incorrectos!");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      let res = await login({
        email: values?.email,
        password: values?.password,
      });
      if (!res.data.error) {
        notify();
        await router.push("/");
        setLoading(false);
      } else {
        notifyError();
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onRegisterSubmit = async (values) => {
    try {
      const { name, lastname, email, password } = values;
      if (name && lastname && email && password) {
        const res = await registerPeople({
          name,
          lastname,
          email,
          password,
        });

        if (!res?.error) {
          notifyRegister();
          setRegistro(false);
        } else {
          notifyError();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginContainer>
      <LogoContainer>
        <img className="logo" src="/login__background.png"></img>
      </LogoContainer>
      <FormContainer>
        {!registro ? (
          <LoginFormBox onSubmit={handleSubmit(onSubmit)}>
            <h1>Ingreso a Alkemy Challenge</h1>
            <p>Servicio de Autentificación</p>
            <LabelEmail>
              Email <span>*</span>{" "}
              <span>
                {errors?.email?.message ? errors?.email?.message : null}
              </span>
            </LabelEmail>
            <UsernameInput
              autocomplete="on"
              style={{ outlineColor: errors?.email ? "red" : null }}
              placeholder="Ingresa tu Email"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Requerido",
                },
              })}
            />

            <LabelPassword>
              Contraseña <span>*</span>{" "}
              <span>
                {errors?.password?.message ? errors?.password?.message : null}
              </span>
            </LabelPassword>

            <PasswordInput
              style={{ outlineColor: errors?.password ? "red" : null }}
              placeholder="Ingresa tu Contraseña"
              type="password"
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Requerida",
                },
              })}
            />

            {loading ? (
              <LoginBtn>
                <ThreeDots
                  width="40"
                  style={{
                    fontWeigth: "bold",
                    color: "white",
                  }}
                />
              </LoginBtn>
            ) : (
              <LoginBtn type="submit">
                <b>INGRESAR</b>
              </LoginBtn>
            )}
            <LabelHasAccount onClick={() => setRegistro(true)}>
              ¿No tienes cuenta?
            </LabelHasAccount>
          </LoginFormBox>
        ) : (
          <RegisterFormBox onSubmit={handleSubmit(onRegisterSubmit)}>
            <h1>Registro en Alkemy Challenge</h1>
            <p>Servicio de Autentificación</p>
            <FormContainerRow>
              <LabelEmail>
                Nombres *{" "}
                <span>
                  {errors?.name?.message ? errors?.name?.message : null}
                </span>
              </LabelEmail>
              <UsernameInput
                style={{ outlineColor: errors?.name ? "red" : null }}
                placeholder="Introduce tus nombres"
                name="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Requerido",
                  },
                })}
              />
              <LabelEmail>
                Apellidos *{" "}
                <span>
                  {errors?.lastname?.message ? errors?.lastname?.message : null}
                </span>
              </LabelEmail>
              <UsernameInput
                style={{ outlineColor: errors.lastname ? "red" : null }}
                placeholder="Introduce tus apellidos"
                name="lastname"
                {...register("lastname", {
                  required: {
                    value: true,
                    message: "Requerido",
                  },
                })}
              />
              <LabelEmail>
                Email *{" "}
                <span>
                  {errors?.email?.message ? errors?.email?.message : null}
                </span>
              </LabelEmail>
              <UsernameInput
                style={{ outlineColor: errors?.email ? "red" : null }}
                placeholder="Introduce tu email"
                name="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Requerido",
                  },
                })}
              />
              <LabelPassword>
                Contraseña *{" "}
                <span>
                  {errors?.password?.message ? errors?.password?.message : null}
                </span>
              </LabelPassword>
              <PasswordInput
                style={{ outlineColor: errors?.password ? "red" : null }}
                placeholder="Contraseña"
                type="password"
                name="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Requerida",
                  },
                })}
              />
            </FormContainerRow>
            {loading ? (
              <LoginBtn>
                <ThreeDots
                  width="40"
                  style={{
                    fontWeigth: "bold",
                    color: "white",
                  }}
                />
              </LoginBtn>
            ) : (
              <>
                <p className="terminos__condiciones">
                  Al continuar aceptas los{" "}
                  <Link href="/terminos-y-condiciones">
                    <b>Términos y Condiciones</b>
                  </Link>{" "}
                  y que has leído el aviso de privacidad
                </p>

                <LoginBtn type="submit">
                  <b>REGISTRARME</b>
                </LoginBtn>
              </>
            )}
            <LabelHasAccount onClick={() => setRegistro(false)}>
              ¿Ya tienes cuenta?
            </LabelHasAccount>
          </RegisterFormBox>
        )}
      </FormContainer>
    </LoginContainer>
  );
}
export default index;
