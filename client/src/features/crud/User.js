import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "./userSlice";

function Crud() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [editUserId, setEditUserId] = useState("");
  const [formData, setFormData] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && password) {
      dispatch(addUser({ id: nanoid(), firstName, lastName, password }));
      setFirstName("");
      setLastName("");
      setPassword("");
    }
  };

  const handleEdit = (u) => {
    const editable = {
      firstName: u.firstName,
      lastName: u.lastName,
    };
    setFormData(editable);
    setEditUserId(u.id);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData };
    newData[name] = value;
    setFormData(newData);
  };

  const handleSave = (u) => {
    dispatch(
      updateUser({
        id: u.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: u.password,
      })
    );
    setEditUserId("");
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      {user.user.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>firstName</th>
              <th>lastName</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user?.user?.map((u) =>
              editUserId === u.id ? (
                <tr key={u.id}>
                  <td>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleOnChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleOnChange}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleSave(u)}>save</button>
                    <button onClick={() => setEditUserId()}>cancel</button>
                  </td>
                </tr>
              ) : (
                <tr key={u.id}>
                  <td>{u.firstName}</td>
                  <td>{u.lastName}</td>
                  <td>
                    <button onClick={() => handleEdit(u)}>update</button>
                    <button onClick={() => dispatch(deleteUser(u.id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Crud;
