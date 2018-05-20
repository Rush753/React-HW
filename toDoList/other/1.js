return this.state.items.map((item, index) => {
      if(item.styleDec){
      return <div key={index} id={index} className="task-list__task" >
      <div className="edit" style={{display:'none'}}>
      <input className = "editTaski"></input>
      <button className="editOk" onClick = {this.editOk}>OK</button>
      </div>
      <div className = "task" style ={{textDecorationLine:'line-through'}} onClick={this.styleDecor} >{item.text}</div>
      <button className = "btnDel task__btnDel btn-hover" onClick={this.deleteTask}>X</button>
      <button onClick ={this.editTask} className="task__btnEdit btn-hover"  >Edit</button>
      </div>
    }else{
      return <div key={index} id={index} className="task-list__task" >
      <div className="edit" style={{display:'none'}}>
      <input className = "editTaski" ></input>
      <button className="editOk" onClick = {this.editOk} >OK</button>
      </div>
      <div className = "task"  onClick={this.styleDecor} >{item.text}</div>
      <button className = "btnDel task__btnDel btn-hover" onClick={this.deleteTask}>X</button>
      <button onClick ={this.editTask} className="task__btnEdit btn-hover" >Edit</button>
      </div>
    }
    }) 
  }