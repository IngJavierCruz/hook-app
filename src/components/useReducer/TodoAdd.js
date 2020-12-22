import React, { Fragment } from "react";
import useForm from "../../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {

    e.preventDefault();

    if (description.trim().length <= 1) {
        return
    }

    handleAddTodo({
        id: new Date().getTime(),
        description: description,
        done: false,
    });

    reset();

  };


  return (
    <Fragment>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender..."
          onChange={ handleInputChange }
          autoComplete="off"
          value={ description }
        />

        <button
          className="btn btn-outline-primary mt-1 btn-block"
          type="submit"
        >
          Agregar
        </button>
      </form>
      
    </Fragment>
  );
};

export default TodoAdd;
