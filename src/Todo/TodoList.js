import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem/TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0
  }
};
function TodoList(props) {
  // data = Array.from(props.data);
  //console.log(typeof props.todos);
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};
export default TodoList;
