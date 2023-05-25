
import commentsCounter from "../modules/comments_counter.js";

describe("we are going to test if counter is able to count how many comments we have", () => {
  let comments = [
    {
        "comment": "This is my favorite pokemon",
        "creation_date": "2023-05-23",
        "username": "Bejanmin Mendez"
    },
    {
        "comment": "Nice Pokemon! ",
        "creation_date": "2023-05-23",
        "username": "Gerson Higgins"
    },
    {
        "comment": "Nice one",
        "creation_date": "2023-05-23",
        "username": "Armando Puertas"
    }  
  ];


  test("we are going to test if counter is able to count how many comments we have", () => {
    expect(commentsCounter(comments)).toBe(3);
  })
  
  test("it should return 0 when there are no comments", () => {
    comments = [];
    expect(commentsCounter(comments)).toBe(0);
  })




});
