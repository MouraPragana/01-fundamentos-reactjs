import { Header } from "./components/Header"
import { Post } from "./Post"

import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit deserunt nostrum numquam quisquam libero tempore, ipsum incidunt non repellendus, iste facilis? Recusandae accusantium tenetur asperiores accusamus delectus impedit unde odio?"
          />
          <Post
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
