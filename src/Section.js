// 객체 : {props.children}
// 구조 분해 할당 : {children}

import { Children } from "react";

function Section(){
    return(
        <section className = "section">
            {Children}
        </section>

    );
}

export default Section;