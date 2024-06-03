import axios from "axios";
import React, { useEffect, useRef } from "react";
import Button from '../Button'
import './styles.css';
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 15px #ccc;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 120px;
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  border: 0.2px solid #ccc;
  font-weight: 400;
`;

const Index = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.name.value = onEdit.name;
      user.email.value = onEdit.email;
      user.tel.value = onEdit.tel;
      user.birthday.value = onEdit.birthday;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.name.value ||
      !user.email.value ||
      !user.tel.value ||
      !user.birthday.value
    ) {
      return toast.warn("Fill in all the fields!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:3000/" + onEdit.id, {
          name: user.name.value,
          email: user.email.value,
          tel: user.tel.value,
          birthday: user.birthday.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:3000", {
          name: user.name.value,
          email: user.email.value,
          tel: user.tel.value,
          birthday: user.birthday.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.name.value = "";
    user.email.value = "";
    user.tel.value = "";
    user.birthday.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <div className="input_area">
        <span>Name</span>
        <Input name="name" />
      </div>
      <div className="input_area">
        <span>E-mail</span>
        <Input name="email" type="email" />
      </div>
      <div className="input_area">
        <span>Tel</span>
        <Input name="tel" />
      </div>
      <div className="input_area">
        <span>Birthday</span>
        <Input name="birthday" type="date" />
      </div>

      <Button />
    </FormContainer>
  );
};

export default Index;
