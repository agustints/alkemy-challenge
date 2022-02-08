import { Button } from "../Button";
import { Input, Label, Select } from "../Inputs";
import { FormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { useCreateMovement } from "../../services/createMovements";
import Swal from "sweetalert2";
import { useCategories } from "../../services/getCategories";
export default function index({ onCloseModal, refetch }) {
  const { data: categories } = useCategories();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createMovement = useCreateMovement();
  const onSubmit = async ({ concept, amount, date, type, category }) => {
    console.log(category);
    createMovement.mutate({
      concept,
      amount,
      date,
      type,
      category: parseInt(category),
      refetch,
    });
    onCloseModal();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "La Operación fue creada con éxito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>Concepto</Label>
      <Input
        placeholder="Ingrese un Concepto"
        name="concept"
        {...register("concept", {
          required: {
            value: true,
            message: "Requerido",
          },
        })}
      />
      <Label>Monto</Label>
      <Input
        type="number"
        placeholder="Ingrese un Monto"
        name="amount"
        {...register("amount", {
          required: {
            value: true,
            message: "Requerido",
          },
        })}
      />
      <Label>Fecha</Label>
      <Input
        type="date"
        placeholder="Ingrese una Fecha"
        name="date"
        {...register("date", {
          required: {
            value: true,
            message: "Requerido",
          },
        })}
      />
      <Label>Tipo</Label>
      <Select
        name="type"
        {...register("type", {
          required: {
            value: true,
            message: "Requerido",
          },
        })}
      >
        <option value="income">Ingresos</option>
        <option value="expense">Gastos</option>
      </Select>
      <Label>Tipo</Label>
      <Select
        name="category"
        {...register("category", {
          required: {
            value: true,
            message: "Requerido",
          },
        })}
      >
        {categories?.rows?.map((category) => (
          <>
            <option value={category?.id}>{category?.name}</option>
          </>
        ))}
      </Select>
      <Button type="submit">Crear</Button>
    </form>
  );
}
