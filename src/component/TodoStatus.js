function TodoStatus(){

    return(
        <div class="status-section">
            <div class="status-left">10개 남음</div>
            <div class="status-filter">
                <button type="button" class="btn-all active">전체보기</button>
                <button type="button" class="btn-left">남은목록</button>
                <button type="button" class="btn-complete">완료목록</button>
            </div>
            <div class="status-clear">
                <button type="button" class="btn-clear">완료목록삭제</button>
            </div>
        </div>

    );

}

export default TodoStatus;