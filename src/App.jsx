import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit deserunt nostrum numquam quisquam libero tempore, ipsum incidunt non repellendus, iste facilis? Recusandae accusantium tenetur asperiores accusamus delectus impedit unde odio?"
      />
      <Post
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />
    </div>
  )
}
