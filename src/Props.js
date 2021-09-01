// props 시용
// props : properties
// cpmponent 와 component 사이에서 값을 전달할떼 사용하는 객체

function Props(props){
    return(
        <article className = "article">
            {props.number}
        </article>
    )

}

export default Props;