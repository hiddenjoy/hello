// 데이터 관리 기능 (전체리스트 관리)
import TodoItem from "./item.js";

// To-Do 항목 관리 모듈 정의
// class 안 써도, 그냥 바로 객체를 만들 수 있음. todoList 자체가 객체임.

const todoList = {
  items: [], // To-Do 항목 리스트

  // 새로운 항목을 추가하는 메소드
  add(title, dueDate) {
    const item = new TodoItem(title, dueDate); //새 객체 만들어주기
    this.items.push(item); // 정보 넣기. this.items는 배열이라서 push 가능
    this.save(); // 로컬 스토리지에 항목 리스트 저장
    return item;
  },

  // 항목을 삭제하는 메소드
  remove(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.save(); // 로컬 스토리지에 항목 리스트 저장
    }
  },

  // 항목의 완료 여부를 토글하는 메소드
  toggleComplete(item) {
    item.toggleComplete();
    this.save(); // 로컬 스토리지에 항목 리스트 저장
  },

  // To-Do 항목 리스트를 로컬 스토리지에 저장하는 메소드
  save() {
    // console.log(this.items);
    //     (2) [{…}, TodoItem]
    //     0: {title: 'abc', dueDate: '2023-04-02', completed: false}
    //     1: TodoItem {title: 'a', dueDate: '2023-04-11', completed: false}
    //     length: 2
    //     [[Prototype]]: Array(0)
    // console.log(JSON.stringify(this.items));
    //     [{ title: "abc", dueDate: "2023-04-12", completed: false }];
    localStorage.setItem("todoList", JSON.stringify(this.items));
  },

  // To-Do 항목 리스트를 로컬 스토리지에서 불러오는 메소드
  load() {
    const items = localStorage.getItem("todoList");
    if (items) {
      this.items = JSON.parse(items);
    }
  },
};

export { todoList };
