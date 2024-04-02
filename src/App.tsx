import React from 'react'
import './App.css'
import {photos, todos} from "./mock.ts";
// import {TaskItem} from "./components/TodoTask/TaskItem.tsx";
import {PhotoType} from "./types.ts";
import {PhotoItem} from "./components/Photo/PhotoItem.tsx";
// import {UserForm} from "./components/UserForm/UserForm.tsx";
// import {Control} from "./components/Control/Control.tsx";

export const App: React.FC = () => {
    console.log(todos);

  return (
    <>
        <h2>My tasks:</h2>
        {/*<ol>*/}
        {/*    {todos.map(*/}
        {/*        (item: TodoTask) => (*/}
        {/*            <TaskItem item={item} key={item.id} />*/}
        {/*    ))}*/}
        {/*</ol>*/}
        <ol>
            {photos.map(
                (item: PhotoType) => (
                    <PhotoItem item={item} key={item.id}/>
                ))}
        </ol>
        {/*<UserForm />*/}
        {/*<Control />*/}
    </>
  )
}

export default App
