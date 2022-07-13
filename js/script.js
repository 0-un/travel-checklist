//입력하는 item 들어가는 배열
let arr_list = new Array(); 


// #item에 입력 값 추가 -> 추가 기록에 뜸
function addList() { // 배열의 값을 호출(저장)
    let item = document.querySelector('#item').value;
    //value 받아온 값을 저장
    // index에 입력된 값을 item이라는 변수에 넣는다
    if (item != null && item != "") { //item 값이 null 이 아니거나 공백이 아닐 때 => text 삽입 되어 있을 때
        arr_list.push(item); // arr_list 배열에 item의 값을 넣는다
        document.querySelector('#item').value = ""; // index를 공백 처리
        document.querySelector('#item').focus(); // 한번 추가하고 나서도 다시 검색창에 커서 깜빡임
    }
    else {
        document.querySelector('#item').focus();
    }
    showList();
    //arr_list 배열의 내용 + showList의 동작을 화면에 보여주기 위해 호출
};


// 입력창에 할일 추가하면 리스트 기록 
function showList() { //선언하는 부분 안에서 태그 삽입  (내용 대치)
    let list = "<ul>";
    for (let i = 0; i < arr_list.length; i++) {
        // 리스트를 지우기 위해 각 목록을 변수명으로 지정
        let re_id = 'itemList_' + i;
        //arr_list[i]  : arr_list의 인덱스 i번째 값
        list += `<li>${arr_list[i]}<div class = 'close' id = ${re_id} onclick = removeList(${re_id}); ><i class="fa-solid fa-circle-xmark"></i></div></li>`
    };
    list += "</ul>";
    document.querySelector("#itemList").innerHTML = list;
    // #itemList를 갖고 와서 속성 안에  list 대입
    //#itemList 뒤에 html 형식으로 list를 삽입
};

// X 누르면 목록 삭제
function removeList(remove_id) {
    //매개변수 remove_id : re_id에 들어간 itemList의 인덱스 값을 저장
    // onclick 했을 때 remove_id(list에서 id 전달 받음)를 removeList에서 불러옴
    let index = remove_id.id.substring(9, remove_id.length);
    //remove_id.id :  객체형태로 된 div 요소를 받아와서 그 안의 id 값 => removeList()에 삽입 되는 removie_id 중 id 값 
    //remove_id.length : 2자리 수의 경우 substring 값이 변경 될 수 있으니 범위를 remove_id의 길이만큼 지정
    arr_list.splice(index, 1); // index부터 1칸만 삭제
    showList(); // 배열에서 삭제된 것을 showList를 호출해 화면에 업데이트 하여 출력 
};


