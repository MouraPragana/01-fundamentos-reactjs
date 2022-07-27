import React from "react";
import { ThumbsUp, Trash } from "phosphor-react"

import styles from "./Comment.module.css"
import { Avatar } from "./Avatar";

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar
                src="https://avatars.githubusercontent.com/u/78274293?v=4"
                hasBorder={false}
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Mateus Moura</strong>
                            <time title="11 de Maio as 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 2h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}