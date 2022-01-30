import { Button } from "../Button";
import { Input, Label, Select } from "../Inputs";
import { useMovementsById } from "../../services/getMovementsByID";
import { useEffect, useState } from "react";
import { useEditMovement } from "../../services/editMovements";
import { useCategories } from "../../services/getCategories";
import moment from "moment";
export default function index({ id, onCloseModal }) {
  const { data: categories } = useCategories();
  const editMovement = useEditMovement();
  const getMovementsById = useMovementsById();
  const { data: movement } = getMovementsById;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = async ({ concept, amount, date, category }) => {
    editMovement.mutate({
      id,
      concept,
      amount,
      date: moment(date).format("yyyy-MM-DD"),
      category: parseInt(category),
    });
    onCloseModal();
  };
  useEffect(() => {
    if (id) {
      getMovementsById.mutate({ id: id });
    }
  }, [id]);
  useEffect(() => {
    if (movement) {
      setValue("concept", movement?.rows[0]?.concept);
      setValue("amount", parseFloat(movement?.rows[0]?.amount).toFixed(2));
      setValue("date", movement?.rows[0]?.date);
      setValue("type", movement?.rows[0]?.type);
      setValue("category", movement?.rows[0]?.movements_category?.category?.id);
      console.log(movement?.rows[0]?.movements_category?.category?.id);
    }
  }, [movement]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <Label>Concepto</Label>
        <Input
          placeholder="Ingrese un Concepto"
          name="concept"
          {...register("concept", {
            required: {
              value: false,
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
          disabled
          {...register("type", {
            required: {
              value: false,
              message: "Requerido",
            },
          })}
        >
          <option value="income">Ingresos</option>
          <option value="expense">Gastos</option>
        </Select>
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
        <Button type="submit">Editar</Button>
      </>
    </form>
  );
}
