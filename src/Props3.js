// props 시용
// props : properties
// cpmponent 와 component 사이에서 값을 전달할떼 사용하는 객체

function Props3({number, value}){
    return(
        <article className = "article">
            {number} {value}
        </article>
    )

}

export default Props3;