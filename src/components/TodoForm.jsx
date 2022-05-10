import React, {useState} from 'react'


const TodoForm = (props) => {

    const [name, setName] = useState("");

    const changeName = (e) => {
        setName(e.target.value)
    }
    const handleAdd = () => {
        props.handleAdd({name: name, checked: false})
        setName("")
    }



  return (
    <div className="container border border-dark border-5 mt-5 bg-light bg-gradient">
    <div className="container mt-5">
            <label for="exampleFormControlInput1" class="form-label">TODO LIST</label>
            <input className="form-control" type="text" onChange={changeName} value={name}/>
            <button className="btn btn-dark mt-3 mb-5" onClick={handleAdd}>ADD</button>
    </div>
    </div>
  )
}

export default TodoForm

