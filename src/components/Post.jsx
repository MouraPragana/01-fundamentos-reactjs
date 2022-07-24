import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/78274293?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Mateus Moura</strong>
                        <span>Analista de Sistemas</span>
                    </div>
                </div>

                <time
                    title="11 de Maio as 08:13"
                    dateTime="2022-05-11 08:13:30">Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>E ai pessoal !</p>
                <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLR Return</p>
                <p><a href="#">link.qualquer/aqui</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}