import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

import './styles.css';
import styled from "styled-components";
import { HiOutlineX } from "react-icons/hi"; 
import { HiOutlineDotsHorizontal } from "react-icons/hi"; 

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 15px #ccc;
  border-radius: 10px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Card = styled.tr``;
export const Title = styled.th`
  text-align: start;
  font-weight: 600;
  border-bottom: 2px solid #f4f4f4;
  padding-bottom: 5px;
`;
export const Server = styled.td`
  padding-top: 15px;
  text-align: start;
  font-weight: 400;
  border-bottom: 2px solid #f9f9f9;
  padding-bottom: 5px;
`;

const Index = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:3000/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
          <Title>Name</Title>
          <Title>Email</Title>
          <Title>Tel</Title>
          <Title>   </Title>
          <Title>   </Title>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Card key={i}>
            <Server width="25%">{item.name}</Server>
            <Server width="30%">{item.email}</Server>
            <Server width="20%">{item.tel}</Server>
            
            <Server width="4.5%">
              <HiOutlineDotsHorizontal onClick={() => handleEdit(item)} className="options"/>
            </Server>
            <Server width="4.5%">
              <HiOutlineX onClick={() => handleDelete(item.id)} className="options"/>
            </Server>
          </Card>
        ))}
      </Tbody>
    </Table>
  );
};

export default Index;
