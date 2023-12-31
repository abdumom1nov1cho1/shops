import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const api = "https://trailfx-apias.onrender.com/TrailFX";
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [mura, setMura] = useState("");
  const [title, SetTitle] = useState();
  const [image, SetImage] = useState();
  const [desc, SetDesc] = useState();
  const [category, SetCategory] = useState();
  const [price, SetPrice] = useState();
  const [data, setData] = useState([]);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  // const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  

  let logoutClasses = "";

  const LogoutFunc = () => {
    const userAuth = JSON.parse(localStorage.getItem("auth"));
    if (userAuth) {
      logoutClasses += "btn btn-danger";
      console.log(true);
    }else{
      console.log(false);
      logoutClasses = "d-none"
    }
  };
  LogoutFunc()
  const userData = {
    name: name,
    // number: number,
    login: user,
    pass: pass,

  };

  useEffect(() => {
    axios
      .get(`https://trailfx-apias.onrender.com/TrailFX`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const PatchElements = async (_id) => {
    await axios.patch(`https://trailfx-apias.onrender.com/TrailFX/${_id}`, {
      title: title,
      image: image,
      desc: desc,
      price: price,
      category: category,
    });
    window.location.reload();
  };

  const AdminDelete = async (_id) => {
    try {
      const res = await axios
        .delete(`https://trailfx-apias.onrender.com/TrailFX/${_id}`)
        .then(() => window.location.reload());
      console.log("Object deleted");
    } catch (error) {
      alert(error);
    }
  };
  const CreateDevice = (e) => {
    e.preventDefault();
    axios
      .post("https://trailfx-apias.onrender.com/TrailFX/", {
        title: title,
        image: image,
        desc: desc,
        price: price,
        category: category,
      })
      .then((res) => {
        console.log(res.data);
        alert("Object added");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const searchText = (event) => {
    setMura(event.target.value);
  };

  const dataSearch = data.filter((item) => {
    return item.title.toLowerCase().includes(mura.toLowerCase());
  });

  return (
    <Context.Provider
      value={{
        setData,
        data,
        mura,
        searchText,
        dataSearch,
        api,
        user,
        setUser,
        pass,
        setPass,
        SetTitle,
        userData,
        PatchElements,
        AdminDelete,
        createContext,
        CreateDevice,
        title,
        setData,
        image,
        SetImage,
        price,
        desc,
        SetDesc,
        SetPrice,
        category,
        SetCategory,
        logoutClasses,
        LogoutFunc,
        name,
        setName,
        // number,
        // setNumber
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
