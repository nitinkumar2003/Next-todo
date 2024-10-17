import TodoList from "../../components/TodoList";

export default function Dashboard() {
    console.log(process.env.DATABASE_URL,"DATABASE_URL");
    return (
  
      <>
      <h1>Dashboard</h1>
      <TodoList />
      </>
    );
  }