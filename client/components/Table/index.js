import moment from "moment";

import { getMovements, useMovements } from "../../services/getMovements";
import {
  Table,
  TableContainer,
  TableScroll,
  TableDetails,
  TableBar,
  CustomOptions,
  CustomBackgroundTrash,
  CustomBackgroundCheck,
  EditContainer,
  NewOperationBtn,
  TableDescription,
  ErrorContainer,
} from "./styles";
import { FaPencilAlt, FaPlusSquare, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Form from "../Form";
import { Modal } from "react-responsive-modal";
import { useDeleteMovement } from "../../services/deleteMovements";
import { CustomBtn } from "../Containers/styles";
import EditForm from "../EditForm";
import { Select } from "../Inputs";
import { useCategories } from "../../services/getCategories";
import { useQuery } from "react-query";
export default function index() {
  const [id, setID] = useState(null);
  const [category, setCategory] = useState(0);

  const { data: categories } = useCategories();
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const deleteMovement = useDeleteMovement();
  const {
    data: movements,
    isFetching,
    isLoading,
    refetch,
  } = useQuery(["getMovements", null, category], getMovements, {
    enabled: !!category,
  });

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
    setID(null);
    setEdit(false);
  };
  useEffect(() => {
    refetch();
  }, []);

  return (
    <TableContainer>
      <Modal edit={edit} open={open} onClose={onCloseModal} center>
        {!edit ? (
          <EditContainer>
            <h1>Nueva Operación</h1>
            <Form onCloseModal={onCloseModal} refetch={refetch} />
          </EditContainer>
        ) : (
          <EditContainer>
            <h1>Editar Operación</h1>
            <EditForm onCloseModal={onCloseModal} id={id} refetch={refetch} />
          </EditContainer>
        )}
      </Modal>
      <TableDetails>
        <TableBar>
          <h1>Mis Operaciones</h1>{" "}
          <NewOperationBtn
            onClick={() => {
              onOpenModal();
            }}
          >
            <FaPlusSquare />
          </NewOperationBtn>
        </TableBar>
        <TableDescription>
          <span></span>
          <p>📢 Listado de Ingresos y Egresos de Dinero 🎉</p>
          <Select onChange={(e) => setCategory(parseInt(e.target.value))}>
            <option value={0}>Todas</option>
            {categories?.rows?.map((category) => {
              return <option value={category?.id}>{category?.name}</option>;
            })}
          </Select>
        </TableDescription>
      </TableDetails>

      <TableScroll>
        <Table>
          <thead>
            <tr>
              <th style={{ width: "40%" }}>CONCEPTO</th>
              <th style={{ width: "15%" }}>MONTO</th>
              <th style={{ width: "15%" }}>FECHA</th>
              <th style={{ width: "10%" }}>TIPO</th>
              <th style={{ width: "10%" }}>CATEGORÍA</th>
              <th style={{ width: "10%" }}>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {movements
              ? movements?.rows?.map((movement) => {
                  return (
                    <tr>
                      <td>{movement?.concept}</td>
                      <td>{parseFloat(movement?.amount).toFixed(2)}</td>
                      <td>{moment(movement?.date).format("DD/MM/yyyy")}</td>
                      <td>
                        {movement?.type == "income" ? "Ingreso" : "Egreso"}
                      </td>
                      <td>{movement?.movements_category?.category?.name}</td>
                      <td>
                        <CustomOptions>
                          <CustomBackgroundCheck
                            onClick={() => {
                              setID(movement?.id);
                              setEdit(true);
                              onOpenModal();
                            }}
                          >
                            <FaPencilAlt />
                          </CustomBackgroundCheck>
                          <CustomBackgroundTrash
                            onClick={() => {
                              Swal.fire({
                                title: "¿Eliminar Operación?",
                                icon: "question",
                                showCancelButton: true,
                                confirmButtonText: "Si, eliminar!",
                                cancelButtonText: `Cancelar`,
                                cancelButtonColor: "#d33",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  deleteMovement.mutate({ id: movement?.id });
                                  Swal.fire("¡Eliminado!", "", "success");
                                }
                              });
                            }}
                          >
                            <FaTrash />
                          </CustomBackgroundTrash>
                        </CustomOptions>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
        {movements && movements?.error && !isFetching && !isLoading && (
          <ErrorContainer>
            <h1>¡No se encontraron operaciones!</h1>
          </ErrorContainer>
        )}
      </TableScroll>
    </TableContainer>
  );
}
