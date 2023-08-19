
import './App.css';
import { useState } from 'react';

function App() {
  let [data, setData] = useState([]);
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [color, setColor] = useState("");
  let [item, setItem] = useState({});

  const apiRead = async () => {
    console.log("read")
    try {
      await fetch("https://crudcrud.com/api/ae85c9c1e3f347f9a0dab34beac87f35/unicorns")
        .then(response => response.json())
        .then(d => {
          setData(d);
          console.log("data changed");
          fillDetails({})
        })
    }
    catch (error) {
      console.log("Error:", error);
    }
  }

  const apiPost = async () => {
    console.log("add")
    try {
      const response = await fetch("https://crudcrud.com/api/ae85c9c1e3f347f9a0dab34beac87f35/unicorns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          age: age,
          colour: color
        })
      })

      if (response.ok) {
        console.log("added successfully");
        apiRead()
      }
      else {
        console.log("Error adding user. Status:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const apiDelete = async (p_id) => {
    console.log("delete")
    const url = `https://crudcrud.com/api/ae85c9c1e3f347f9a0dab34beac87f35/unicorns/${p_id}`;

    try {
      const response = await fetch(url, {
        method: "DELETE"
      });

      if (response.ok) {
        console.log("User deleted successfully.");
        apiRead();
      } else {
        console.log("Error deleting user. Status:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const apiUpdate = async (item) => {
    console.log("update")
    const url = `https://crudcrud.com/api/ae85c9c1e3f347f9a0dab34beac87f35/unicorns/${item._id}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          age: age,
          colour: color
        })
      })

      if (response.ok) {
        console.log("User updated successfully");
        apiRead();
      }
      else {
        console.log("Error updating user. Status:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fillDetails = (item) => {
    setName(item.name !== undefined ? item.name : "")
    setAge(item.age !== undefined ? item.age : "")
    setColor(item.colour !== undefined ? item.colour : "")
    setItem(item)
  }

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <br></br>
      <button onClick={apiRead}>Click me to read data</button>
      <br></br><br></br>
      <form>
        <input type='text' placeholder='name' onChange={(e) => { setName(e.target.value) }} value={name} />
        <br></br><br></br>
        <input type='text' placeholder='age' onChange={(e) => { setAge(e.target.value) }} value={age} />
        <br></br><br></br>
        <input type='text' placeholder='color' onChange={(e) => { setColor(e.target.value) }} value={color} />
        <br></br><br></br>
        <button type='submit' onClick={(e) => {
          e.preventDefault();
          console.log(item);
          if (Object.entries(item).length === 0) {
            apiPost();
          }
          else {
            apiUpdate(item);
            setItem({})
          }
        }} >{Object.entries(item).length === 0 ? "Submit" : "Edit"}</button>
      </form>
      <br></br>
      {data && data.map((item) => (
        <div key={item._id}>
          <h1>{item.name}</h1>
          <p>{item.age}</p>
          <p>{item.colour}</p>
          <br></br>
          <button onClick={(e) => fillDetails(item)}>Edit</button>
          <button onClick={(e) => apiDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
