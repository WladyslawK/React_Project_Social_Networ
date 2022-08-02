import React from "react";
import s from "./Post.module.css"

export const Post = (props) => {
    return (
    <>
      <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT84d15fAX4w8mGwTvzKICYAE0TUt107oa2Zg&usqp=CAU" alt="avatar" />
        <p>{props.text}</p>
        <div>
          <span>like</span>
        </div>
      </div>       
    </>
  );
}

