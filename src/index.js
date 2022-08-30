/**
 * @class
 */
class Todo {
  /**
   * @constructs
   * @param {Object} params
   * @param {number} params.id
   * @param {string} params.content
   * @param {boolean} params.done 기본값 false
   * @param {string} params.category 기본값 nocategory
   * @param {string[]} [params.tags] 태그는 없을 수 있다.
   */
  constructor(params) {}
}

/**
 * @class
 */
class Todos {
  /**
   * @constant
   * @type {Todo[]}
   */
  todos = [];

  /**
   * 할일을 만든다
   * @param {Object} params
   * @param {string} params.content
   * @param {string} [params.category] 입력하지 않으면 기본 카테고리로 설정.
   * @param {string[]} [params.tags] 태그는 없을 수 있다.
   * @return {boolean} 기능의 성공여부를 boolean으로 반환.
   */
  create(params) {}

  /**
   * id를 전달하면 해당 할 일을 조회하고 아니면 할 일 전체를 조회 한다.
   * @param {number} [id]
   * @return {Todo[]} todo를 배열로 반환한다.
   */
  read(id) {}

  /**
   * id를 제외한 모든 속성을 수정할 수 있다.
   * @param {Object} params
   * @param {number} params.id id는 수정할 수 없다.
   * @param {string} [params.content]
   * @param {boolean} [params.done]
   * @param {string} [params.category]
   * @param {string[]} [params.tags] 태그는 없을 수 있다.
   * @return {boolean} 기능의 성공여부를 boolean으로 반환.
   */
  update(params) {}

  /**
   * id를 전달 유무에 따라 한 개, 혹은 할 일 전체를 삭제한다.
   * @param {number} [id]
   * @param {string} [tags] 특정 할 일의 특정 태그나 모든 태그를 삭제한다.
   * @return {boolean} 기능의 성공여부를 boolean으로 반환.
   */
  delete(id, tags) {}
}
