import React from 'react';

const ButtonList = () => {
  const buttons3 = ["Trending", "Shopping", "Music", "Movies", "Live", "Gaming", "News", "Sports", "Courses", "Podcast"];

  return (
    <div>
      <ul className="flex flex-wrap mt-14">
        {buttons3.map((button1, index) => {
          return (
            <li
              key={index}
              className={`px-4 py-2 bg-gray-200 rounded-full mx-1 my-1 ${
                index < 3 ? "block" : "hidden sm:block"
              }`}
            >
              {button1}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ButtonList;
