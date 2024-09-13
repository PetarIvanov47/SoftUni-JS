export default function GameCommentItem({
    content,
    author,
}) {
    return (
        <li className="comment" >
            <p>{author.username}: {content}</p>
        </li>
    )
}